import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  year?: {}
  
  ngOnInit(): void {
    this.year = new Date().getFullYear()
    // console.log(this.year)
  }
   
  

}