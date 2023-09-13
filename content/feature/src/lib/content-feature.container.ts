import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {ContentFeatureService} from './content-feature.service'
import {MatPaginator} from '@angular/material/paginator'
import {FilterFieldsForm} from '@dev/shared-ui-forms'
import {MatSort} from '@angular/material/sort'
import {Content} from '@dev/content-data-access'

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

  destroyRef = inject(DestroyRef)

  readonly service = inject(ContentFeatureService)

  filterForm = new FilterFieldsForm<Content>(['title'])

  ngAfterViewInit() {
    this.service.initialize(this.paginator, this.sort, this.destroyRef)
  }
}
