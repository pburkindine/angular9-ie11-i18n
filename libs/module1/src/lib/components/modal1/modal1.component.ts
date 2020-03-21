import { Component } from '@angular/core';
import { ContentType } from '../../constants/content-type';

@Component({
  selector: 'ie11-i18n-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component {
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
