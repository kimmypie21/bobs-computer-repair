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
import { FormBuilder, FormGroup, FormArray, FormControl, CheckboxControlValueAccessor} from '@angular/forms';


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


  onCheckboxChange(event){
    const orderArray: FormArray = this.orderForm.get('orderArray')as FormArray;
      if (event.target.checked){
        orderArray.push(new FormControl(event.target.value));
      }else{
        let i: number = 0;
        orderArray.controls.forEach((item: FormControl)=>{
          if (item.value == event.target.value){
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


  ///I TRIED :|
/*
export class ServicesComponent  {

  selectedServices;
  orderForm: FormGroup;
  orderData=[
    {serviceName: "Password Reset", serviceCost: "$39.99"},
    {serviceName: "Spyware Removal" , serviceCost:"$99.99" },
    {serviceName: "RAM Upgrade" , serviceCost:"$129.99" },
    {serviceName: "Software Installation" , serviceCost: "$49.99"},
    {serviceName: "Tune-up" , serviceCost: "$89.99"},
    {serviceName: "Keyboard Cleaning" , serviceCost: "$45.00"},
    {serviceName: "Disk Clean-up" , serviceCost: "$149.99 "}
  ];



  constructor( private fb: FormBuilder, public dialog: MatDialog) {

  }

  get orderFormArray(): FormArray{
    return this.orderForm.controls.orderData as FormArray;
  }

  private addCheckboxes(): void{
    this.orderData.forEach(()=>this.orderFormArray.push(new FormControl(false)));
  }

  orderSubmit(){
      this.selectedServices = this.orderForm.value.orderData;
      this.selectedServices.map((checked,index)=> checked ? this.orderData[index]:null);
      //this.selectedServices.filter(v => !=== null);
  }


  openDialog(){
    this.dialog.open(ServicesDialogComponent),
    console.log(this.orderForm.value);
  }


  ngOnInit(): void {
    this.orderForm = this.fb.group({
      orderData: new FormArray([]),
      parts: [],
      labor: []
    }),
      this.addCheckboxes();
    }

  }

*/







