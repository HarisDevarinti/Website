import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-baac',
  templateUrl: './baac.component.html',
  styleUrls: ['./baac.component.css']
})
export class BaacComponent {

  addForm: FormGroup;
  constructor(private Serv: WebService, private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({

      name: ['', [Validators.required]],
      phn_num: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
      course: ['Business Analysis', [Validators.required]],
    });
    localStorage.setItem('ind', '0')
    localStorage.removeItem('data')
  }

  numericOnly(event:any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
}
  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
   
  }

  Submit() {
    if (this.addForm.invalid) {
      this.Serv.errorMessageAlert('Please Fill all Fields..!')
      return;
    } else {

      this.Serv.addcoursedata(this.addForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          this.Serv.statusChangeAlert("Successfully Submitted..!")
          this.addForm.reset();
        }
        else{
          this.Serv.errorMessageAlert('Somthing Went wornge..!')
        }

      }, (error: any) => {
        console.log(error);
      })
    }
  }


}
