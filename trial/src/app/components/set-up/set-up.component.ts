import { Component, OnInit, Input } from '@angular/core';
import { BusinessOwnerService } from 'src/app/services/business-owner.service';
import { businessOwner } from 'src/app/entities/businessOwner';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.css']
})
export class SetUpComponent implements OnInit {
  activeBO: businessOwner;
  showTimes: boolean = false;
  showSetUpFirstDefinition: boolean = false;

  constructor(private serv: BusinessOwnerService) {
    this.serv.getCurrentBusinessOwner()
    this.serv.currentBusinessOwnerEE.subscribe(x => {
      this.activeBO = x
    })
  }

  showSetUpFirstDefinition2() {
    this.showSetUpFirstDefinition = true;
    this.showTimes = false;

  }

  showTimes2() {
    this.showSetUpFirstDefinition = false;
    this.showTimes = true;
  }

  ngOnInit() {
  }

}
