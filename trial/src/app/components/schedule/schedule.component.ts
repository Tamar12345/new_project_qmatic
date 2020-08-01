import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { schedule, states } from '../../entities/schedule';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { BusinessOwnerService } from '../../services/business-owner.service';
import { businessOwner } from '../../entities/businessOwner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  states = states;
  schedule: schedule[] = new Array();
  daysOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  activeBusiness: businessOwner = { code: null, city: null, completeRegistration: false, password: null, phoneNumber: null, street: null, email: null, backGroundColor: null, businessName: null, cancelledTurnColor: null, clientCancellationsColor: null, description: null, experience: null, fontColor: null, freeTurnColor: null, logo: null, maxTurnstoClient: null, minDurationTurn: null, numHouse: null, ownerName: null, rangeEnablingTurn: null, tableColor: null, takenTurnColor: null }

  isBusinessOwner: boolean = false;

  days = [
    { name: '', date: new Date() },
    { name: '', date: new Date() },
    { day: 2, name: '', date: new Date() },
    { day: 3, name: '', date: new Date() },
    { day: 4, name: '', date: new Date() },
    { day: 5, name: '', date: new Date() },
    { day: 6, name: '', date: new Date() }
  ];
  cl: string = "canceled"
  maxLength: number = 0;
  maxLengthIndex: number = 0;
  today: Date;
  constructor(private service: ScheduleService, private serviceB: BusinessOwnerService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.isBusinessOwner = params['isBO'];
    });
    this.today = new Date();
    for (let index = 0; index < this.days.length; index++) {
      const element = this.days[index];
      element.date.setDate(this.today.getDate() + index);
      element.name = this.daysOfweek[element.date.getDay()];
    }
    this.serviceB.getCurrentBusinessOwner()
    this.serviceB.currentBusinessOwnerEE.subscribe(x => {
      this.activeBusiness = x
    })

    service.getSchedule(new Date());
    service.scheduleLoaded.subscribe(x => {
      this.schedule = []
      this.schedule = [...this.service.schedule];
      console.log(this.schedule);
      var element = <any>this.schedule;
      let element2: schedule[][] = <schedule[][]>element;
      this.maxLength = Math.max.apply(Math, element2.map(x2 => x2.length));
      console.log(this.maxLength);
      for (let i in this.schedule) {
        if ((<Array<schedule>><any>this.schedule[i]).length == this.maxLength) {
          this.maxLengthIndex = <number><any>i;
        }
      }
      console.log(this.maxLengthIndex);
      console.log("schedule bo", this.activeBusiness)

    })
  }
  order(s: schedule) {
    if (!this.isBusinessOwner) {
      this.service.order(s);
      s.State = 0
    }
  }
  ngOnInit() {
  }

}
