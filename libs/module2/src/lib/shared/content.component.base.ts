import { Directive, OnInit } from '@angular/core';

import { SwitchEnum } from '../constants';

@Directive()
export abstract class ContentComponentBase implements OnInit {
  vals: SwitchEnum[] = [];

  ngOnInit(): void {
    const switches = Object.values(SwitchEnum);
    const lastIdx = switches.length - 1;
    for (let i = 0; i < 100; i = i + 1) {
      this.vals[i] = switches[Math.floor(Math.random() * lastIdx) + 1];
    }
  }
}
