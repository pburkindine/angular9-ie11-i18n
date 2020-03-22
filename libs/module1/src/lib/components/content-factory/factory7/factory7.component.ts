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
import { Content13Component } from './content13/content13.component';
import { Content14Component } from './content14/content14.component';

@Component({
  selector: 'ie11-i18n-factory7',
  template: ''
})
export class Factory7Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_13:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content13Component
        );
        break;
      case ContentType.CONTENT_14:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content14Component
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
