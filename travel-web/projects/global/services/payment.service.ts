import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../travel/src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {
  }

  paymentMoMo(req: any) {
    return this.http.post(`${environment.apiUrl}api/momo_payment`,req);
  }
}
