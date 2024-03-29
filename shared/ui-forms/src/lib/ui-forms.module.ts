import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'
import {PortalModule} from '@angular/cdk/portal'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'
import {MatChipsModule} from '@angular/material/chips'
import {MatNativeDateModule} from '@angular/material/core'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {FilterFieldsComponent} from './components'
import {VisibleFieldsComponent} from './components/visible-fields/visible-fields.component'
import {FilterByComponent} from './components/filter-by/filter-by.component'

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    FilterFieldsComponent,
    VisibleFieldsComponent,
    FilterByComponent,
  ],
  declarations: [
    FilterFieldsComponent,
    VisibleFieldsComponent,
    FilterByComponent,
  ],
})
export class UiFormsModule {}
