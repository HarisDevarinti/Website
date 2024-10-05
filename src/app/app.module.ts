import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AadComponent } from './aad/aad.component';
import { CloudComponent } from './cloud/cloud.component';
import { DevopsComponent } from './devops/devops.component';
import { DigitalComponent } from './digital/digital.component';
import { FlutterComponent } from './flutter/flutter.component';
import { BaacComponent } from './baac/baac.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { AgileComponent } from './agile/agile.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AboutComponent, BlogComponent, ContactComponent, HomeComponent,
    HeaderComponent, FooterComponent, AadComponent, CloudComponent, DevopsComponent, DigitalComponent, FlutterComponent, BaacComponent, AwsComponent, AzureComponent, AgileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
