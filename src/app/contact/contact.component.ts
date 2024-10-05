import { Component } from '@angular/core';
import { WebService } from '../service/web.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private Serv: WebService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({

      name: ['', [Validators.required]],
      phn_num: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
      subject:['',Validators.required]
    });
    localStorage.setItem('ind', '0')
    localStorage.removeItem('data')
  }

  ngOnInit(): void {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }
  ContactSubmit() {
    if (this.contactForm.invalid) {
      console.log('returnrd');
      this.Serv.errorMessageAlert("Please Fill All Details..!")
      return;
    } else {

      this.Serv.contactpostdata(this.contactForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          this.Serv.statusChangeAlert("sucessfully submitted..!")
          this.contactForm.reset();
        }

      }, (error: any) => {
        console.log(error);
      })
    }
  }
}
