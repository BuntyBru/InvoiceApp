import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from './invoice.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-invoice-display',
  templateUrl: './invoice-display.component.html',
  styleUrls: ['./invoice-display.component.css']
})
export class InvoiceDisplayComponent implements OnInit {

  @Input() listInvoice:Invoice[] = [];


  constructor() { }

  ngOnInit() {
    console.log("form invoiceDisplay");
    console.log(this.listInvoice);
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes.listInvoice && changes.listInvoice.currentValue){
      this.listInvoice = changes.listInvoice.currentValue;
      this.listInvoice = this.listInvoice.slice();
    }
  }

  onData() {

  }

}
