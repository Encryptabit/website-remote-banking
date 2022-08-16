import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from 'src/app/components/deposit/deposit.component';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
import { TransferComponent } from 'src/app/components/transfer/transfer.component';
import { BankingRoutingModule } from './banking-routing.module';



@NgModule({
  declarations: [
    DepositComponent,
    OverviewComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    BankingRoutingModule
  ]
})
export class BankingModule { }
