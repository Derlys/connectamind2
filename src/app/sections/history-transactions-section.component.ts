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
  MatTextColumn,
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
    MatTextColumn,
  ],
  selector: 'connectamind-history-transactions-section',
  template: `
    @if (historyTransactions()?.length) {
      <h1 class="text-center text-3xl">History transactions</h1>
      <div class="p-6">
        <div
          class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-orange-600 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Timestamp
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Fees
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Signature
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              @for (item of historyTransactions(); track item.timestamp) {
                <tr>
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                  >
                    {{ item.timestamp }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                    {{ item.fee }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                    {{ item.signatures[0] }}
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }
  `,
})
export class HistoryTransactionsSectionComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly historyTransactions = computedAsync(
    () => this._shyftApiService.getHistory(this._publicKey()?.toBase58()),
    { requireSync: false },
  );
}
