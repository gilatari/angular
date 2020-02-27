import {Component, OnInit} from '@angular/core';
import {State} from '../state';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'test';
  private userName: string = '';
  private password: string = '';
  private submitted: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.submitted = true;
    if (this.userName === 'gil' && this.password === '1234') {
      State.userName.next(this.userName.toString());
      State.password.next(this.password.toString());
      this.router.navigateByUrl('/albums');
    }

  }
}
