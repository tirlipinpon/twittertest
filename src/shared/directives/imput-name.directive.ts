import {Directive, ElementRef,Renderer,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[appImputName]'
})
export class ImputNameDirective{   

    constructor(private el:ElementRef,private render:Renderer) {
      this.render.setElementAttribute(el.nativeElement, 'placeholder', "inputname" );
      this.render.setElementAttribute(el.nativeElement, 'maxlength', '15');
    }


    @HostListener('mouseenter') methodToHandleMouseEnterAction(){
       this.changecolor('white');
    }
    
    @HostListener('mouseleave') methodToHandleMouseExitAction(){
        this.changecolor('');
    }

    private changecolor(color: string) {
        this.render.setElementStyle(this.el.nativeElement, 'border-color', color);
    }

}
