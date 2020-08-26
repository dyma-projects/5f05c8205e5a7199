import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[myColor]'
})

export class ColorDirective {

    @HostBinding('style.color') color: string;
    @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
     //console.log(event.key);
     let toucheFleche = event.key;
     console.log(toucheFleche);

     if (toucheFleche == 'ArrowRight') {
       this.color = 'red';
     }
     else if (toucheFleche == 'ArrowDown') {
       this.color = 'blue';
     }
     else if (toucheFleche == 'ArrowLeft') {
       this.color = 'yellow';
     }
     else if (toucheFleche == 'ArrowUp') {
       this.color = 'green';
     }
    }
}