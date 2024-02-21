import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { HistoryItem } from './history.item';

@Injectable({
  providedIn: 'root',
})
export class ShyftApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _key = 'BJyq3roxaYEsPTs2';
  private readonly _header = { 'x-api-key': this._key };
  private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

  getEndPoint() {
    const url = new URL('https://rpc.shyft.to');
    url.searchParams.set('api_key', this._key);
    return url.toString();
  }

  getAccount(publicKey: string | undefined | null) {
    if (!publicKey) {
      return of(null);
    }

    const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance');

    url.searchParams.set('network', 'mainnet-beta');
    url.searchParams.set('wallet', publicKey);
    url.searchParams.set('token', this._mint);

    return this._httpClient
      .get<{
        result: { balance: number; info: { image: string } };
      }>(url.toString(), {
        headers: this._header,
      })
      .pipe(map((response) => response.result));
  }
  getHistory(publicKey: string | undefined | null) {
    if (!publicKey) {
      return of([]);
    }

    const url = new URL(
      'https://api.shyft.to/sol/v1/wallet/transaction_history',
    );

    url.searchParams.set('network', 'mainnet-beta');
    url.searchParams.set('wallet', publicKey);
    url.searchParams.set('token', this._mint);
    url.searchParams.set('tx_num', '4');

    return this._httpClient
      .get<{
        result: HistoryItem[];
      }>(url.toString(), {
        headers: this._header,
      })
      .pipe(map((response) => response.result));
  }
}
