import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  NgLetDirective,
  DataCyDirective,
  MatIconOutlinedDirective,
  MatListItemMediaDirective,
  ValidationErrorDirective,
} from './directives'
import { DurationPipe, ExtendedDurationPipe } from './pipes'
import { MaterialModule } from './material.module'
import {
  CategoryNavigationComponent,
  CategoryNavigationItemComponent,
  MatListItemSkeletonComponent,
  SongListComponent,
  SongListItemComponent,
} from './components'

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, NgOptimizedImage],
  declarations: [
    CategoryNavigationComponent,
    CategoryNavigationItemComponent,
    DataCyDirective,
    DurationPipe,
    ExtendedDurationPipe,
    MatIconOutlinedDirective,
    MatListItemMediaDirective,
    MatListItemSkeletonComponent,
    NgLetDirective,
    SongListComponent,
    SongListItemComponent,
    ValidationErrorDirective,
  ],
  exports: [
    CategoryNavigationComponent,
    CategoryNavigationItemComponent,
    CommonModule,
    DataCyDirective,
    DurationPipe,
    ExtendedDurationPipe,
    FormsModule,
    MaterialModule,
    MatIconOutlinedDirective,
    MatListItemMediaDirective,
    MatListItemSkeletonComponent,
    NgLetDirective,
    NgOptimizedImage,
    ReactiveFormsModule,
    SongListComponent,
    SongListItemComponent,
    ValidationErrorDirective,
  ],
})
export class SharedModule {}
