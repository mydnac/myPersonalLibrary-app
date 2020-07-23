import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mpl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  users: any;
  currentUser = { login: '', password: '' };

  constructor(private router: Router, private matSnack: MatSnackBar) { }

  ngOnInit(): void {

  }


  onSubmit() {
    for (const user of this.users) {
      for (const element of user) {
        if (element.login === this.currentUser.login && element.password === this.currentUser.password) {
          this.router.navigateByUrl('/list-books');
        } else if (element.login !== this.currentUser.login && element.password === this.currentUser.password) {
          this.matSnack.open('⚠ Vous devez saisir un identifiant valide', null, {
            duration: 5000,
          });
        } else if (element.login === this.currentUser.login && element.password !== this.currentUser.password) {
          this.matSnack.open('⚠ Mot de passe erroné', null, {
            duration: 5000,
          });
        }
      }
    }
  }
}
