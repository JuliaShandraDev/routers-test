import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this.el.nativeElement.value) {
      console.log(event);
      event.stopPropagation();
    }
  }
}
