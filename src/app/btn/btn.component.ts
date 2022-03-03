import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() color: 'primary' | 'secondary' = 'primary';
  
  rootClass!: string;
  classMap: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Get the component selector ('app-button')
    this.rootClass = this.elementRef.nativeElement.tagName.toLowerCase();
    this.updateClassMap();
  }

  ngOnChanges() {
    this.updateClassMap();
  }

  updateClassMap() {
    // If a key has a truthy value, the class is added. If the key is falsy the class gets removed.
    this.classMap = {
      [`${this.rootClass}`]: true,
      [`${this.rootClass}--${this.color}`]: !!this.color,
    };
  }
}
