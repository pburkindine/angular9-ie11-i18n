import { Component } from '@angular/core';
import { ContentType } from '../../constants';

@Component({
  selector: 'ie11-i18n-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
})
export class Modal2Component {
  ContentType = ContentType;

  contentZone1 = ContentType.CONTENT_1;
  contentZone2 = ContentType.CONTENT_3;
  contentZone3 = ContentType.CONTENT_5;
  contentZone4 = ContentType.CONTENT_7;
  contentZone5 = ContentType.CONTENT_9;
  contentZone6 = ContentType.CONTENT_11;
  contentZone7 = ContentType.CONTENT_13;
  contentZone8 = ContentType.CONTENT_15;
}
