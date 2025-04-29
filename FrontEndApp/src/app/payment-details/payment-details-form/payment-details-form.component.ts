import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  imports: [FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css'
})
export class PaymentDetailsFormComponent {

   constructor(public service : PaymentDetailService, private toastr:ToastrService){}
  
   onSubmit(form:NgForm){
    this.service.formSubmitted = true
    if(form.valid)
    {
      if(this.service.formData.paymentDetailId==0)
      {
        this.insertRecord(form)
      }
      else
      this.updateRecord(form)
      
    }    
}

insertRecord(form:NgForm){
    this.service.postPaymentDetail()
      .subscribe({
          next : res => {this.service.refreshList()
          this.service.resetForm(form)
          this.toastr.success('Inserted Successfully','Payment Detail Register')
        },
          error : err => {console.log(err);}
    })
}
updateRecord(form:NgForm){
  this.service.putPaymentDetail()
      .subscribe({
          next : res => {this.service.refreshList()
          this.service.resetForm(form)
          this.toastr.info('Updated Successfully','Payment Detail Register')
        },
          error : err => {console.log(err);}
    })
}
}



