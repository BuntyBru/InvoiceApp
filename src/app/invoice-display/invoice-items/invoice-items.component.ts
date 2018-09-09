import { Component, OnInit, Input } from '@angular/core';
//import {People} from '../../people/people.model';
import { Invoice } from '..//invoice.model';
import { SimpleChanges } from '@angular/core';

import {DataService} from '../../data.service';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})


export class InvoiceItemsComponent implements OnInit {


  listInvoice: Invoice[];
  selectedInvoice:Invoice = new Invoice();
  clickStatus=false;
  i:number;
  
  constructor(private dataService:DataService) {
      this.listInvoice = this.dataService.listInvoice;
      console.log(this.listInvoice);
  }

  
  onSelectInvoice(invoice:Invoice){
    console.log(this.listInvoice);
    this.selectedInvoice = invoice;
    this.selectedInvoice = Object.assign({},this.selectedInvoice);
    this.clickStatus = true;

    let k = document.getElementsByClassName('itemInvoice');

//for (this.i=0;this.i<this.listInvoice.length;this.i++)
//{
  //  k[this.i].classList.remove('active1');
//}





  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.listInvoice && changes.listInvoice.currentValue) {
      this.listInvoice = changes.listInvoice.currentValue;
    }
  }
  ngOnInit() {
  }

  goBack()
  {
    this.dataService.orderNumber = this.dataService.person.orderNumber+1;
   //  this.dataService.orderNumber = 1 + this.dataService.orderNumber;
    console.log(this.dataService.orderNumber);
  }

}


