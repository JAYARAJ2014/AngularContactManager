import { Component, OnInit } from '@angular/core';
import { Contact} from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  mycontact:Contact = {
    id: 1,
    firstName:'Jayaraj',
    lastName:'Sivadasan',
    nickName: 'Jay',
    cellPhone:'919.802.7949',
    homePhone:'919.439.7813',
    workPhone: '919.854.7688'
  };
  constructor() { }

  ngOnInit() {
  }
 
}
