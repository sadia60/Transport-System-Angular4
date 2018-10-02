import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@NgModule({
  imports: [ MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [ MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }