import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-details-form',
  imports: [FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css'
})
export class PaymentDetailsFormComponent {

   constructor(public service : PaymentDetailService){}
}
