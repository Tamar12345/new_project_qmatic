import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessOwnerService } from 'src/app/services/business-owner.service';
import { businessOwner } from 'src/app/entities/businessOwner';
import { client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  constructor(private service:ClientService) { 

  }

   password:string
  ngOnInit() {
  }

}
