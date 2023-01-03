import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayslipComponent } from './payslip/payslip.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '**', component: PayslipComponent },
]

@NgModule({
  declarations: [
    PayslipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PayrollModule { }
