import { Component, inject } from '@angular/core';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { ShyftApiService } from '../shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatTextColumn
} from '@angular/material/table';

@Component({
  standalone: true,
  imports: [
    DecimalPipe,
    JsonPipe,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatTextColumn
  ],
  selector: 'connectamind-history-transactions-section',
  template: `<section class="px-16 py-24 bg-orange-500 bg-opacity-5">
    <h1 class="text-center text-3xl" >

      History transactions</h1>

      <div class="px-16 pt-24 pb-08">
        <header class="px-16 pt-24 pb-08 flex justify-center flex-grow mb-4">
        <table>
          <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Timestamp
            </th>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Fees
            </th><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Signature
            </th>
          </tr>
          </thead>
          <tbody>
            @for (item of historyTransactions(); track item.timestamp){
              <tr>
                <td>
                  {{item.timestamp}}
                </td>
                <td>
                  {{item.fee}}
                </td>
                <td>
                  {{item.signatures[0]}}
                </td>
              </tr>    
            }
          </tbody>
        </table>
        </header>
      </div>
  </section>`



})

export class HistoryTransactionsSectionComponent {

  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly historyTransactions = computedAsync(
    () => this._shyftApiService.getHistory(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
}
