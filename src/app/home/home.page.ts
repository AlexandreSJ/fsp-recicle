import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userType!: string;

  constructor() {}

  ngOnInit() {
    this.userType = '1';
  }
}
