import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userType!: string;
  userName!: string;
  email!: string | null;
  password!: string | null;

  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    this.email = this.activatedRouter.snapshot.queryParamMap.get('email');
    this.password = this.activatedRouter.snapshot.queryParamMap.get('password');

    this.userType = '1';
    this.userName = 'Miguel';
  }
}
