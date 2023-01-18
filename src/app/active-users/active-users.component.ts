import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  users : string[] = [];

  constructor(private usersService : UsersService, private counterService: CounterService){
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number){
    this.usersService.setToInactive(id);

  }

}
