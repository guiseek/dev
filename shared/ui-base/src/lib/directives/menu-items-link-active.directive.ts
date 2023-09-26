import {Input, Directive, DestroyRef, ElementRef} from '@angular/core'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {NavigationEnd, Router} from '@angular/router'
import {filter} from 'rxjs'

@Directive({
  selector: '[devMenuLinkActive],[menuItemsLinkActive]',
})
export class MenuItemsLinkActiveDirective {
  @Input({required: true})
  menuItemsBaseLink = ''

  @Input({required: true})
  menuItemsLinkActive = 'active'

  constructor(
    router: Router,
    destroyRef: DestroyRef,
    elementRef: ElementRef<HTMLButtonElement>
  ) {
    router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(destroyRef)
      )
      .subscribe(() => {
        if (router.url.startsWith(this.menuItemsBaseLink)) {
          elementRef.nativeElement.classList.add(
            this.menuItemsLinkActive ?? 'active'
          )
        } else {
          elementRef.nativeElement.classList.remove(
            this.menuItemsLinkActive ?? 'active'
          )
        }
      })
  }
}
