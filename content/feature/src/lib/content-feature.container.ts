import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  ViewChildren,
} from '@angular/core'
import {ContentFeatureService} from './content-feature.service'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import {BehaviorSubject} from 'rxjs'
import {CdkOverlayOrigin} from '@angular/cdk/overlay'

@Component({
  selector: 'dev-content-feature',
  templateUrl: './content-feature.container.html',
  styleUrls: ['./content-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContentFeatureService],
})
export class ContentFeatureContainer implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  @ViewChildren(CdkOverlayOrigin)
  trigger: CdkOverlayOrigin

  destroyRef = inject(DestroyRef)

  readonly service = inject(ContentFeatureService)

  #formOpened = new BehaviorSubject(false)
  formOpened$ = this.#formOpened.asObservable()

  ngAfterViewInit() {
    this.service.initialize(this.paginator, this.sort, this.destroyRef)
  }
}
