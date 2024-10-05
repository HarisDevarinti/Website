import { Component } from '@angular/core';
import { WebService } from '../service/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogdata: any = [];
  firstdata: any;
  data: any = localStorage.getItem('data')
  constructor(private Serv: WebService, private router: Router) {
    this.getblogdata();

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
      this.firstdata = []
      if (this.data == undefined) {
        this.firstdata = this.blogdata[0]
        console.log(this.blogdata);
      }
      else {
        this.firstdata = JSON.parse(this.data)
      }
      console.log(localStorage.getItem('ind'));

      if (localStorage.getItem('ind') == undefined || localStorage.getItem('ind') == null || localStorage.getItem('ind') == '0') {
        location.reload()
        localStorage.setItem('ind', '1')

      }
    }, error => {
    })
  }
  blogsing(data: any) {
    this.firstdata = data
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
