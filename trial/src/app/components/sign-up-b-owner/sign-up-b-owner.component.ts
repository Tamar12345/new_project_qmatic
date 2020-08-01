import { Component, OnInit } from '@angular/core';
import { businessOwner } from 'src/app/entities/businessOwner';
import { BusinessOwnerService } from 'src/app/services/business-owner.service';

@Component({
  selector: 'app-sign-up-b-owner',
  templateUrl: './sign-up-b-owner.component.html',
  styleUrls: ['./sign-up-b-owner.component.css']
})
export class SignUpBOwnerComponent implements OnInit {
  public bOwner: businessOwner

  constructor(private service: BusinessOwnerService) {
    this.bOwner = new businessOwner();
  }
  ngOnInit() {
  }
  signUp() {
    this.service.signUp(this.bOwner)
  }
}

