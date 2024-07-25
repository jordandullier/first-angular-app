import { Component } from '@angular/core';
import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId?: string

  get selectedUser(){
    return this.users.find((user) => this.selectedUserId === user.id)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
