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

        <!--  -->

        <button
          mat-button
          menuItemsLinkActive="active"
          menuItemsBaseLink="/content"
          [matMenuTriggerFor]="contentMenu"
        >
          Conteúdo
        </button>
        <mat-menu #contentMenu="matMenu" xPosition="before">
          <a mat-menu-item routerLink="/content">
            <mat-icon>sticky_note_2</mat-icon>
            <span>Anotações</span>
          </a>
          <a mat-menu-item routerLink="/content/books">
            <mat-icon>menu_book</mat-icon>
            <span>Livros</span>
          </a>
          <button mat-menu-item disabled>
            <mat-icon>article</mat-icon>
            <span>Artigos</span>
          </button>
        </mat-menu>

        <!--  -->

        <a routerLink="/learning" routerLinkActive="active" mat-button>
          Aprendizado
        </a>

        <!--  -->

        <button
          mat-icon-button
          menuItemsLinkActive="active"
          menuItemsBaseLink="/account"
          [matMenuTriggerFor]="beforeMenu"
        >
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
            <mat-icon>source</mat-icon>
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
