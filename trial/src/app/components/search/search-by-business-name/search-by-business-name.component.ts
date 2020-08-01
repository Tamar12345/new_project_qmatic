import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessOwnerService } from '../../../services/business-owner.service';

@Component({
  selector: 'app-search-by-business-name',
  templateUrl: './search-by-business-name.component.html',
  styleUrls: ['./search-by-business-name.component.css']
})
export class SearchByBusinessNameComponent implements OnInit {

  // @Output() change:EventEmitter<string>=new EventEmitter<string>();
  searchByName:EventEmitter<string>=new EventEmitter<string>();
  constructor(private service:BusinessOwnerService) { }

  ngOnInit() {
  } 
  searchByName_func(name:string)
  {   
    // this.service.searchBy.city="י";
      this.service.searchBy.name = name;
  }
}
