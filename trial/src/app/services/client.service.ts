import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { client } from '../entities/client';
import { businessOwner } from '../entities/businessOwner';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  currentClient: client = new client;
  constructor(private http: HttpClient, private routes: Router) { }
  declineClientToBusiness(id: string) {
    this.http.get('api/Client/DeclineClient/' + id).subscribe(x => {
      if (x) {
        console.log("decline succeeded")
        // this.routes.navigateByUrl('/enterClient');
      }
      else {
        console.log("decline failed")
        // this.routes.navigateByUrl('/');
      }
    });
  }
  confirmClientToBusiness(id: string) {
    this.http.get('api/Client/ConfirmClient/' + id).subscribe(x => {
      if (x) {
        console.log("confirm succeeded")
        // this.routes.navigateByUrl('/enterClient');
      }
      else {
        console.log("confirm failed")
        // this.routes.navigateByUrl('/');
      }
    });
  }
  signUp(clientUser: client) {

    this.http.post('api/Client/SignUp', clientUser).subscribe(x => {
      if (x) {
        this.routes.navigateByUrl('/enterClient');
      }
      else {
        this.routes.navigateByUrl('/');
      }
    });
  }
  logIn(clientUser: client) {
    this.http.post('api/Client/LogIn', clientUser).subscribe(x => {
      if (x != null) {
        this.currentClient = (x as client);
        this.routes.navigateByUrl('/searchBusiness');
      }
      else {
        this.routes.navigateByUrl('/');
      }
    });
  }
  checkRegister1() {
    this.http.get('/api/Client/CheckRegister').subscribe(x => {
        if (x) {
          this.routes.navigateByUrl('/schedule');
        }
        else {
          this.routes.navigateByUrl('/clientRegisterToBusiness');
        }
      });
  }

  clientToBusinessLoaded: EventEmitter<client[]> = new EventEmitter<client[]>();
  clientToBusiness: client[] = new Array();
  GetClientsToBusiness() {
    this.clientToBusiness = new Array();
    this.http.get('api/Client/GetClientsToBusiness').subscribe(x => {
      let o: client[] = Object.values(x);
      // alert(JSON.stringify(x));
      this.clientToBusiness.push(...o);

      this.clientToBusinessLoaded.emit(this.clientToBusiness);
    });
  }

  waitingClientToBusinessLoaded: EventEmitter<client[]> = new EventEmitter<client[]>();
  waitingClientToBusiness: client[] = new Array();
  GetwaitingClientsToBusiness() {
    this.waitingClientToBusiness = new Array();
    this.http.get('api/Client/GetWaitingClientsToBusiness').subscribe(x => {
      let o: client[] = Object.values(x);
      // alert(JSON.stringify(x));
      this.waitingClientToBusiness.push(...o);

      this.waitingClientToBusinessLoaded.emit(this.waitingClientToBusiness);
    });
  }

  currentClientEE: EventEmitter<client> = new EventEmitter<client>();

  getCurrentBusinessOwner() {
    this.http.get<client>('/api/Client/GetCurrentClient').
      subscribe(x => {
        this.currentClientEE.emit(x);
      });
  }

}
