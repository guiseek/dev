import {MediaMatcher} from '@angular/cdk/layout'
import {Loader} from '@dev/shared-data-access'
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core'
import {AuthFacade} from '@dev/account-data-access'
import {Router} from '@angular/router'

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

        <button
          mat-button
          menuItemsLinkActive="active"
          menuItemsBaseLink="/account"
          [matMenuTriggerFor]="beforeMenu"
        >
          Contas
        </button>
        <mat-menu #beforeMenu="matMenu" xPosition="before">
          <a
            mat-menu-item
            routerLink="/account"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <mat-icon>people_alt</mat-icon>
            <span>Usuários</span>
          </a>
          <a
            mat-menu-item
            routerLink="/account/groups"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <mat-icon>groups</mat-icon>
            <span>Grupos</span>
          </a>
        </mat-menu>

        <ng-container *ngIf="authFacade.authUser$ | async as auth">
          <button mat-icon-button [matMenuTriggerFor]="accountMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
          <mat-menu #accountMenu="matMenu" xPosition="before">
            <button mat-menu-item disabled>
              <small>logado como</small>
              <br />
              {{ auth.email }}
            </button>
            <mat-divider></mat-divider>
            <button mat-menu-item (click)="logout()">
              <mat-icon>logout</mat-icon>
              <span>Logout</span>
            </button>
          </mat-menu>
        </ng-container>
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

  authFacade = inject(AuthFacade)
  router = inject(Router)

  mobileQuery

  constructor() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)')
    const _mobileQueryListener = () => this.changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(_mobileQueryListener)
  }

  logout() {
    this.authFacade.logout()
    this.router.navigate(['/auth'])
  }
}
