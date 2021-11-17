import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  constructor() { }
  @Input() name = 'Fred';
  @Output() result = new EventEmitter<string>();

  sendUser() {
    this.result.emit(this.name);
  }

  ngOnInit(): void {
  }

}
