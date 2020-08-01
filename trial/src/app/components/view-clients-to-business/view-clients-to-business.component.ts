import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client.service';
// import { BsModalService } from 'node_modules_old/ngx-bootstrap/modal/public_api';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-view-clients-to-business',
  templateUrl: './view-clients-to-business.component.html',
  styleUrls: ['./view-clients-to-business.component.css']
})
export class ViewClientsToBusinessComponent implements OnInit {
  all_clients: client[] = [];
  closeResult = '';
  chosenClient: client = { firstName: '', lastName: '', id: null, street: '', city: '', confirmed: true, Email: '', password: '', phoneNumber: '' }
  // constructor(private serviceC: ClientService, private modalService: NgbModal) {
    constructor(private serviceC: ClientService) {
    serviceC.GetClientsToBusiness();
    this.all_clients = []
    serviceC.clientToBusinessLoaded.subscribe(x => {
      this.serviceC.clientToBusiness.forEach(x => x.confirmed = true)
      this.all_clients = this.all_clients.concat([...this.serviceC.clientToBusiness]);
      console.log(this.all_clients)
    })

    serviceC.GetwaitingClientsToBusiness();
    serviceC.waitingClientToBusinessLoaded.subscribe(x => {
      this.all_clients = this.all_clients.concat([...this.serviceC.waitingClientToBusiness]);
      this.serviceC.waitingClientToBusiness.forEach(x => x.confirmed = false)
      console.log(this.all_clients)
    })
  }


  // GoToStudent(template: TemplateRef<any>) {
  //   // this.test = new test();
  //   debugger;
  //   this.modalR = this.BsModalService.show(template, { class: 'modal-sm' });

  // }

  ngOnInit() {
  }
  chooseClient(ln: client) {
    this.chosenClient = ln
  }

  confirmClient() {
    this.chosenClient.confirmed = true;
    this.serviceC.confirmClientToBusiness(this.chosenClient.id)
  }

  declineClient() {
    this.serviceC.declineClientToBusiness(this.chosenClient.id)
  }
   open(content) {
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
   }

 private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  return ""
 }
}
