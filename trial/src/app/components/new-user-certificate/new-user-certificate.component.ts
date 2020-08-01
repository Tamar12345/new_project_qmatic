import { Component, OnInit } from '@angular/core';
import { businessOwner } from '../../entities/businessOwner';
import { ActivatedRoute } from '@angular/router';
import { BusinessOwnerService } from '../../services/business-owner.service';

@Component({
  selector: 'app-new-user-certificate',
  templateUrl: './new-user-certificate.component.html',
  styleUrls: ['./new-user-certificate.component.css']
})
export class NewUserCertificateComponent implements OnInit {

  currentOwner: businessOwner;
  constructor(private activatedRoute: ActivatedRoute, private service: BusinessOwnerService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentOwner = new businessOwner();
      let email = params['Email'];
      console.log(email); // Print the parameter to the console. 
      service.getCurretnBOwnerToCertificate(email);
      service.getCurrentBOwner.subscribe(
        x => {
          this.fff(x)
        });
    });
  }
  fff(x: businessOwner) {
    this.currentOwner = x;
  }

  confirm() {
    this.service.confirmCurretnBOwner(this.currentOwner);
  }
  reject() {
    this.service.rejectCurretnBOwner(this.currentOwner);
  }

  ngOnInit() {
  }

}
