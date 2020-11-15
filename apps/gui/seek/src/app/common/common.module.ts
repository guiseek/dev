import { CommonModule as NgCommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [SearchComponent],
  imports: [
    NgCommonModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    SearchComponent,
  ],
})
export class CommonModule {}
