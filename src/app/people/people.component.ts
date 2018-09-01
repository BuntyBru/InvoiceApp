import { Component, OnInit,ElementRef, Output,Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from './people.model';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
person:People = new People();

@Output() formSubmitted = new EventEmitter<{name:string,phone:number,address:string,email:string,pincode:number, orderNumber:number}>();
orderNumber = 122
  constructor() { }

  ngOnInit() {
  }

onProceed(form:NgForm)
{

	this.person.name = form['value'].fullName;
	this.person.phone = form['value'].phone;
	this.person.address = form['value'].address;
	this.person.email= form['value'].email;
	this.person.pincode = form['value'].pincode;
	this.person.orderNumber = this.orderNumber;


	

	this.formSubmitted.emit(this.person);
	form.reset();
	this.orderNumber = this.orderNumber +1;



}


}
