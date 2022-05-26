import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {
  gender = 'male';
  about = '';
  userlist = ['chunchu'];
  name ='chunchu name';
  private myNumber : number = 25;
  isVisible : boolean = true;
  get counter(){
    return this.myNumber;
  }
  set counter(value){
    this.myNumber = value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  ngOnInit(): void {
  }
 switchVisibility(){
   this.isVisible = !this.isVisible;
 }
 allowNewuser = false;
  userCreatedStatus = 'No User is Created';
  constructor() {
    setTimeout(() => {
      this.allowNewuser = true;
    }, 3000);
   }
   changeUserCreatedStatus() {
     this.userCreatedStatus = 'User is created';
   }
}

// import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';



// @Component({

//   selector: 'app-users',

//   templateUrl: './users.component.html',

//   styleUrls: ['./users.component.sass']

// })

// export class UsersComponent implements OnInit {

