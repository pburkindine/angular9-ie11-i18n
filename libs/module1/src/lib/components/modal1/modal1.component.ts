import { Component } from '@angular/core';
import { ContentType } from '../../constants/content-type';

@Component({
  selector: 'ie11-i18n-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component {
  contentType: ContentType;

  openContent1(): void {
    this.contentType = ContentType.CONTENT_1;
  }

  openContent2(): void {
    this.contentType = ContentType.CONTENT_2;
  }
}
