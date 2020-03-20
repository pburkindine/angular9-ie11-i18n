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
  selector: 'ie11-i18n-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component implements OnInit {
  val2: Enum2;
  val4: Enum4;
  val6: Enum6;
  val8: Enum8;

  ngOnInit(): void {
    this.val2 = Enum2.E;
    this.val4 = Enum4.J;
    this.val6 = Enum6.R;
    this.val8 = Enum8.W;
  }
}
