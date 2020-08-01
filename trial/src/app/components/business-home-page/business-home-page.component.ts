import { Component, OnInit } from '@angular/core';
import { BusinessOwnerService } from 'src/app/services/business-owner.service';
import { businessOwner } from 'src/app/entities/businessOwner';

@Component({
  selector: 'app-business-home-page',
  templateUrl: './business-home-page.component.html',
  styleUrls: ['./business-home-page.component.css']
})
export class BusinessHomePageComponent implements OnInit {

  currentOwner: businessOwner = { code: null, city: null, completeRegistration: false, password: null, phoneNumber: null, street: null, email: null, backGroundColor: null, businessName: null, cancelledTurnColor: null, description: null, experience: null, fontColor: null, freeTurnColor: null, logo: null, maxTurnstoClient: null, clientCancellationsColor: null, minDurationTurn: null, numHouse: null, ownerName: null, rangeEnablingTurn: null, tableColor: null, takenTurnColor: null }
  pathToLogo:string = "http://localhost:50492/Images/default_logo_2.jpg"

  constructor(private serviceB: BusinessOwnerService) {
    this.serviceB.getCurrentBusinessOwner()
    this.serviceB.currentBusinessOwnerEE.subscribe(x => {
      this.currentOwner = x
      this.pathToLogo = "http://localhost:50492/Images/"+this.currentOwner.logo
    })
  }

  ngOnInit() {
  }

}
