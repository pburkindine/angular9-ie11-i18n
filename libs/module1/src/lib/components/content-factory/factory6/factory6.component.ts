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
import { ContentType } from '../../../constants/content-type';
import { Content11Component } from './content11/content11.component';
import { Content12Component } from './content12/content12.component';

@Component({
  selector: 'ie11-i18n-factory6',
  template: ''
})
export class Factory6Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_11:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content11Component
        );
        break;
      case ContentType.CONTENT_12:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content12Component
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
