import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatButton],
  selector: 'connectamind-transfer-section',
  template: `<div class="px-4 pb-8 pt-16">
    <h2 class="text-3xl text-center mb-8">Send</h2>
    <button mat-raised-button (click)="onClose()" )></button>
  </div>`,
})
export class TransferSectionModalComponent {
  private readonly _matDialogRef = inject(MatDialogRef);

  onClose() {
    this._matDialogRef.close();
  }
}
