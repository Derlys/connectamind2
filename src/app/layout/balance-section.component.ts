import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ShyftApiService } from '../shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';

@Component({
  standalone: true,
  imports: [
    DecimalPipe
  ],
  selector: 'connectamind-balance-section',
  template: `<section class="px-16 py-24 bg-orange-500 bg-opacity-5">
    
    @if (account()) {
      <div class="px-16 pt-24 pb-08">
        <header class="px-16 pt-24 pb-08 flex justify-center flex-grow mb-4">
        <h1 class="text-center text-3xl" >

          Total balance</h1>
          <div>
        <img [src]="account()?.info?.image" class="w-8 h-8" alt="Account Info" />
        <p class="text-2xl font-bold">{{ account()?.balance | number }}</p>
          </div>
        </header>
      </div>}
    
  
  </section>`

})

export class BalanceSectionComponent{

  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
}
