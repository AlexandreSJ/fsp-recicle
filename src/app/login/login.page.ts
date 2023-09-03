import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  register!: string;
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.register = 'reciclador';
  }

  onSubmit() {
    let validEmails = new Map<string, boolean>([
      ['email1@gmail.com', true],
      ['email2@gmail.com', true],
      ['email3@gmail.com', true],
      ['', false],
    ]);

    const isValid = validEmails.get(this.email);
    if (!isValid) {
      alert('email inválido');
      return;
    }

    this.router.navigate(['/home'], {
      queryParams: {
        email: this.email,
        password: this.password,
      },
    });
  }
}
