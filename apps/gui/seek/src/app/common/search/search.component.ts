import {
  SeekControlAccessor,
  SEEK_CONTROL_ACCESSOR,
} from './../forms/form-accessor'
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib'
import { Component, EventEmitter, Injectable, OnInit } from '@angular/core'
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

// interface ScullyNote extends ScullyRoute {
//   route: string
//   title: string
//   slugs?: string[]
//   published?: boolean
//   slug?: string
//   sourceFile?: string
//   lang?: string
// }

@Component({
  selector: 'seek-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SEEK_CONTROL_ACCESSOR],
})
export class SearchComponent extends SeekControlAccessor implements OnInit {
  valueChange = new EventEmitter()
  optionSelected = new EventEmitter()

  notes$ = this.scully.available$.pipe(
    map((ns) => ns.filter((n) => n.published))
  )
  constructor(
    private scully: ScullyRoutesService,
    private ngControl: NgControl
  ) {
    super()
  }

  ngOnInit(): void {
    console.log(this.ngControl)
    this.ngControl.valueAccessor = this
    this.ngControl.valueChanges.subscribe(console.log)
  }
}
