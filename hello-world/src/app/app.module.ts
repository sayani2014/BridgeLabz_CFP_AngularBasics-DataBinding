/**
 * app.module.ts - it is a typescript file.
 *                 Essentially provides strong type checking.
 */

//Importing core modules of Angular.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/**
 * Whenever CLI is used to generate new components and services, it
 * will automatically update this file to import and add them here.
 */
import { AppComponent } from './app.component';

/**
 * @NgModule is a decorator. We provide additional etadata to specify the 
 * Components, Services, Imports, etc. Further, decorators are also used 
 * while processing, instantiation and at runtime.
 */
@NgModule({

  /**
   * Components are added here. Essentially the classes that has views,
   * they are Components, Directives and Pipes.
   */
  declarations: [
    AppComponent
  ],

  //Various imports needed for application can be added here.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //Services like http-services are added.
  providers: [],

  /**
   * The root component which is the main view of the application.
   * Only the root module has this property ad it indicates the 
   * component that is going to be bootstrapped.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
