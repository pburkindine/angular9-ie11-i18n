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

import { ContentComponentBase, ContentType } from '@ie11-i18n/module2';
import { Content5Component } from './content5/content5.component';
import { Content6Component } from './content6/content6.component';

@Component({
  selector: 'ie11-i18n-module1-factory3',
  template: ''
})
export class Factory3Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_5:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content5Component
        );
        break;
      case ContentType.CONTENT_6:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content6Component
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
