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
import { Content7Component } from './content7/content7.component';
import { Content8Component } from './content8/content8.component';

@Component({
  selector: 'ie11-i18n-factory4',
  template: ''
})
export class Factory4Component implements OnInit, OnChanges {
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
      case ContentType.CONTENT_7:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content7Component
        );
        break;
      case ContentType.CONTENT_8:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          Content8Component
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
