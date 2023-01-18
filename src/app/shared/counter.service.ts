import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable()
export class CounterService{

  activeCounts: number = 0;
  inactiveCounts: number = 0;

  addActiveAction(){
    this.activeCounts++;
    alert('inactive -> active ' + this.activeCounts + ' times until now');

  }

  addInactiveAction(){
    this.inactiveCounts++;
    alert('active -> inactive ' + this.inactiveCounts + ' times until now');
  }

}
