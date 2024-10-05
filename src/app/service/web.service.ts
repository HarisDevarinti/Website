import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  Api  = 'http://localhost:2303/nodeapp/'
  constructor(private http: HttpClient) { }

  statusChangeAlert(message: any) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  errorMessageAlert(message: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: true,
      timer: 1500
    })
  }

  contactpostdata(data: any) {
    console.log(data, 'servicedata');

    return this.http.post(this.Api + 'contactpostdata', data)
  }
  addcoursedata(data: any) {
    console.log(data, 'servicedata');

    return this.http.post(this.Api + 'addcoursedata', data)
  }

  getblogdata() {
    return this.http.get<any>(this.Api + `getblogdata`)
  }
}
