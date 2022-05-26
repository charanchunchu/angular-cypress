import { Component,OnInit,Input,OnChanges,SimpleChange,SimpleChanges,DoCheck } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})


export class UserComponent implements OnInit,OnChanges,DoCheck {
  @Input() myNumber: number | undefined;

constructor() { }

ngOnChanges(Changes: SimpleChanges): void{
  const newNumberchange: SimpleChange =Changes['myNumber'];
  console.log("ngOnchanges() -> previous value: ",newNumberchange.previousValue);
  console.log("ngOnchanges() -> current value: ",newNumberchange.currentValue);

}

  ngOnInit(): void {
    console.log("ngOnInit() -> value:",this.myNumber);
  }
  ngDoCheck(): void {
      console.log("ngDoCheck() -> value: ",this.myNumber);
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() -> Only gets called Once");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() -> It gets called every change");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit() -> It gets called only once after ngAfterContent checked()");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked -> It gets called every time after ngAfterViewInit()");
  }
  ngOnDestroy(){
    console.log("Component has been DESTROYED!!!!");
  }
}











// import { Component, Input, OnChanges, OnInit, SimpleChanges,DoCheck } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.sass']
// })
// export class UserComponent implements OnInit, OnChanges,DoCheck {
//   @Input('user')
//   username!: string;
//   @Input()
//   name!: string;
//   constructor() {
//     console.log('constructor called');
//   }
//   ngOnChanges(element: SimpleChanges){
//     console.log("ngOnchanges called");
//     console.log(element);
//   }
//   ngOnInit(): void {
//     console.log('ngOninit called');
//   }
//   onclick(){
//     return this.name;
//   }
//   arr: any = [10];
// myFun1() {
// this.arr.push(12);
// console.log(this.arr);
// }
// ngDoCheck() {
// console.log('ngDoCheck');
// // alert('you have chnages');
// }
// }
