import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { businessOwner } from '../../entities/businessOwner';
import { BusinessOwnerService } from '../../services/business-owner.service';
import { client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-sign-up-client',
  templateUrl: './sign-up-client.component.html',
  styleUrls: ['./sign-up-client.component.css']
})
export class SignUpClientComponent implements OnInit {
  public clientUser: client;
  constructor(public service: ClientService) {
    this.clientUser = new client();
  }


  signUp() {
    this.service.signUp(this.clientUser);
  }
  ngOnInit() {
  }

}
