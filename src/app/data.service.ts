import { PeopleComponent } from './people/people.component';
import { People } from './people/people.model';
import { Invoice } from './invoice-display/invoice.model';
import { invoiceItems } from './invoice-display/invoice-items/invoiceItems.model';

export class DataService

{
	orderNumber = 122;
//Creating the people variable
	person:People = new People();
	invoiceItem = new invoiceItems();
	invoice: Invoice = new Invoice();
	listInvoice: Array<Invoice> = [];
	addInvoice(inv:Invoice)
	{
		this.listInvoice.push(inv);
		console.log("invoice pushed");
		console.log(this.listInvoice);
	}





}