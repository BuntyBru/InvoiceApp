import {invoiceItems} from '../invoice-display/invoice-items/invoiceItems.model';
import {People} from '../people/people.model';

export class Invoice{

	public invoiceList: invoiceItems[];
	public discount: number;
	public tax :number;
	public personAssociated: People;
}