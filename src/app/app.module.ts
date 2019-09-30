import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheckPermissionDirective } from './check-permission/check-permission.directive';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckPermissionDirective,
    HelloWorldComponent,
    PermissionDeniedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PermissionDeniedComponent]
})
export class AppModule { }
