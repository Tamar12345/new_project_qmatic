import { Component, OnInit, Output, Input } from '@angular/core';
import { businessOwner } from '../../entities/businessOwner';
import { BusinessOwnerService } from '../../services/business-owner.service';
import { ClientService } from '../../services/client.service';
import { client } from '../../entities/client';

@Component({
  selector: 'app-enter-as-client',
  templateUrl: './enter-as-client.component.html',
  styleUrls: ['./enter-as-client.component.css']
})
export class EnterAsClientComponent implements OnInit {
 clientUser:client=new client();
  isLogin:boolean=true;
  constructor(private service:ClientService) {}
  logIn(clientUser:client){      
    this.service.logIn(clientUser);
  }
  ngOnInit() {
  }

}
