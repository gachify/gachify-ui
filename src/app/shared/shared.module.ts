import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgLetDirective, DataCyDirective, MatIconOutlinedDirective, MatListItemMediaDirective } from './directives'
import { DurationPipe } from './pipes'
import { MaterialModule } from './material.module'
import { MatListItemSkeletonComponent } from './components'

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [
    DataCyDirective,
    DurationPipe,
    MatIconOutlinedDirective,
    MatListItemMediaDirective,
    MatListItemSkeletonComponent,
    NgLetDirective,
  ],
  exports: [
    CommonModule,
    DataCyDirective,
    DurationPipe,
    FormsModule,
    MaterialModule,
    MatIconOutlinedDirective,
    MatListItemMediaDirective,
    MatListItemSkeletonComponent,
    NgLetDirective,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
