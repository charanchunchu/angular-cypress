import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  registerform!: FormGroup;
  users:any
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private commonserv:UserService) { }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group(
      {
        email: ['', Validators.required],
        mobile: ['', Validators.required]})

        this.commonserv.getAllUsers().subscribe((data:any)=>{
          this.users=data;
        })

      }
      get f() {
        return this.registerform.controls;
      }
      onSubmit(data:any) {
        this.submitted = true;

        if (this.registerform.invalid) {
          return;
        }
        if (this.registerform.valid) {
          let userFind = this.users.find((item: any) => item.email === data.email && item.mobile === data.mobile);
          if (userFind && Object.values(userFind).length > 0) {
            alert("user is valid");
            localStorage.setItem("isLoggedIn", "true");
            this.router.navigate(['home']);
          } else {
            alert("user is invalid");
          }
         }


}
      }


