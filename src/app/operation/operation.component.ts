import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() voidFirst !: boolean;
  @Input() voidSec !: boolean;
  @Output() operation = new EventEmitter<string>();
  getOp(option: string)
  {
    this.operation.emit(option);
  }

}
