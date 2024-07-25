import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import User from "./user.model";
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input( { required: true } ) user!: User
  @Input({ required: true }) selected!: boolean
  @Output() selectUser = new EventEmitter()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
