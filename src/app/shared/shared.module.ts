import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { IsAuthenticatedDirective, IsUnauthenticatedDirective, SelectorDirective, SliderDirective } from './directives'
import {
  ChipComponent,
  DialogComponent,
  LogoComponent,
  MenuComponent,
  PlayIconComponent,
  PlayLabelComponent,
  RemixCardComponent,
  RemixCardSkeletonComponent,
  RemixListItemComponent,
  RemixListItemSkeletonComponent,
  SearchComponent,
  SkeletonComponent,
  TextFieldComponent,
} from './components'
import { DurationPipe, ImageUrlPipe } from './pipes'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [
    ChipComponent,
    DialogComponent,
    DurationPipe,
    ImageUrlPipe,
    IsAuthenticatedDirective,
    IsUnauthenticatedDirective,
    LogoComponent,
    MenuComponent,
    PlayIconComponent,
    PlayLabelComponent,
    RemixCardComponent,
    RemixCardSkeletonComponent,
    RemixListItemComponent,
    RemixListItemSkeletonComponent,
    SearchComponent,
    SelectorDirective,
    SkeletonComponent,
    SliderDirective,
    TextFieldComponent,
  ],
  exports: [
    ChipComponent,
    CommonModule,
    DialogComponent,
    DurationPipe,
    ImageUrlPipe,
    IsAuthenticatedDirective,
    IsUnauthenticatedDirective,
    LogoComponent,
    MenuComponent,
    PlayIconComponent,
    PlayLabelComponent,
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
    TextFieldComponent,
  ],
})
export class SharedModule {}
