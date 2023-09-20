import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgLetDirective, DataCyDirective, MatIconOutlinedDirective } from './directives'
import { DurationPipe } from './pipes'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DataCyDirective, DurationPipe, MatIconOutlinedDirective, NgLetDirective],
  exports: [
    CommonModule,
    DataCyDirective,
    DurationPipe,
    FormsModule,
    MatIconOutlinedDirective,
    NgLetDirective,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
