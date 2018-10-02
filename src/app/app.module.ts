import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule, MatDatepickerModule, MatFormFieldModule, MatButtonToggleModule, MatListItem, MatListModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatTable, MatList, MatButtonToggle, MatMenuModule, MatSidenavModule,MatButton,MatTab } from '@angular/material';
import { FormControl } from '@angular/forms';


import { MatToolbarModule} from '@angular/material/toolbar';
import { RouteComponent } from './route/route.component';
//import { Mat} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent
  ],
  imports: [
     BrowserModule, MatButtonModule, MatMenuModule, MatSidenavModule,MatDatepickerModule,MatFormFieldModule,
     MatInputModule, MatNativeDateModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatTabsModule,
     MatButtonToggleModule,
     MatTableModule ,
    MatListModule
  ,//   MaterialModule
    FormsModule, 
  //   ReactiveFormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  myData: Array<any>;
  constructor() {}
}
