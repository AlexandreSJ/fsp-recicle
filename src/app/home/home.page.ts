import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userType!: string;
  username!: string;

  constructor() {}

  ngOnInit() {
    this.userType = '2';
    this.username = 'Miguel';
  }
}
