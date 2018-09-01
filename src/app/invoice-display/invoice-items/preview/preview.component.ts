import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/invoice-display/invoice.model';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  
  @Input() selectedInvoice:Invoice = new Invoice();
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedInvoice && changes.selectedInvoice.currentValue) {
      this.selectedInvoice = changes.selectedInvoice.currentValue;
      console.log(this.selectedInvoice,"baba");
    }
  }

}
