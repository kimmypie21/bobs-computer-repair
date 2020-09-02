  /*
============================================
; Title: Bob's Computer Repair Shop
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Bob's Computer Repair Shop
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ServicesDialogComponent } from '../services-dialog/services-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent  {

  orderForm: FormGroup;
  orderData: Array<any>=[
    {serviceName: "Password Reset", serviceCost: "$39.99"},
    {serviceName: "Spyware Removal" , serviceCost:"$99.99" },
    {serviceName: "RAM Upgrade" , serviceCost:"$129.99" },
    {serviceName: "Software Installation" , serviceCost: "$49.99"},
    {serviceName: "Tune-up" , serviceCost: "$89.99"},
    {serviceName: "Keyboard Cleaning" , serviceCost: "$45.00"},
    {serviceName: "Disk Clean-up" , serviceCost: "$149.99 "}
  ];


  constructor( private fb: FormBuilder, public dialog: MatDialog) {
    this.orderForm = this.fb.group({
      orderArray: this.fb.array([])
    })
  }
  openDialog(){
    this.dialog.open(ServicesDialogComponent),
    console.log(this.orderForm.value);
  }

  onCheckboxChange(e){
    const orderArray: FormArray = this.orderForm.get('orderArray')as FormArray;
      if (e.target.checked){
        orderArray.push(new FormControl(e.target.value));
      }else{
        let i: number = 0;
        orderArray.controls.forEach((item: FormControl)=>{
          if (item.value == e.target.value){
            orderArray.removeAt(i);
            return;
          }
          i++;
        });
      }
  }


  ngOnInit(): void {

  }

  }





