import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../../../../global/services/payment.service";
import {BookingService, CustomerService, TourService} from "../../../../global/services";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  bookings: any;
  profile!: any;
  tour!: any;
  account!: any;
  bookingDetail!: any;
  booking!: any;
  bookingId: any
  constructor(
    private bookingService: BookingService,
    private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.bookingId = this.activatedRoute.snapshot.params['bookingId']
    console.log(this.bookingId)
  }

  ngOnInit(): void {
    this.getBookingById(this.bookingId)
  }

  thanhToan() {
    this.paymentService.paymentMoMo('1000').subscribe(res=>{
      console.log(res)
    })
  }

  getBookingById(bookingId: any) {
    this.bookingService.getBookingByBookingId(bookingId).subscribe((res: any) => {
      this.profile = {...res.customer[0]};
      this.tour = {...res.tour[0]};
      this.account = {...res.account[0]};
      this.bookingDetail = {...res.bookingDetail[0]};
      this.booking = {...res.booking};
      console.log('profile', this.profile);
      console.log('tour', this.tour);
      console.log('account', this.account);
      console.log('bookingDetail', this.account);
      console.log('booking', this.booking);
    })
  }
}
