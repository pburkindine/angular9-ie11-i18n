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
import { Content3Component } from './content3/content3.component';
import { Content4Component } from './content4/content4.component';

@Component({
  selector: 'ie11-i18n-module2-factory2',
  template: ''
})
export class Factory2Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_3:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content3Component
        );
        break;
      case ContentType.CONTENT_4:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content4Component
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
