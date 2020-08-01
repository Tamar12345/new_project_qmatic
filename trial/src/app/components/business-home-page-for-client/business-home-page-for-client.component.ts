import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { schedule, states } from '../../entities/schedule';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-business-home-page-for-client',
  templateUrl: './business-home-page-for-client.component.html',
  styleUrls: ['./business-home-page-for-client.component.css']
})
export class BusinessHomePageForClientComponent implements OnInit {

  constructor(private serviceC: ClientService) {
  }
  checkRegister() {
    debugger
    this.serviceC.checkRegister1()
  }

  ngOnInit() {
  }
}
