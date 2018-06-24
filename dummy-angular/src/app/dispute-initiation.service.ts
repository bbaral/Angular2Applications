import { Injectable } from '@angular/core';
import {AssociateModel, ClientModel, TransactionInformationModel} from './dispute.model';

@Injectable()
export class DisputeInitiationService {

  private clientDisputeData: ClientModel[] = [
    { account_number: 123456987458236589, division: 'Eddie Murphy', customer_name: 'Test', customer_address: '123 Jesus Ave, Lookupville Heaven 12345' }
  ];

  private associateDisputeDate: AssociateModel[] = [
    { location: 'North Pole', department: 'information technology', name: 'Test', racf_id: 'A124578', supervisor_name: 'John Waltson' },
  ];

  private transactionInformationData: TransactionInformationModel[] = [
    {transactionAmount: 0.00,
      DisputeAmount: 0.00,
      transactionDate: new Date(),
      TrasactionDescription: ''}
  ];


  getClientInformation() {
    return this.clientDisputeData.slice();
  }

  getAssociateInformation() {
    return this.associateDisputeDate.slice();
  }

  getTransactionInformation() {
    return this.transactionInformationData.slice();
  }

}
