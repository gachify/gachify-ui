import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgLetDirective, DataCyDirective, MatIconOutlinedDirective } from './directives'
import { DurationPipe } from './pipes'
import { MaterialModule } from './material.module'

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [DataCyDirective, DurationPipe, MatIconOutlinedDirective, NgLetDirective],
  exports: [
    CommonModule,
    DataCyDirective,
    DurationPipe,
    FormsModule,
    MaterialModule,
    MatIconOutlinedDirective,
    NgLetDirective,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
