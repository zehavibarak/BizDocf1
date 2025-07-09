import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { TranslateService } from '@bizdoc/core';

TranslateService.set({
  'en': {
    Welcome: 'Welcome!',
    WelcomeMessage: 'In website you\'ll find everything you need.',
    ContactUs:'Contact us',
    Disconnect: 'Disconnect',
    MFA: 'Ministry of Foreign Affairs',
    NotFound: 'Not found', 
    PrivateZone: 'Private zone',
  },
  'he': {
    ContactUs:'צור/י קשר',
    Welcome: 'ברוכים הבאים!',
    WelcomeMessage: 'באתר תמצאו כל מה שנדרש.',
    Disconnect: 'התנתק/י',
    MFA: 'משרד החוץ | שירותים משרדיים',
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
