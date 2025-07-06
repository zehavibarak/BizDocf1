import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
  standalone: false
})
export class GroupByPipe implements PipeTransform {

  transform(elements: any[], name: string): Collection[] {
    const collections = [] as Collection[],
      map = {} as { [key: string]: Collection };

    elements.forEach(element => {

      const key = element[name],
        collection = map[key];
      if (!collection) 
        collections.push(map[key] = {
          key, elements: [element]
        });
      else collection.elements.push(element);
    })
    return collections;
  }

}

interface Collection {
  key: string;
  elements: any[];
}
