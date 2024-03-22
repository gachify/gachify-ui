import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import {
  IsAuthenticatedDirective,
  IsUnauthenticatedDirective,
  MenuTriggerDirective,
  SelectorDirective,
  SliderDirective,
  ValidationDirective,
} from './directives'
import {
  ChipComponent,
  MenuComponent,
  PlayIconComponent,
  RemixCardComponent,
  RemixCardSkeletonComponent,
  RemixListItemComponent,
  RemixListItemSkeletonComponent,
  SearchComponent,
  SkeletonComponent,
} from './components'
import { DurationPipe, ImageUrlPipe } from './pipes'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ChipComponent,
    DurationPipe,
    ImageUrlPipe,
    IsAuthenticatedDirective,
    IsUnauthenticatedDirective,
    MenuComponent,
    MenuTriggerDirective,
    PlayIconComponent,
    RemixCardComponent,
    RemixCardSkeletonComponent,
    RemixListItemComponent,
    RemixListItemSkeletonComponent,
    SearchComponent,
    SelectorDirective,
    SkeletonComponent,
    SliderDirective,
    ValidationDirective,
  ],
  exports: [
    ChipComponent,
    CommonModule,
    DurationPipe,
    ImageUrlPipe,
    IsAuthenticatedDirective,
    IsUnauthenticatedDirective,
    MenuComponent,
    MenuTriggerDirective,
    PlayIconComponent,
    ReactiveFormsModule,
    RemixCardComponent,
    RemixCardSkeletonComponent,
    RemixListItemComponent,
    RemixListItemSkeletonComponent,
    RouterModule,
    SearchComponent,
    SelectorDirective,
    SkeletonComponent,
    SliderDirective,
    ValidationDirective,
  ],
})
export class SharedModule {}
