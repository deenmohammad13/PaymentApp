import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details-form',
  imports: [FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css'
})
export class PaymentDetailsFormComponent {

   constructor(public service : PaymentDetailService){}
  
   onSubmit(form:NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next : res => {this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
      },
      error : err => {console.log(err);}
    })
   }
}
