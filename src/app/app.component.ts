import { Component, inject } from '@angular/core';
import { computedAsync } from 'ngxtension/computed-async';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatAnchor } from '@angular/material/button';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { RouterOutlet, RouterLink  } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet,HdWalletMultiButtonComponent, MatAnchor, DecimalPipe],
  selector: 'connectamind-root',
  template: `<header class="px-16 pt-24 pb-08">
      <h1 class="text-center text-5xl mb-4">My bank Connect a Mind</h1>
      @if (account()) {
        <div class=" absolute top-4 left-4 flex justify-center items-center gap-2">
          <img [src]="account()?.info?.image" class="w-8 h-8" alt="Account Info" />
          <p class="text-2xl font-bold">{{ account()?.balance | number }}</p>
        </div>
      }
      <div class="flex justify-center">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
    <nav>
      <ul class="flex justify-center gap-4">
        <li>
          <a [routerLink]= "['']" mat-raised-button>
            Home
          </a>
        </li>
        <li>
          <a [routerLink]= "['settings']" mat-raised-button>
            settings
          </a>
        </li>
      </ul>
    </nav>
    </header>
    <main><router-outlet></router-outlet></main>`,
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
}
