import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from './invoice.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from '.././data.service';


@Component({
  selector: 'app-invoice-display',
  templateUrl: './invoice-display.component.html',
  styleUrls: ['./invoice-display.component.css']
})
export class InvoiceDisplayComponent implements OnInit {

  listInvoice:Invoice[] = [];
listInvoice2:Invoice[]=[];

  constructor(private dataService:DataService) { 
this.listInvoice = this.dataService.listInvoice;

  }

  ngOnInit() {}


  ngOnChanges(changes:SimpleChanges){
    if(changes.listInvoice && changes.listInvoice.currentValue){
      this.listInvoice = changes.listInvoice.currentValue;
      this.listInvoice = this.listInvoice.slice();
     // console.log("There is a change in listInvoice");
      
      //console.log(this.listInvoice2);
    }
  }

  onData() {

  }

}
