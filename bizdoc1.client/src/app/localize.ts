import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { TranslateService } from '@bizdoc/core';

TranslateService.set({
  'en': {
    FO: 'FO',
    PrivateZone: 'Private zone',
  },
  'he': {
    FO: 'FO',
    PrivateZone: 'אזור אישי',
  },
});

@Directive({
  selector: '[appLocalize],r',
  standalone: false
})
export class Localize implements OnInit {
  private _translate = inject(TranslateService);
  constructor(private _elementRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    const { nativeElement } = this._elementRef;
    nativeElement.innerHTML = this._translate.get(nativeElement.innerHTML)
  }

}
