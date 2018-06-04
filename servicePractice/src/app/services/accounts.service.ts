import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

/**
 * Injectable works only if you are injecting other services to receiveing file.
 * let's make this more simpler.... :)
 * I have Injectable here because I am receiving LoggingService to this file.
 * If I am sending it to other services then I don't need add injectable here.
 * I commented out the injectable from the logging services because I am adding that file here
 * If you run this program, you won't get error, because logging services is not used in any other component
 */
@Injectable()
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);

  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
