import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { schedule } from '../entities/schedule';
import { Times } from '../entities/times';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 

  constructor(private http: HttpClient, private routes: Router) { }
  scheduleLoaded: EventEmitter<schedule[]> = new EventEmitter<schedule[]>();
  schedule: schedule[] = new Array();
  getSchedule(d: Date) {
    // const codeBusiness: string = code.toString();
    const date: string = d.toISOString();
    this.http.get('api/Schedule/GetSchedule', { params: { date } }).subscribe(x => {
      let o: schedule[] = Object.values(x);
      // alert(JSON.stringify(x));
      this.schedule = []
      this.schedule.push(...o);

      this.scheduleLoaded.emit(this.schedule);
    });
  }

  timesLoaded: EventEmitter<Times[]> = new EventEmitter<Times[]>();
  times: Times[] = new Array();
  getExistingTimes(minDuration:number) {
    this.http.get('api/Schedule/GetTimes/'+ minDuration).subscribe(x => {
      let o: Times[] = Object.values(x);
      // alert(JSON.stringify(x));
      this.times.push(...o);
      this.timesLoaded.emit(this.times);
    });
  }

  order(s: schedule) {
    this.http.post('api/Schedule/Order', s).subscribe();{

    }
  }
}
