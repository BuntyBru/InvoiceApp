import { Component, OnInit, Input } from '@angular/core';
//import {People} from '../../people/people.model';
import { Invoice } from '..//invoice.model';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})


export class InvoiceItemsComponent implements OnInit {


  @Input() listInvoice: Invoice[];
  selectedInvoice:Invoice = new Invoice();
  constructor() { }
  onSelectInvoice(invoice:Invoice){
    console.log(invoice);
    this.selectedInvoice = invoice;
    this.selectedInvoice = Object.assign({},this.selectedInvoice);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.listInvoice && changes.listInvoice.currentValue) {
      this.listInvoice = changes.listInvoice.currentValue;
    }
  }
  ngOnInit() {
  }

}


