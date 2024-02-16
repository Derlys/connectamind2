import { Component } from '@angular/core';
import { BalanceSectionComponent } from '../sections/balance-section.component';
import { HistoryTransactionsSectionComponent } from '../sections/history-transactions-section.component';

@Component({
  standalone: true,
  imports: [BalanceSectionComponent, HistoryTransactionsSectionComponent],
  selector: 'connectamind-balance-page',
  template: `
    <connectamind-balance-section />
    <connectamind-history-transactions-section />
  `,
})
export class BalancePageComponent {}
