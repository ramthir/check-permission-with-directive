import {
  AfterContentChecked, ComponentFactoryResolver, Directive, TemplateRef, ViewContainerRef
} from '@angular/core';
import { PermissionDeniedComponent } from '../permission-denied/permission-denied.component';


@Directive({
  selector: '[appCheckPermission]'
})
export class CheckPermissionDirective implements AfterContentChecked {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterContentChecked() {
    this.updateView();
  }

  private hasPermission() {
    return false;
  }

  private updateView() {
    this.viewContainer.clear();
    if (this.hasPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      const permissionDeniedComponentFactory = this.resolver.resolveComponentFactory(PermissionDeniedComponent);
      this.viewContainer.createComponent(permissionDeniedComponentFactory);
    }
  }
}
