import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-function',
  templateUrl: './button-function.component.html',
  styleUrls: ['./button-function.component.scss']
})
export class ButtonFunctionComponent {

  @Input()
  text!: string;

  @Input()
  icon!: string;

  @Input()
  height: string = '50px';

  @Input()
  disabled: boolean = false;

  constructor() { }

}
