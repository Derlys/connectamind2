import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormSectionModalComponent } from '../sections/form-section-modal.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'connectamind-container-page',
  template: `<button (click)="onOpenModal()">Open modal</button>`,
})
export class ContainerPageComponent {
  private readonly _matDialog = inject(MatDialog);

  onOpenModal() {
    this._matDialog.open(FormSectionModalComponent);
  }
}
