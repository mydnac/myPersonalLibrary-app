import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'mpl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  users: any;
  currentUser = { login: '', password: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  onSubmit() {
    for (const user of this.users) {
      for (const element of user) {
        if (element.login === this.currentUser.login && element.password === this.currentUser.password) {
          this.router.navigateByUrl('/list-books');
        }
      }
    }
  }
}
