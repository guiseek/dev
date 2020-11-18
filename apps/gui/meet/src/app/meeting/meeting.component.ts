import { FormGroup, FormControl, Validators } from '@angular/forms'
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core'
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'meet-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('startButton') startButton: MatButton
  @ViewChild('callButton') callButton: MatButton
  @ViewChild('hangupButton') hangupButton: MatButton

  @ViewChild('localVideo') localVideo: ElementRef<HTMLVideoElement>
  @ViewChild('remoteVideo') remoteVideo: ElementRef<HTMLVideoElement>

  sdpSemantics = [
    { key: '', value: 'Default' },
    { key: 'unified-plan', value: 'Unified Plan' },
    { key: 'plan-b', value: 'Plan B' },
  ]

  form = new FormGroup({
    sdpSemantics: new FormControl('', Validators.required),
  })

  localStream: MediaStream
  remoteStream: MediaStream

  peer1: RTCPeerConnection
  peer2: RTCPeerConnection

  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  constructor() {}

  getName(peer: RTCPeerConnection) {
    return peer === this.peer1 ? 'peer1' : 'peer2'
  }

  getOtherPeer(peer: RTCPeerConnection) {
    console.log(peer === this.peer1, peer, this.peer1);

    return peer === this.peer1 ? this.peer2 : this.peer1
  }

  ngOnInit(): void {}

  async start() {
    console.log('Requesting local stream')
    this.startButton.disabled = true
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })
      console.log('Received local stream')
      this.localVideo.nativeElement.srcObject = stream
      this.localVideo.nativeElement.muted = true
      this.localStream = stream
      this.callButton.disabled = false
    } catch (e) {
      alert(`getUserMedia() error: ${e.name}`)
    }
  }

  getSelectedSdpSemantics() {
    // const sdpSemanticsSelect = document.querySelector('#sdpSemantics');
    // const option = sdpSemanticsSelect.options[sdpSemanticsSelect.selectedIndex];
    // return option.value === '' ? {} : {sdpSemantics: option.value};
    return this.form.valid ? this.form.value : {}
  }

  async call() {
    this.callButton.disabled = true
    this.hangupButton.disabled = false
    console.log('Starting call')
    const startTime = window.performance.now()
    const videoTracks = this.localStream.getVideoTracks()
    const audioTracks = this.localStream.getAudioTracks()
    if (videoTracks.length > 0) {
      console.log(`Using video device: ${videoTracks[0].label}`)
    }
    if (audioTracks.length > 0) {
      console.log(`Using audio device: ${audioTracks[0].label}`)
    }
    const configuration = this.getSelectedSdpSemantics()
    console.log('RTCPeerConnection configuration:', configuration)
    this.peer1 = new RTCPeerConnection(configuration)
    console.log('Created local peer connection object this.peer1')
    this.peer1.addEventListener('icecandidate', (e) =>
      this.onIceCandidate(this.peer1, e)
    )
    this.peer2 = new RTCPeerConnection(configuration)
    console.log('Created remote peer connection object this.peer2')
    this.peer2.addEventListener('icecandidate', (e) =>
      this.onIceCandidate(this.peer2, e)
    )
    this.peer1.addEventListener('iceconnectionstatechange', (e) =>
      this.onIceStateChange(this.peer1, e)
    )
    this.peer2.addEventListener('iceconnectionstatechange', (e) =>
      this.onIceStateChange(this.peer2, e)
    )
    this.peer2.addEventListener('track', this.gotRemoteStream)

    this.localStream
      .getTracks()
      .forEach((track) => this.peer1.addTrack(track, this.localStream))
    console.log('Added local stream to this.peer1')

    try {
      console.log('this.peer1 createOffer start')
      const offer = await this.peer1.createOffer(this.offerOptions)
      await this.onCreateOfferSuccess(offer)
    } catch (e) {
      this.onCreateSessionDescriptionError(e)
    }
  }

  onCreateSessionDescriptionError(error) {
    console.log(`Failed to create session description: ${error.toString()}`)
  }

  async onCreateOfferSuccess(desc) {
    console.log(`Offer from peer1\n${desc.sdp}`)
    console.log('peer1 setLocalDescription start')
    try {
      await this.peer1.setLocalDescription(desc)
      this.onSetLocalSuccess(this.peer1)
    } catch (e) {
      this.onSetSessionDescriptionError()
    }

    console.log('this.peer2 setRemoteDescription start')
    try {
      await this.peer2.setRemoteDescription(desc)
      this.onSetRemoteSuccess(this.peer2)
    } catch (e) {
      this.onSetSessionDescriptionError()
    }

    console.log('this.peer2 createAnswer start')
    // Since the 'remote' side has no media stream we need
    // to pass in the right constraints in order for it to
    // accept the incoming offer of audio and video.
    try {
      const answer = await this.peer2.createAnswer()
      await this.onCreateAnswerSuccess(answer)
    } catch (e) {
      this.onCreateSessionDescriptionError(e)
    }
  }
  onSetLocalSuccess(peer: RTCPeerConnection) {
    console.log(`${this.getName(peer)} setLocalDescription complete`)
  }
  onSetRemoteSuccess(peer: RTCPeerConnection) {
    console.log(`${this.getName(peer)} setRemoteDescription complete`)
  }
  onSetSessionDescriptionError(error?) {
    console.log(`Failed to set session description: ${error.toString()}`)
  }
  gotRemoteStream(e) {
    if (this.remoteVideo.nativeElement.srcObject !== e.streams[0]) {
      this.remoteVideo.nativeElement.srcObject = e.streams[0]
      console.log('peer2 received remote stream')
    }
  }

  hangup() {
    console.log('Ending call')
    this.peer1.close()
    this.peer2.close()
    this.peer1 = null
    this.peer2 = null
    this.hangupButton.disabled = true
    this.callButton.disabled = false
  }

  async onCreateAnswerSuccess(desc) {
    console.log(`Answer from peer2:\n${desc.sdp}`)
    console.log('peer2 setLocalDescription start')
    try {
      await this.peer2.setLocalDescription(desc)
      this.onSetLocalSuccess(this.peer2)
    } catch (e) {
      this.onSetSessionDescriptionError(e)
    }

    console.log('this.peer1 setRemoteDescription start')
    try {
      await this.peer1.setRemoteDescription(desc)
      this.onSetRemoteSuccess(this.peer1)
    } catch (e) {
      this.onSetSessionDescriptionError(e)
    }
  }

  async onIceCandidate(peer: RTCPeerConnection, event) {
    try {
      await this.getOtherPeer(peer).addIceCandidate(event.candidate)
      this.onAddIceCandidateSuccess(peer)
    } catch (e) {
      this.onAddIceCandidateError(peer, e)
    }

    console.log(
      `${this.getName(peer)} ICE candidate:\n${
        event.candidate ? event.candidate.candidate : '(null)'
      }`
    )
  }

  onAddIceCandidateSuccess(peer: RTCPeerConnection) {
    console.log(`${this.getName(peer)} addIceCandidate success`)
  }

  onAddIceCandidateError(peer: RTCPeerConnection, error) {
    console.log(
      `${this.getName(peer)} failed to add ICE Candidate: ${error.toString()}`
    )
  }

  onIceStateChange(peer: RTCPeerConnection, event) {
    if (peer) {
      console.log(`${this.getName(peer)} ICE state: ${peer.iceConnectionState}`)
      console.log('ICE state change event: ', event)
    }
  }

  ngAfterViewInit() {
    console.log(this.startButton)
    console.log(this.callButton)
    console.log(this.hangupButton)

    console.log(this.localVideo)
    console.log(this.remoteVideo)
  }
}
