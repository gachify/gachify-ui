import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgLetDirective, DataCyDirective, MatIconOutlinedDirective, MatListItemMediaDirective } from './directives'
import { DurationPipe } from './pipes'
import { MaterialModule } from './material.module'

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [DataCyDirective, DurationPipe, MatIconOutlinedDirective, MatListItemMediaDirective, NgLetDirective],
  exports: [
    CommonModule,
    DataCyDirective,
    DurationPipe,
    FormsModule,
    MaterialModule,
    MatIconOutlinedDirective,
    MatListItemMediaDirective,
    NgLetDirective,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
