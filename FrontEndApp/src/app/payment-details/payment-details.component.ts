import { Component,OnInit } from '@angular/core';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailsFormComponent, CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailService){}
  ngOnInit(): void {
    this.service.refreshList();
    this.service.getPaymentDetail()
    .subscribe({
      next: res => {this.service.list = res as PaymentDetail[]},
      error: err => {console.log(err);}
    })
  }
}
