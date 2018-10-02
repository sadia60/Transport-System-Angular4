import { Component, OnInit } from '@angular/core';
import {Route} from './Route'

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  routes:Route[]= [ { id:1,
  name: 'Bus1',
  arrival: 'Karachi',
  departure: 'Rawalpindi',
  price: '2000'
 },
 { id:2,
  name: 'Bus2',
  arrival: 'Rawalpindi',
  departure: 'Lahore',
  price: '3000'
 },

 { id:3,
  name: 'Bus3',
  arrival: 'Rawalpindi',
  departure: 'Peshawar',
  price: '3000'
 }



]
 
  constructor() { }

  ngOnInit() {
    console.log("route init");
  }

}
