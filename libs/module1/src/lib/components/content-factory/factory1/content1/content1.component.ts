import { Component, OnInit } from '@angular/core';
import { SwitchEnum } from '../../../../constants';
import { ContentComponentBase } from '../../../content.component.base';

@Component({
  selector: 'ie11-i18n-content1',
  templateUrl: './content1.component.html'
})
export class Content1Component extends ContentComponentBase implements OnInit {}
