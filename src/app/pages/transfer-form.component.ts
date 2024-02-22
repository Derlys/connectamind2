import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { TransferForm } from '../models/transfer-form';
import { TransferFormPayLoad } from '../models/transfer-form-payload';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatSuffix,
    MatError,
    MatHint,
    MatButton,
  ],
  selector: 'connectamind-transfer-form',
  template: `<form
    class="w-[400px] "
    #form="ngForm"
    (ngSubmit)="onSubmitForm(form)"
  >
    <mat-form-field appearance="fill" class="w-full mb-4">
      <mat-label> Receiver address</mat-label>
      <input
        name="receiverAddress"
        matInput
        placeholder="publicKey of "
        type="text"
        [(ngModel)]="model.receiverAddress"
        #receiverAddressControl="ngModel"
        required
      />
      <mat-icon matSuffix>key</mat-icon>
      @if (form.submitted && receiverAddressControl.errors) {
        <mat-error>
          @if (receiverAddressControl.errors['required']) {
            The wallet address is required
          }
        </mat-error>
      } @else {
        <mat-hint>should be a wallet of Solana</mat-hint>
      }
    </mat-form-field>
    <mat-form-field class="w-full mb-4">
      <mat-label> Amount</mat-label>
      <input
        name="amount"
        matInput
        placeholder="write the amount here"
        type="number"
        min="0"
        [(ngModel)]="model.amount"
        #amountControl="ngModel"
        required
      />
      <mat-icon matSuffix>attach_money</mat-icon>
      @if (form.submitted && amountControl.errors) {
        <mat-error>
          @if (amountControl.errors['required']) {
            The amount is required
          } @else if (amountControl.errors['min']) {
            The amount must be greater than 0
          }
        </mat-error>
      } @else {
        <mat-hint>The amount must be greater than 0</mat-hint>
      }
    </mat-form-field>
    <footer class="flex justify-center gap-4">
      <button type="submit" mat-raised-button color="primary">Submit</button>
    </footer>
  </form>`,
})
export class TransferFormComponent {
  readonly model: TransferForm = {
    amount: null,
    receiverAddress: null,
  };
  @Output() readonly submitForm = new EventEmitter<TransferFormPayLoad>();
  onSubmitForm(form: NgForm) {
    if (
      form.invalid ||
      this.model.amount === null ||
      this.model.receiverAddress === null
    ) {
      console.log(' the form is invalid');
    } else {
      this.submitForm.emit({
        receiverAddress: this.model.receiverAddress,
        amount: this.model.amount,
      });
    }
  }
}
