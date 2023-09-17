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
        <button mat-icon-button (click)="snav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
        <a routerLink="/">
          <img src="./assets/logo.svg" alt="Quero Ser Dev" />
        </a>
        <h1 class="app-app-name">Quero Ser Dev</h1>
        <span class="spacer"></span>

        <a routerLink="/" mat-button>Home</a>
        <a routerLink="/content" mat-button>Conteúdo</a>
        <a routerLink="/account" mat-button>Conta</a>
        <a routerLink="/learning" mat-button>Learning</a>

        <button mat-icon-button [matMenuTriggerFor]="beforeMenu">
          <mat-icon>account_circle</mat-icon>
        </button>
        <mat-menu #beforeMenu="matMenu" xPosition="before">
          <button mat-menu-item disabled>
            <small>logado como</small>
            <br />
            email@guiseek.dev
          </button>
          <mat-divider></mat-divider>
          <a mat-menu-item routerLink="/account">
            <mat-icon svgIcon="smb-share"></mat-icon>
            <span>Meu conteúdo</span>
          </a>
          <a mat-menu-item routerLink="/account">
            <mat-icon>settings</mat-icon>
            <span>Configurações</span>
          </a>
          <mat-divider></mat-divider>
          <button mat-menu-item>
            <mat-icon>logout</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </mat-toolbar>

      <mat-sidenav-container
        class="app-sidenav-container"
        [style.marginTop.px]="mobileQuery.matches ? 56 : 0"
      >
        <mat-sidenav
          #snav
          [mode]="mobileQuery.matches ? 'over' : 'side'"
          [fixedInViewport]="mobileQuery.matches"
          fixedTopGap="56"
        >
        </mat-sidenav>

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

  mobileQuery
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    const _mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addEventListener('change', _mobileQueryListener)
  }
}
