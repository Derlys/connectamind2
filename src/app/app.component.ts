import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { DecimalPipe } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { BalanceSectionComponent } from './sections/balance-section.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterOutlet,
    HdWalletMultiButtonComponent,
    MatAnchor,
    DecimalPipe,
    BalanceSectionComponent,
  ],
  selector: 'connectamind-root',
  template: `
    <header class="px-16 pt-24 pb-08">
      <h1 class="text-center text-5xl mb-4 text-orange-600">
        Bank Connect a Mind
      </h1>

      <div class="flex justify-center mb-4 ">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
      <nav>
        <ul class="flex justify-center gap-4 py-8">
          <li>
            <a [routerLink]="['']" mat-raised-button> Home </a>
          </li>
          <li>
            <a [routerLink]="['settings']" mat-raised-button> settings </a>
          </li>
          <li>
            <a [routerLink]="['balance']" mat-raised-button> balance </a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {}
