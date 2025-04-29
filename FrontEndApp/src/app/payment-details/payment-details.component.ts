import { Component,OnInit } from '@angular/core';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailsFormComponent, CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.service.refreshList();
    
  }

  populateForm(selectedRecord:PaymentDetail)
  {
    this.service.formData = Object.assign({},selectedRecord)
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.service.deletePaymentDetail(id)
    .subscribe({
      next: res => {this.service.refreshList()
        this.toastr.error('Deleted Successfully','Payment Detail Register')
      },
      error : err => {console.log(err);
      }
    })

  }
}
