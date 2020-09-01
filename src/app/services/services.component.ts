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
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  form: FormGroup;
  orderData = [
    {name: "Password Reset", value: "$39.99"},
    {name: "Spyware Removal" , value:"$99.99" },
    {name: "RAM Upgrade" , value:"$129.99" },
    {name: "Software Installation" , value: "$49.99"},
    {name: "Tune-up" , value: "$89.99"},
    {name: "Keyboard Cleaning" , value: "$45.00"},
    {name: "Disk Clean-up" , value: "$149.99 "}
  ];

  get orderFormArray(){
    return this.form.controls.orders as FormArray;
  }

  constructor( private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      order: new FormArray ([])
    });
    this.addCheckboxes();
   }

   private addCheckboxes(){
     this.orderData.forEach(() => this.orderFormArray.push(new FormControl(false)));
   }
   submit(){
    const selectedOrderNames = this.form.value.order
    .map((checked, i)=> checked ? this.orderData[i].name: null)
    .filter(v => v !== null);
    console.log(selectedOrderNames);
   };

  ngOnInit(): void {
  }

  showOrderDetails(){
    const dialogRef = this.dialog.open(ServicesDialogComponent);
  }
}
