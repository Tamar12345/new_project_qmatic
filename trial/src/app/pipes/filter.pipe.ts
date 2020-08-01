import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arrayBusiness: any, filterBy): any {
    return arrayBusiness.filter(b => {
      return filterBy.name &&filterBy.city
       ?b.businessName.includes(filterBy.name)&&b.city.includes(filterBy.city)
       :filterBy.name
             ? b.businessName.includes(filterBy.name)  
             :filterBy.city
             ?b.city.includes(filterBy.city)             
                : true
      // return filterBy.name ? b.businessName.includes(filterBy.name) : true
    })
  }

}
