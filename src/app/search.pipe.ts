import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(candies:any[], searchText:string): any {
    if (!candies) return [];
    if (!searchText) return candies;

    return candies.filter(e=>e.category.includes(searchText.toLowerCase()))
  }

}
