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

import { ContentType } from '../../../constants';
import { ContentComponentBase } from '../../../shared';
import { Content9Component } from './content9/content9.component';
import { Content10Component } from './content10/content10.component';

@Component({
  selector: 'ie11-i18n-module2-factory5',
  template: ''
})
export class Factory5Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_9:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content9Component
        );
        break;
      case ContentType.CONTENT_10:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content10Component
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
