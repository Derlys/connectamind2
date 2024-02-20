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
import { Form } from '../models/form';
import { FormPayLoad } from '../models/form-pay-load';
import { MatButton } from '@angular/material/button';

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
  selector: 'connectamind-form-page',
  template: `<form class="w-[400px]" #form="ngForm" (ngSubmit)="onSubmit(form)">
    <mat-form-field>
      <mat-label> Wallet address</mat-label>
      <input
        name="address"
        matInput
        placeholder="write the wallet address"
        type="address"
        [(ngModel)]="model.address"
        #addressControl
        required
      />
      <mat-icon matSuffix>address</mat-icon>
      @if (form.submitted && addressControl.errors) {
        <mat-error>
          @if (addressControl.errors['required']) {
            The waller address is required
          }
        </mat-error>
      } @else {
        <mat-hint>We send information to your email</mat-hint>
      }
    </mat-form-field>
    <footer class="flex justify-center gap-4">
      <button type="submit" mat-raised-button color="primary">Submit</button>
    </footer>
  </form>`,
})
export class FormPageSendTransactionComponent {
  readonly model: Form = {
    address: null,
  };
  @Output() readonly submitForm = new EventEmitter<FormPayLoad>();

  onSubmit(form: NgForm) {
    if (form.invalid || this.model.address === null) {
      console.error('The form is invalid');
    } else {
      this.submitForm.emit({ address: this.model.address });
    }
  }
}
