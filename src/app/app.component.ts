import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

Arrival=[
  "Karachi", "Lahore","Faisalabad","Rawalpindi","Gujranwala","Peshawar",
  	"Multan",
 "Hyderabad","Islamabad","Quetta","Bahawalpur","Sargodha","Sialkot",
  	"Sukkur"
]

Departure=[
  "Karachi", "Lahore","Faisalabad","Rawalpindi","Gujranwala","Peshawar",
  	"Multan",
 "Hyderabad","Islamabad","Quetta","Bahawalpur","Sargodha","Sialkot",
  	"Sukkur"
]



}
