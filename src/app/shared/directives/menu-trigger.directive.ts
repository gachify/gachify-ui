import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
  inject,
} from '@angular/core'

import { MenuComponent } from '@shared/components'

interface Position {
  x: number
  y: number
}

@Directive({
  selector: 'button[menuTrigger]',
})
export class MenuTriggerDirective {
  private readonly element = inject(ElementRef)
  private readonly renderer = inject(Renderer2)
  private readonly viewContainer = inject(ViewContainerRef)

  @Input({ required: true })
  menuTrigger: MenuComponent

  private embeddedView: EmbeddedViewRef<HTMLElement>

  @HostListener('click')
  handleClick(): void {
    // const position = this.getPosition()

    // this.renderer.setStyle(this.element.nativeElement, 'left', `${position.x}px`)
    // this.renderer.setStyle(this.element.nativeElement, 'top', `${position.y}px`)

    this.embeddedView = this.viewContainer.createEmbeddedView(this.menuTrigger.templateRef)
  }
}
