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

@Component({
  selector: 'ie11-i18n-routable1',
  templateUrl: './routable1.component.html',
  styleUrls: ['./routable1.component.css']
})
export class Routable1Component implements OnInit {
  val1: Enum1;
  val2: Enum2;
  val3: Enum3;
  val4: Enum4;
  val5: Enum5;
  val6: Enum6;
  val7: Enum7;
  val8: Enum8;
  val9: Enum9;

  ngOnInit(): void {
    this.val1 = Enum1.A;
    this.val2 = Enum2.E;
    this.val3 = Enum3.I;
    this.val4 = Enum4.J;
    this.val5 = Enum5.N;
    this.val6 = Enum6.R;
    this.val7 = Enum7.S;
    this.val8 = Enum8.W;
    this.val9 = Enum9.Z;
  }
}
