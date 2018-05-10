import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  IncrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  IncrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active: ' + this.inactiveToActiveCounter);
  }

}
