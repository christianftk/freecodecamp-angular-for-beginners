import { Component } from '@angular/core';

@Component({
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  //template: "Nulla", // write your html here
  styleUrls: ['./app.component.css']
  //styles: ['h1 {color:red;}] // write your css here
})
export class AppComponent {
  hotelName = 'hotelinventory';
}
