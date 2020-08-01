import { Component, OnInit } from '@angular/core';
import { businessOwner } from '../../../entities/businessOwner';
import { BusinessOwnerService } from '../../../services/business-owner.service';
import { SearchByBusinessNameComponent } from '../search-by-business-name/search-by-business-name.component';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
// import { AlertController } from 'ionic-angular';
@Component({
  selector: 'app-show-filter-business',
  templateUrl: './show-filter-business.component.html',
  styleUrls: ['./show-filter-business.component.css']
})
export class ShowFilterBusinessComponent implements OnInit {

  filterBusiness: businessOwner[] = new Array();
  constructor(public serviceB: BusinessOwnerService, private serviceC: ClientService, private router: Router) {
    // if (serviceC.currentClient.id == null) {
    //   alert("צרך להרשם מחדש(לשנות ניסוח דחוףףףףףף)");
    //   this.router.navigateByUrl('/enterClient');
    // }
    this.loadBusiness();
    this.serviceB.businessLoaded.subscribe(businesses => {
      this.loadBusiness();
    })
  }


  loadBusiness() {
    this.filterBusiness = [...this.serviceB.business];
    console.log(this.filterBusiness)
  }
  code: string
  
  openHomePage(code2: number) {
    this.code = code2.toString()
    this.serviceB.saveCurrentBusiness(this.code)
  }
  ngOnInit() {
  }
  private n: string;

  // checkRegister(code: number) {
  //   this.n = code.toString();
  //   this.serviceC.checkRegister1(this.n);
  // }


}
