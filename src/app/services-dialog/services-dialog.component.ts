/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Bob's Computer Repair Shop
;===========================================
*/

import { Component, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-services-dialog',
  templateUrl: './services-dialog.component.html',
  styleUrls: ['./services-dialog.component.css']
})
export class ServicesDialogComponent implements OnInit {



  constructor(private dialogRef:MatDialogRef<ServicesDialogComponent>,@Inject(MAT_DIALOG_DATA)data) {

   }

  ngOnInit(): void {
  }

}
