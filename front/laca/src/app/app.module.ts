import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './ui-components/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './ui-components/home/home.component';
import { TransporterListComponent } from './ui-components/transporter/transporter-list/transporter-list.component';
import {HttpClientModule} from "@angular/common/http";
import { TransporterFormComponent } from './ui-components/transporter/transporter-form/transporter-form.component';
import {FormsModule} from "@angular/forms";
import { TransporterEditModalComponent } from './ui-components/transporter/transporter-edit-modal/transporter-edit-modal.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ProductEditModalComponent} from "./ui-components/product/product-edit-modal/product-edit-modal.component";
import { ProductFormComponent } from './ui-components/product/product-form/product-form.component';
import { ProductListComponent } from './ui-components/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    TransporterListComponent,
    TransporterFormComponent,
    TransporterEditModalComponent,
    ProductEditModalComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
