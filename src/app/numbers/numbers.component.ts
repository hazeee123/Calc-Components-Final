import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  finalRes = '';
  num1 = 0;
  num2 = 0;
  firstNan = false;
  secNan = false;
  emp1 = true;
  emp2 = true;
  @Output() finalResult = new EventEmitter<string>();
  @Output() firstNANValue = new EventEmitter<boolean>();
  @Output() secNANValue = new EventEmitter<boolean>();
  @Output() firstNumValue = new EventEmitter<number>();
  @Output() secNumValue = new EventEmitter<number>();
  @Output() void1 = new EventEmitter<boolean>();
  @Output() void2 = new EventEmitter<boolean>();

  getInput1(num: string){
    let val = parseInt(num);
    this.finalRes = '';

    if(!isNaN(val)){
      this.num1 = val;
      this.firstNan = false;
    }else
      this.firstNan = true;

    this.verifyNum1Input(num);
    this.finalResult.emit(this.finalRes);
    this.firstNumValue.emit(this.num1);
    this.firstNANValue.emit(this.firstNan);
    console.log("numbers-ts " + this.finalRes)
  }

  getInput2(num: string){
    let val = parseInt(num);
    this.finalRes = '';
    this.finalResult.emit(this.finalRes);

    if(!isNaN(val)) {
      this.num2 = val;
      this.secNan = false;
    }else
      this.secNan = true;

    this.verifynum2Input(num);
    this.finalResult.emit(this.finalRes);
    this.secNumValue.emit(this.num2);
    this.secNANValue.emit(this.secNan);
  }

  verifyNum1Input(entry: string){
    if(entry.length === 0)
      this.emp1 = true;
    else
      this.emp1 = false;

    this.void1.emit(this.emp1);
  }

  verifynum2Input(entry: string){
    if(entry.length === 0)
      this.emp2 = true;
    else
      this.emp2 = false;

      this.void2.emit(this.emp2);
  }

}
