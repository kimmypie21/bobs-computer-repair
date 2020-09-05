/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Bob's Computer Repair Shop
;===========================================
*/

import { iServices } from "./charges-interface";


export interface Invoice {
  servicesItems: Array<iServices>;
  partsCost: number;
  laborCost: number;
  orderDate: string;
}
