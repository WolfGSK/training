import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { HeaderComponent } from './header/header.component';
import { ChildTwoOneComponent } from './child-two/child-two-one/child-two-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    HeaderComponent,
    ChildTwoOneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
