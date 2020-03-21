import { Component, OnInit } from '@angular/core';
import { SwitchEnum } from '../../constants';
import { ContentComponentBase } from '../content.component.base';

@Component({
  selector: 'ie11-i18n-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component extends ContentComponentBase implements OnInit {
  vals: SwitchEnum[] = [];

  ngOnInit(): void {
    const switches = Object.values(SwitchEnum);
    const lastIdx = switches.length - 1;
    for (let i = 0; i < 100; i = i + 1) {
      this.vals[i] = switches[Math.floor(Math.random() * lastIdx) + 1];
    }
  }
}
