import {Component, OnInit} from '@angular/core';
import {DisputeInitiationService} from './dispute-initiation.service';
import {ClientModel, AssociateModel, TransactionInformationModel} from './dispute.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private clientModel: ClientModel[] = [];
  private associateModel: AssociateModel[] = [];
  dropDownDisputeReason = [
    {value: 'return', viewValue: 'Returns'},
    {value: 'thirdParty', viewValue: 'Third Party Products, Including Account Assure'},
    {value: 'payByPhone', viewValue: 'Pay By Phone or Electronic Payments'},
    {value: 'mail', viewValue: 'Mail/Third Party/In Store Payments'},
    {value: 'benefitsRewards', viewValue: 'Benefits/Rewards Points'},
    {value: 'BalanceTransfer', viewValue: 'Balance Transfer Stop Payment'},
    {value: 'purchase', viewValue: 'Purchase(s), Not Third Party Products'},
    {value: 'cardholder', viewValue: 'Cardholder does not recognize the purchase'},
  ];

  private transactionInformationModel: TransactionInformationModel[] = [];
  //numberOnlyMask: Array<RegExp> = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/];

  date: Date = new Date();

  constructor(private diService: DisputeInitiationService) {}

  ngOnInit(): void {
    this.clientModel = this.diService.getClientInformation();
    this.associateModel = this.diService.getAssociateInformation();
    this.transactionInformationModel = this.diService.getTransactionInformation()
  }
}


