import { Component } from '@angular/core';
import { User } from "src/app/model/user";
import { Store, select } from "@ngrx/store";
import { selectUser } from "../../../reducers/user/user.selector";
import { UpdateUser} from '../../../reducers/user/user.action';
import {UserState} from "../../../reducers/user/user.state";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  public user$ = this.store$.pipe(select(selectUser));

  public user: User;

  constructor(
    public store$: Store <UserState>
  ) {

  }

  updateUser() {
    this.user = new User();
    this.user.id = this.randomInt(100, 150);
    this.user.cardNumber = this.randomInt(150, 200);
    this.user.name = this.randomString(6);
    this.user.cardType = this.randomString(6);
    this.store$.dispatch(new UpdateUser(this.user));
    console.log(this.user)
  }

  private randomInt(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  private randomString(length: number | undefined) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length)
  }

}