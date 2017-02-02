import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonAction]'
})
export class ButtonActionDirective {

  constructor() { }

      isPressed = false;

    @HostListener('click') methodToHandleMouseEnterAction(){
      // console.log("click");
      this.action();
    }
    
    @HostListener('mouseup') methodToHandleMouseExitAction(){
      // console.log("mouseup");
      this.action();
    }

    @Output() buttonPressed: EventEmitter<any> = new EventEmitter();

    action():void {
        this.isPressed = !this.isPressed;
        this.buttonPressed.emit(this.isPressed);
    }

}
