import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'connectamind-root',
  template: `<header class="px-16 pt-24 pb-08">
      <h1 class="text-center text-5xl mb-4">My bank Connect a Mind</h1>
      <div class="flex justify-center">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
    </header>
    <main></main>`,
})
export class AppComponent {}
