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

import { ContentComponentBase } from '../../content.component.base';
import { ContentType } from '@ie11-i18n/module2';
import { Content15Component } from './content15/content15.component';
import { Content16Component } from './content16/content16.component';

@Component({
  selector: 'ie11-i18n-factory8',
  template: ''
})
export class Factory8Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_15:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content15Component
        );
        break;
      case ContentType.CONTENT_16:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content16Component
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
