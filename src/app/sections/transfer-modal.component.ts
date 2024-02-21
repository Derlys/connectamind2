import { Component } from '@angular/core';
import { TransferFormComponent } from '../pages/transfer-form.component';
import { TransferFormPayLoad } from '../models/transfer-form-payload';

@Component({
  standalone: true,
  imports: [TransferFormComponent],
  selector: 'connectamind-transfer-modal',
  template: `<div class="px-4 pb-8 pt-16 bg-orange-600">
    <h3 class="text-3xl text-center mb-8">TRANFER FOUNDS</h3>
    <connectamind-transfer-form
      (submitForm)="onTransfer($event)"
    ></connectamind-transfer-form>
  </div>`,
})
export class TransferModalComponent {
  onTransfer(payload: TransferFormPayLoad) {
    console.log('hello world', payload);
  }
}
