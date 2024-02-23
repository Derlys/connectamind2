import { Component } from '@angular/core';
import { TransferFormComponent } from '../pages/transfer-form.component';
import { TransferFormPayLoad } from '../models/transfer-form-payload';
import { createTransferInstructions } from '@heavy-duty/spl-utils';
import { injectTransactionSender } from '@heavy-duty/wallet-adapter';

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
  private readonly _TransactionSender = injectTransactionSender();
  onTransfer(payload: TransferFormPayLoad) {
    console.log('hello world', payload);

    this._TransactionSender
      .send(({ publicKey }) =>
        createTransferInstructions({
          amount: payload.amount * 10 ** 9,
          mintAddress: '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs',
          receiverAddress: payload.receiverAddress,
          senderAddress: publicKey.toBase58(),
          fundReceiver: true,
        }),
      )
      .subscribe({
        next: (signature) => console.log(`Signature: ${signature}`),
        error: (error) => console.error(error),
        complete: () => console.log('Transaction ready'),
      });
  }
}
