import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calc-Components-Final';
  result = '';
  firstNan = false;
  secNan = false;
  firstNum = 0;
  secNum = 0;
  opt = '';
  voidOne = true;
  voidTwo = true;

  getNum1(num: number){
    this.firstNum = num;
  }

  getNum2(num: number){
    this.secNum = num;
  }

  getBool1(nan: boolean){
    this.firstNan = nan;
  }

  getBool2(nan: boolean){
    this.secNan = nan;
  }

  getResult(res: string){
    this.result = res;
  }

  getOperation(choice: string){
    this.opt = choice;
  }

  getVoid1(field: boolean){
    this.voidOne = field;
  }

  getVoid2(field: boolean){
    this.voidTwo = field;
  }
}
  