import { Component, OnInit, Input } from '@angular/core';
import { actionsToBusiness } from '../../entities/actionsToBusiness';
import { businessOwner } from '../../entities/businessOwner';
import { ScheduleService } from '../../services/schedule.service';
import { Times } from '../../entities/times';
import { Time } from '@angular/common';
import { BusinessOwnerService } from '../../services/business-owner.service';
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  times: Times[] = []
  filteredTimes: Times[] = []
  serviceOptions: actionsToBusiness[] = [];
  serviceOption: actionsToBusiness = { ActionName: "", businessCode: null, code: null, duration: null }
  chosenServiceOpt: actionsToBusiness;
  canAddOpt: boolean = false
  isValidDuration: boolean = false
  isValidServiceName: boolean = false
  fromTime: string
  toTime: string
  canAddTime:boolean = false
   activeBusiness: businessOwner = new businessOwner;

  constructor(private servSc: ScheduleService, private servB:BusinessOwnerService) {
    console.log("times", this.activeBusiness)
    servSc.getExistingTimes(0)
    servSc.timesLoaded.subscribe(x => {
      this.times.push(...x)
      this.filterTimes()
    })
    
    this.servB.getCurrentBusinessOwner()
    this.servB.currentBusinessOwnerEE.subscribe(x => {
      this.activeBusiness = x
    })
  }

  checkValidOption(event) {
    this.isValidServiceName = (this.serviceOption.ActionName != null && this.serviceOption.ActionName != "")
    this.isValidDuration = this.serviceOption.duration != 0 && this.serviceOption.duration != null && (this.serviceOption.duration % this.activeBusiness.minDurationTurn == 0)
    this.canAddOpt = this.isValidServiceName && this.isValidDuration
  }
  filterTimes() {
    this.filteredTimes = []
    let start: number
    let end: number
    this.times.forEach(element => {
      start = (<number><any>element.startHour.slice(0, 2) * 60) + (<number><any>element.startHour.slice(3, 5) * 1)
      end = (<number><any>element.endHour.slice(0, 2) * 60) + (<number><any>element.endHour.slice(3, 5) * 1)
      if (((end - start) % this.activeBusiness.minDurationTurn) == 0)
        this.filteredTimes.push(element)

    });
  }

  getTimes() {
    this.filterTimes()

  }

  addServiceOption(event) {
    this.serviceOptions.push({ ActionName: this.serviceOption.ActionName, duration: this.serviceOption.duration, businessCode: null, code: null })
    this.serviceOption.ActionName = ""
    this.serviceOption.duration = null
    this.canAddOpt = false
  }

  onSelectOption(opt: actionsToBusiness) {
    this.chosenServiceOpt = opt;
  }

  removeOption(opt: actionsToBusiness) {
    this.serviceOptions = this.serviceOptions.filter(item => item !== opt);
  }

  addTime() {
    if (this.fromTime != undefined && this.toTime != undefined) {
      alert()
      this.times.push({ endHour: this.toTime, startHour: this.fromTime, code: -1, isNew: true })
      this.filterTimes()
      this.canAddTime = false
    }
  }
  changeTime() { 
    this.canAddTime = this.fromTime != undefined && this.toTime != undefined && this.toTime > this.fromTime
  }
  ngOnInit() {
  }

}
