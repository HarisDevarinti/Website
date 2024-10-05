import { Component } from '@angular/core';
import { WebService } from '../service/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  blogdata: any =[];

  constructor(private Serv: WebService, private router: Router){
    this.getblogdata();
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

  getblogdata() {
    this.Serv.getblogdata().subscribe(res => {
      this.blogdata = res.data;
      console.log(this.blogdata);
      
    }, error => {
    })
  }
  blogsing(data: any) {
    localStorage.setItem('data', JSON.stringify(data))
    this.router.navigate(['/blog']);
  }

}
