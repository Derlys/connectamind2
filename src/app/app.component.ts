import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { DecimalPipe } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { BalanceSectionComponent } from './sections/balance-section.component';
import { ConnectionStore } from '@heavy-duty/wallet-adapter';
import { ShyftApiService } from './shyft-api.service';
import { HeroSectionComponent } from './sections/hero-section.component';
import { HeroFeaturesComponent } from './sections/features-section.component';

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
    HeroSectionComponent,
    HeroFeaturesComponent,
  ],
  selector: 'connectamind-root',
  template: `
    <div class="flex flex-col h-full justify-between">
      <connectamind-hero-section />
      <div class="flex-grow  py-4 px-16 text-center  ">
        <div class="text-3xl">
          <router-outlet></router-outlet>
        </div>
      </div>
      <connectamind-features-section />
    </div>
  `,
})
export class AppComponent implements OnInit {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _connectionStore = inject(ConnectionStore);
  ngOnInit() {
    this._connectionStore.setEndpoint(this._shyftApiService.getEndPoint());
  }
}
