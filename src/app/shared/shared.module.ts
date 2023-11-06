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
  AddSongToPlaylistDialogComponent,
  CategoryNavigationComponent,
  CategoryNavigationItemComponent,
  MatListItemSkeletonComponent,
  PlayButtonComponent,
  SongsListItemComponent,
} from './components'

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, NgOptimizedImage],
  declarations: [
    AddSongToPlaylistDialogComponent,
    CategoryNavigationComponent,
    CategoryNavigationItemComponent,
    DataCyDirective,
    DurationPipe,
    ExtendedDurationPipe,
    MatIconOutlinedDirective,
    MatListItemMediaDirective,
    MatListItemSkeletonComponent,
    NgLetDirective,
    PlayButtonComponent,
    SongsListItemComponent,
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
    PlayButtonComponent,
    ReactiveFormsModule,
    SongsListItemComponent,
    ValidationErrorDirective,
  ],
})
export class SharedModule {}
