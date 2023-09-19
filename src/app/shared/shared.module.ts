import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgLetDirective, DataCyDirective } from './directives'
import { DurationPipe } from './pipes'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DataCyDirective, DurationPipe, NgLetDirective],
  exports: [CommonModule, DataCyDirective, DurationPipe, FormsModule, NgLetDirective, ReactiveFormsModule],
})
export class SharedModule {}
