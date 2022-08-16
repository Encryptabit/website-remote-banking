import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from 'src/app/components/deposit/deposit.component';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
import { TransferComponent } from 'src/app/components/transfer/transfer.component';


const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },{
    path: 'deposit',
    component: DepositComponent,
  },{
    path: 'transfer',
    component: TransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class BankingRoutingModule {}