import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnChanges,
  OnInit,
  ViewContainerRef,
  ComponentFactory,
  Inject,
  Input
} from '@angular/core';

import { ContentComponentBase } from '../content.component.base';
import { ContentType } from '@ie11-i18n/module2';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

@Component({
  selector: 'ie11-i18n-factory1',
  templateUrl: './factory1.component.html',
  styleUrls: ['./factory1.component.css']
})
export class Factory1Component implements OnInit, OnChanges {
  @Input() contentType: ContentType;
  protected componentRef: ComponentRef<ContentComponentBase>;

  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnChanges(): void {
    this.loadComponent();
  }

  private loadComponent(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    let componentFactory: ComponentFactory<ContentComponentBase>;

    switch (this.contentType) {
      case ContentType.CONTENT_1:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content1Component
        );
        break;
      case ContentType.CONTENT_2:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content2Component
        );
        break;
      default:
        break;
    }

    if (!componentFactory) {
      return;
    }

    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
  }
}
