import { Component } from '@angular/core';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { MatAnchor } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    HdWalletMultiButtonComponent,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'connectamind-hero-section',
  template: `
    <div class="w-full  p-12">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <img
                class="h-8 w-auto"
                src="https://avatars.githubusercontent.com/u/56296236?v=4"
                alt="logo"
              />
            </a>
            <span class="text-center text-2xl mb-6 text-orange-500">
              Bank Connect a Mind
            </span>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              (click)="toggle()"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-orange-500"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div class="hidden lg:flex lg:gap-x-12">
            <a
              routerLinkActive="active"
              [routerLink]="['']"
              class="text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >Home</a
            >
            <a
              routerLinkActive="active"
              [routerLink]="['settings']"
              class="text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >Settings</a
            >
            <a
              routerLinkActive="active"
              [routerLink]="['balance']"
              class="text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >Balance</a
            >
            <hd-wallet-multi-button></hd-wallet-multi-button>
          </div>
        </nav>

        <!-- Mobile menu, show/hide based on menu open state. -->
        <div
          class="lg:hidden"
          [class.block]="open"
          [class.hidden]="!open"
          role="dialog"
          aria-modal="true"
        >
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-orange-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <a href="/" class="-m-1.5 p-1.5">
                <img
                  class="h-8 w-auto"
                  src="https://avatars.githubusercontent.com/u/56296236?v=4"
                  alt="icono"
                />
              </a>
              <button
                type="button"
                (click)="toggle()"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    routerLinkActive="active"
                    [routerLink]="['']"
                    (click)="toggle()"
                    >Home</a
                  >
                  <a
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    routerLinkActive="active"
                    [routerLink]="['settings']"
                    (click)="toggle()"
                    >Settings</a
                  >
                  <a
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    routerLinkActive="active"
                    routerLink="/contact"
                    (click)="toggle()"
                    >Balance</a
                  >
                </div>
                <hd-wallet-multi-button></hd-wallet-multi-button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  `,
})
export class HeroSectionComponent {
  open = false;
  toggle() {
    this.open = !this.open;
  }
}
