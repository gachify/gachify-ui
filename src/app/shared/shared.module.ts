import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgLetDirective, DataCyDirective } from './directives'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DataCyDirective, NgLetDirective],
  exports: [CommonModule, DataCyDirective, FormsModule, NgLetDirective, ReactiveFormsModule],
})
export class SharedModule {}
