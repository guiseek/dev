import {MediaMatcher} from '@angular/cdk/layout'
import {Loader} from '@dev/shared-data-access'
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'dev-root',
  template: `
    <div class="app-container" [class.app-is-mobile]="mobileQuery.matches">
      <mat-toolbar color="primary" class="app-toolbar">
        <!--  -->

        <a routerLink="/">
          <img src="./assets/logo.svg" alt="Quero Ser Dev" />
        </a>
        <a class="app-name" routerLink="/">
          <h1>Quero Ser Dev</h1>
        </a>

        <!--  -->

        <span class="spacer"></span>

        <!--  -->

        <a
          mat-button
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
          >Home</a
        >
      </mat-toolbar>

      <mat-sidenav-container
        class="app-sidenav-container"
        [style.marginTop.px]="mobileQuery.matches ? 56 : 0"
      >
        <mat-sidenav-content>
          <router-outlet />
          <dev-loader *ngIf="loader.active$ | async" />
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  loader = inject(Loader)

  media = inject(MediaMatcher)
  changeDetectorRef = inject(ChangeDetectorRef)

  mobileQuery

  constructor() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)')
    const _mobileQueryListener = () => this.changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(_mobileQueryListener)
  }
}
