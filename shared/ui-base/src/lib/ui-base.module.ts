import {UI_BASE_CONFIG_TOKEN, UI_BASE_CONFIG_VALUE} from './ui-base.config'
import {
  MAT_PAGINATOR_DEFAULT_OPTIONS,
  MatPaginatorIntl,
} from '@angular/material/paginator'
import {ModuleWithProviders, NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {CommonModule} from '@angular/common'
import {deepMerge} from '@dev/shared-util-data'
import {SelectionMenuComponent} from './components'
import {UiBaseConfig} from './interfaces'
import {PaginatorIntl} from './intl'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  declarations: [SelectionMenuComponent],
  exports: [SelectionMenuComponent],
})
export class UiBaseModule {
  static forRoot(config?: UiBaseConfig): ModuleWithProviders<UiBaseModule> {
    return {
      ngModule: UiBaseModule,
      providers: [
        {
          provide: UI_BASE_CONFIG_TOKEN,
          useValue: deepMerge(UI_BASE_CONFIG_VALUE, config ?? {}),
        },
        {
          provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
          useFactory(config: UiBaseConfig) {
            return config.pagination
          },
          deps: [UI_BASE_CONFIG_TOKEN],
        },
        {
          provide: MatPaginatorIntl,
          useClass: PaginatorIntl,
        },
      ],
    }
  }
}
