import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { businessOwner } from '../../entities/businessOwner';
import { client } from '../../entities/client';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @Input() userIn;

  @Output() logInOut = new EventEmitter<object>();
  constructor() { }
  logIn() {
    this.logInOut.emit(this.userIn);
  }

  ngOnInit() {
  }

}
