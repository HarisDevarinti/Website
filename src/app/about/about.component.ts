import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(){
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
  
}
