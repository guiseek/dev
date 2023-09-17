import {InjectionToken} from '@angular/core'
import {UiBaseConfig} from './interfaces'

const UI_BASE_CONFIG_VALUE: UiBaseConfig = {
  pagination: {
    pageSize: 10,
    hidePageSize: false,
    showFirstLastButtons: true,
    formFieldAppearance: 'fill',
    pageSizeOptions: [10, 25, 50, 100],
  },
}

const UI_BASE_CONFIG_TOKEN = new InjectionToken<UiBaseConfig>('ui-config')

export {UI_BASE_CONFIG_TOKEN, UI_BASE_CONFIG_VALUE}
