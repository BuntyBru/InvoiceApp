import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InvoiceDisplayComponent } from './invoice-display/invoice-display.component';
import { InvoiceItemsComponent } from './invoice-display/invoice-items/invoice-items.component';
import { PeopleComponent } from './people/people.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PreviewComponent } from './invoice-display/invoice-items/preview/preview.component';
import { Routes, RouterModule } from '@angular/router';

import { DataService } from './data.service';

const appRoutes:Routes = [
{path:'',component:PeopleComponent},
{path:'people', component: PeopleComponent},
{path:'invoice', component: InvoiceComponent},
{path:'invoice-display',component:InvoiceDisplayComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    InvoiceDisplayComponent,
    InvoiceItemsComponent,
    PeopleComponent,
    InvoiceComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


