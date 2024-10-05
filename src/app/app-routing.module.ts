import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AadComponent } from './aad/aad.component';
import { BaacComponent } from './baac/baac.component';
import { CloudComponent } from './cloud/cloud.component';
import { DevopsComponent } from './devops/devops.component';
import { DigitalComponent } from './digital/digital.component';
import { FlutterComponent } from './flutter/flutter.component';
import { AgileComponent } from './agile/agile.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aad', component: AadComponent },
  { path: 'baac', component: BaacComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'dm', component: DigitalComponent },
  { path: 'flutter', component: FlutterComponent },
  { path: 'agile', component: AgileComponent },
  { path: 'aws', component: AwsComponent },
  { path: 'azure', component: AzureComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
