import { Component, OnInit, Input, SimpleChanges,SimpleChange, Output, EventEmitter} from '@angular/core';
import {People} from '../people/people.model';
import {Invoice} from '../invoice-display/invoice.model'
import { NgForm } from '@angular/forms';
import {invoiceItems} from '../invoice-display/invoice-items/invoiceItems.model'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
invoice: Invoice = new Invoice();
invoice2:Invoice = new Invoice();
@Input() person = new People();

@Output() billSubmitted = new EventEmitter<Invoice>();



invoiceItem = new invoiceItems();

subTotal=0;
grandTotal = 0;
tax =0;
discount = 0;



  constructor() { }

  ngOnInit() {

  }


onSubmit(form:NgForm,k){
	
this.invoiceItem.item = form['value'].item;
this.invoiceItem.quantity=form['value'].quantity;
this.invoiceItem.price = form['value'].price;
this.invoice.invoiceList.push(this.invoiceItem);
this.invoice2.invoiceList.push(this.invoiceItem);
this.invoice.tax = form['value'].tax;
this.invoice.discount = form['value'].discount;
this.subTotal = Number((this.subTotal + (this.invoiceItem.price*this.invoiceItem.quantity)).toFixed(2))
this.tax = Number((this.tax + (this.invoice.tax*this.invoiceItem.price/100)).toFixed(2));
this.discount  =Number((this.discount+ (this.invoice.discount* this.invoiceItem.price/100)).toFixed(2));
this.grandTotal = Number((this.subTotal + this.tax-this.discount).toFixed(2));

this.invoice.SubTotal = this.subTotal;
this.invoice.GrandTotal = this.grandTotal;
this.invoice.taxTotal = this.tax;
this.invoice.discountTotal = this.discount;

this.invoice.personAssociated= this.person;
this.invoiceItem = new invoiceItems();





console.log(this.invoice);
//console.log(this.invoice.SubTotal);
//console.log(this.grandTotal);

form.controls.item.reset();
form.controls.quantity.reset();
form.controls.price.reset();
k.disabled = false;
//onsole.log(this.invoice.invoiceList);



}


onSave(form:NgForm,k)
{
	this.billSubmitted.emit(this.invoice);
	form.reset();
	this.invoice2.invoiceList =[];
	this.invoice= new Invoice();
	this.discount =0.00;
	this.grandTotal =0;
	this.subTotal =0;
	this.tax = 0.00;
	k.disabled = true;

}


}
