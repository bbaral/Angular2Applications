/**
 * Client Information data varaibles
 */
export class ClientModel {
  account_number: number = 0;
  division: string = '';
  customer_name: string = '';
  customer_address: string = '';
}

/**
 * associate information data variables
 */
export class AssociateModel {
  location: string = '';
  department: string = '';
  name: string = '';
  racf_id: string = '';
  supervisor_name: string = '';
}

export class TransactionInformationModel {
  transactionAmount: number = 0.0;
  DisputeAmount: number = 0.0;
  transactionDate?: Date;
  TrasactionDescription: string = '';
}
