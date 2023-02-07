import { Component, OnInit } from '@angular/core';
import {BookingService, TourService} from "../../../../global/services";

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {
  bookings: any;
  profile!: any;
  tour!: any;
  account!: any;
  bookingDetail!: any;
  booking!: any;

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.getBookingsByCustomer(localStorage.getItem('accountId'))
  }

  getBookingsByCustomer(customerId: any) {
    this.bookingService.getBookingsByCustomer(customerId).subscribe((tours: any) => {
      this.bookings = [...tours];
    });
  }


  getBookingById(bookingId: any) {
    this.bookingService.getBookingByBookingId(bookingId).subscribe((res: any) => {
      this.profile = {...res.customer[0]};
      this.tour = {...res.tour[0]};
      this.account = {...res.account[0]};
      this.bookingDetail = {...res.bookingDetail[0]};
      this.booking = {...res.booking};
    })
  }
}
