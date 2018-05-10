import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Mindy'];

  private counterservice: CounterService;

  constructor(counterservice1: CounterService) {
    this.counterservice = counterservice1;
  }

//constructor(private counterservice: CounterService) {}

  onSettoInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterservice.IncrementInactiveToActive();
  }

  onSettoActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterservice.IncrementActiveToInactive();
  }

}
