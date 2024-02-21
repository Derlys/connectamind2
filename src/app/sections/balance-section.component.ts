import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ShyftApiService } from '../shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';
import { TransferModalComponent } from './transfer-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatAnchor } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [DecimalPipe, TransferModalComponent, MatAnchor],
  selector: 'connectamind-balance-section',
  template: `
    <div class="p-6">
      <h1 class="text-center text-3xl">Balances</h1>
      <div
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-orange-600 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        @if (account()) {
          <div class="flex-shrink-0 border border-r-amber-400">
            <img
              [src]="account()?.info?.image"
              class="w-8 h-8"
              alt="Account Info"
            />
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-900">
              {{ account()?.balance | number }}
            </p>
          </div>
          <div class="flex justify-center">
            <a mat-raised-button>
              <button (click)="onTransfer()">TRANSFER</button>
            </a>
          </div>
        } @else {
          <p>Connect your wallet for view the transactions</p>
        }
      </div>
    </div>
  `,
})
export class BalanceSectionComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  private readonly _matDialog = inject(MatDialog);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: false },
  );

  onTransfer() {
    console.log('hola mundo');
    this._matDialog.open(TransferModalComponent);
  }
}
