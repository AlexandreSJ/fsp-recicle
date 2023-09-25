import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  onRegister() {
    Swal.fire({
      heightAuto: false,
      icon: 'success',
      title: 'Registo finalizado como '+this.register,
      showConfirmButton: false,
      timer: 1800,
      allowOutsideClick: false
    })
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
      Swal.fire({
        heightAuto: false,
        icon: 'error',
        title: 'Login inválido',
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
      })
      return;
    }else{
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        title: 'Login inválido',
        showConfirmButton: false,
        timer: 1800,
        allowOutsideClick: false
      })
    }

    this.router.navigate(['/home'], {
      queryParams: {
        email: this.email,
        password: this.password,
      },
    });
  }
}
