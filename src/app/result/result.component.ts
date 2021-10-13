import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result = 0;
  @Input() finalRes !: string;
  @Input() firstNan !: boolean;
  @Input() secNan !: boolean;
  @Input() firstNum !: number;
  @Input() secNum !: number;
  @Input() option !: string;
  @Input() voidFirst !: boolean;
  @Input() voidSec !: boolean;

  toCalculateResult(opt: string){
    let choice = parseInt(opt);

    console.log(this.firstNum);
    console.log(this.secNum);
    console.log(this.firstNan);
    console.log(this.secNan);

    if(this.firstNan || this.secNan)
      this.finalRes = "Input is Invalid";    
    else{
      switch(choice) {
        case 1: this.result = this.firstNum + this.secNum; break;
        case 2: this.result = this.firstNum - this.secNum; break;
        case 3: this.result = this.firstNum * this.secNum; break;
        case 4: this.result = this.firstNum / this.secNum; break;
      }
      this.finalRes = this.result.toString();
    }

  }
}
