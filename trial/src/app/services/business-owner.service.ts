import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';
import { businessOwner } from '../entities/businessOwner';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class BusinessOwnerService {

  business: businessOwner[] = new Array();
  businessLoaded: EventEmitter<businessOwner[]> = new EventEmitter<businessOwner[]>();

  searchBy = {
    name: null,
    city: null
  }
  constructor(private http: HttpClient, private router: Router) {
    this.http.get<Array<businessOwner>>('/api/BusinessOwner/GetBusinessName').
      subscribe(x => {
        this.business.push(...x);
        this.businessLoaded.emit(this.business);
      });
  }
  

  saveCurrentBusiness(code:string)
  {
    this.http.get('/api/BusinesssOwner/saveCurrentBusiness', { params: { code: code } }).subscribe(
      x => {
        this.router.navigateByUrl("/BusinessHomePageForClientComponent")        
      }
    )
  }

  postFile(image: File): Observable<string> {
    
    const formData: FormData = new FormData();
    formData.append('Image', image, image.name);
    // alert(formData.get(&#39;image&#39;).toString());
    return this.http.post<string>('api/BusinesssOwner/UploadLogo', formData);
  }

  currentBusinessOwnerEE: EventEmitter<businessOwner> = new EventEmitter<businessOwner>();

  getCurrentBusinessOwner() {
    this.http.get<businessOwner>('/api/BusinessOwner/GetCurrentBusiness').
      subscribe(x => {
        this.currentBusinessOwnerEE.emit(x);
      });
  }

  saveAll(bo: businessOwner) {
    this.http.post('/api/BusinesssOwner/SaveAll', bo).subscribe(x => {


    })
  }



  signUp(businessOwner: businessOwner) {
    this.http.post('/api/BusinesssOwner/SignUp', businessOwner).subscribe(x => {
      if (x == true) {
        this.router.navigateByUrl('/NotifyRegisterSucceded');
      }
      else {
      }
    });
  }
  logIn(businessOwner: businessOwner) {
    this.http.post('/api/BusinessOwner/LogIn', businessOwner).subscribe(x => {
      if (x == true) {
        this.router.navigateByUrl('/businessHomePage');
      }
      else {
        this.router.navigateByUrl('/');
      }
    });
  }


  getCurrentBOwner: EventEmitter<businessOwner> = new EventEmitter<businessOwner>();
  // b: businessOwner=new businessOwner();
  getCurretnBOwnerToCertificate(email: string) {

    this.http.get('/api/BusinesssOwner/getCurretnBOwnerToCertificate', { params: { email: email } }).subscribe
      (x => {
        if (x == null) {
          this.router.navigateByUrl('/');

        }
        else {
          this.getCurrentBOwner.emit(x as businessOwner);
        }
      }
      );
  }


  confirmCurretnBOwner(bOwner: businessOwner) {
    this.http.post('/api/BusinesssOwner/rejectCurretnBOwner', bOwner).subscribe(x => { });
  }
  rejectCurretnBOwner(bOwner: businessOwner) {
    this.http.post('/api/BusinesssOwner/rejectCurretnBOwner', bOwner).subscribe(x => {
      if (x == true) {
        this.router.navigateByUrl('/');
      }
    })

  }


}
