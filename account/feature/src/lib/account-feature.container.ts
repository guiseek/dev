import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {AccountFeatureService} from './account-feature.service'
import {MatPaginator} from '@angular/material/paginator'
import {FilterFieldsForm} from '@dev/shared-ui-forms'
import {MatSort} from '@angular/material/sort'
import {User} from '@dev/account-data-access'

@Component({
  selector: 'dev-account-feature',
  templateUrl: './account-feature.container.html',
  styleUrls: ['./account-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountFeatureService],
})
export class AccountFeatureContainer implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  destroyRef = inject(DestroyRef)

  readonly service = inject(AccountFeatureService)

  filterForm = new FilterFieldsForm<User>(['name'])

  ngAfterViewInit() {
    this.service.initialize(this.paginator, this.sort, this.destroyRef)
  }
}
