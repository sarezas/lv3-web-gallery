import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { PageEvent } from '@angular/material';

declare const window: any;

@Directive({
    selector: '[appNavAppear]'
})
export class NavbarDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {}
    @HostListener('window:scroll', [])
    ngOnInit() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 84) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', 'hsla(184, 27%, 90%, 0.4)');
            this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 8px 6px -6px white');
        } else if (number < 84) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
            this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 0 0 none');
        }
    }
}
