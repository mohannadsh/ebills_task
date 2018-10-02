import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AgentlistService } from './agentlist.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [AgentlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
