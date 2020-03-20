import { Component, OnInit } from '@angular/core';
import {
  Enum1,
  Enum2,
  Enum3,
  Enum4,
  Enum5,
  Enum6,
  Enum7,
  Enum8,
  Enum9
} from '../constants';
import { MatDialog } from '@angular/material/dialog';
import { Modal1Component } from '../modal1/modal1.component';

@Component({
  selector: 'ie11-i18n-routable1',
  templateUrl: './routable1.component.html',
  styleUrls: ['./routable1.component.css']
})
export class Routable1Component implements OnInit {
  val1: Enum1;
  val3: Enum3;
  val5: Enum5;
  val7: Enum7;
  val9: Enum9;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.val1 = Enum1.A;
    this.val3 = Enum3.I;
    this.val5 = Enum5.N;
    this.val7 = Enum7.S;
    this.val9 = Enum9.Z;
  }

  openModal1(): void {
    this.matDialog.open(Modal1Component);
  }
}
