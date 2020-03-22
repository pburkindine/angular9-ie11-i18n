import { Component, OnInit } from '@angular/core';
import { Modal2Component, SwitchEnum } from '@ie11-i18n/module2';
import { MatDialog } from '@angular/material/dialog';
import { Modal1Component } from '../modal1/modal1.component';

@Component({
  selector: 'ie11-i18n-routable1',
  templateUrl: './routable1.component.html'
})
export class Routable1Component implements OnInit {
  vals: SwitchEnum[] = [];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    const switches = Object.values(SwitchEnum);
    const lastIdx = switches.length - 1;
    for (let i = 0; i < 100; i = i + 1) {
      this.vals[i] = switches[Math.floor(Math.random() * lastIdx) + 1];
    }
  }

  openModal1(): void {
    this.matDialog.open(Modal1Component);
  }

  openModal2(): void {
    this.matDialog.open(Modal2Component);
  }
}
