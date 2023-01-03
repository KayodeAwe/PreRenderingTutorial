import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'report',
      loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
    },
    {
      path: 'payrol',
      loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
