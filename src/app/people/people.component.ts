import { Component, OnInit,ElementRef, Output,Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from './people.model';
import { DataService } from '../data.service';




@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
person:People = new People();
orderNumber=0;



//@Output() formSubmitted = new EventEmitter<{name:string,phone:number,address:string,email:string,pincode:number, orderNumber:number}>();

  constructor( private dataService: DataService) { }

  ngOnInit() {
  	
  	this.orderNumber= this.dataService.orderNumber;
  }

onProceed(form:NgForm)
{

	this.dataService.person.name = form['value'].fullName;
	this.dataService.person.phone = form['value'].phone;
	this.dataService.person.address = form['value'].address;
	this.dataService.person.email= form['value'].email;
	this.dataService.person.pincode = form['value'].pincode;
	this.dataService.person.orderNumber = this.dataService.orderNumber;


console.log("hello from onProceed");
	console.log(this.dataService.person.name);
this.orderNumber = this.orderNumber +1;

	//this.formSubmitted.emit(this.person);
	form.reset();
	


}


}
