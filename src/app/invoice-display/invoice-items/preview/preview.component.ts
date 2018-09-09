import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/invoice-display/invoice.model';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { DataService } from '../../../data.service';



@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  
  @Input() selectedInvoice:Invoice = new Invoice();
  constructor() {


   }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedInvoice && changes.selectedInvoice.currentValue) {
      this.selectedInvoice = changes.selectedInvoice.currentValue;
     // console.log(this.selectedInvoice,"baba");
    }
  }


       printToCart(printSectionId: string)
       {
        let popupWinindow
        let innerContents = document.getElementById(printSectionId).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"><link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></head><body onload="window.print()"><div class="container">' + innerContents + '</div></html>');
        popupWinindow.document.close();
  }

}
