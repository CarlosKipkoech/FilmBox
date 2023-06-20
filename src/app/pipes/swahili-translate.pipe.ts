import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swahiliTranslate'
})
export class SwahiliTranslatePipe implements PipeTransform {
  transform(title: string): string {
    if (title.includes('Fast')) {
      title = title.replace('Fast', 'Haraka');
    }
    if (title.includes('Family')) {
      title = title.replace('Family', 'Familia');
    }
    if (title.includes('Rings')) {
      title = title.replace('Rings', 'Mapete');
    }
    if (title.includes('Ring')) {
        title = title.replace('Ring', 'Pete');
      }

    return title;
  }
}
