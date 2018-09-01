import {invoiceItems} from './invoice-items/invoiceItems.model';
import {People} from '../people/people.model';

export class Invoice{

	public invoiceList: invoiceItems[]=[];
	public discount: number;
	public tax :number;
	public personAssociated: People;
	public SubTotal:number;
	

	public GrandTotal:number;
	public taxTotal : number;
	public discountTotal :number;
	

	public timestamp = new Date();



}