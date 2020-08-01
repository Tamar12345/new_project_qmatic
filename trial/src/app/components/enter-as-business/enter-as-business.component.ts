import { Component, OnInit } from '@angular/core';

import { businessOwner } from '../../entities/businessOwner';
import { BusinessOwnerService } from '../../services/business-owner.service';

@Component({
  selector: 'app-enter-as-business',
  templateUrl: './enter-as-business.component.html',
  styleUrls: ['./enter-as-business.component.css']
})
export class EnterAsBusinessComponent implements OnInit {
  bOwner:businessOwner=new businessOwner();
  constructor(private service:BusinessOwnerService) { }
  

  logIn(businessOwner:businessOwner){
      
    this.service.logIn(businessOwner);
  }
  ngOnInit() {
  }

}
