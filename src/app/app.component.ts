import { Component, OnInit } from '@angular/core';
import { People } from './people/people.model';
import { Invoice } from './invoice-display/invoice.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  person: People = new People();
  person1 = new People();

  invoice1 = new Invoice();
  listInvoice: Array<Invoice> = [];



  ngOnInit() {

  }

  onRecievePeopleData($event) {

    this.person.name = $event.name;
    this.person.email = $event.email;
    this.person.address = $event.address;
    this.person.pincode = $event.pincode;
    this.person.phone = $event.phone;
    this.person.orderNumber = $event.orderNumber;
  }



  // Below is the event recieved in the form of Invoice and now we are planning to send it to invoice-display

  onRecieveInvoiceData($event) {
    let invoice1 = new Invoice();
    invoice1.invoiceList = $event.invoiceList;
    invoice1.personAssociated = Object.assign({}, $event.personAssociated as People);
    invoice1.discount = $event.discount;
    invoice1.tax = $event.tax
    invoice1.GrandTotal = $event.GrandTotal;
    invoice1.taxTotal = $event.taxTotal;
    invoice1.discountTotal = $event.discountTotal;
    invoice1.SubTotal = $event.SubTotal;
    this.listInvoice.push(invoice1);
    this.listInvoice = this.listInvoice.slice();
    this.invoice1 = invoice1;

    console.log(this.listInvoice);
  }
}
