import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { IsAuthenticatedDirective, IsUnauthenticatedDirective, SelectorDirective, SliderDirective } from './directives'
import {
  ChipComponent,
  ControlErrorComponent,
  LogoComponent,
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
    ControlErrorComponent,
    DurationPipe,
    ImageUrlPipe,
    IsAuthenticatedDirective,
    IsUnauthenticatedDirective,
    LogoComponent,
    MenuComponent,
    PlayIconComponent,
    RemixCardComponent,
    RemixCardSkeletonComponent,
    RemixListItemComponent,
    RemixListItemSkeletonComponent,
    SearchComponent,
    SelectorDirective,
    SkeletonComponent,
    SliderDirective,
  ],
  exports: [
    ChipComponent,
    CommonModule,
    ControlErrorComponent,
    DurationPipe,
    ImageUrlPipe,
    IsAuthenticatedDirective,
    IsUnauthenticatedDirective,
    LogoComponent,
    MenuComponent,
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
  ],
})
export class SharedModule {}
