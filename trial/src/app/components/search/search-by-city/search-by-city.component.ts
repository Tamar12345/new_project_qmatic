import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BusinessOwnerService } from '../../../services/business-owner.service';

@Component({
  selector: 'app-search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.css']
})
export class SearchByCityComponent implements OnInit {

  searchByCity:EventEmitter<string>=new EventEmitter<string>();
  constructor(private service:BusinessOwnerService) { }

  ngOnInit() {
  }
  searchByCity_func(city:string){
    this.service.searchBy.city = city;
  }
}