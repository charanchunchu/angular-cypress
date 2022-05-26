import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;

  registrationform!: FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registrationform = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.
            pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ],],
        mobile: ['', Validators.compose([Validators.required, Validators.pattern("[[6-9]\\d{9}")])],
        city: ['', Validators.required],
        gender: ['', Validators.required],
        Technologies: ['', Validators.required],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)])],
        repassword: ['', Validators.required]
      },
      {
        validators: this.MustMatch('password', 'repassword')
      }
    );
  }

  checkCheckBoxvalue(event: any) {
    console.log(event, event.target.checked, event.target.value)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationform.controls;
  }
  MustMatch(ControlName: string, matchingControlName: string) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[ControlName];
      const MatchingControl = FormGroup.controls[matchingControlName];
      if (MatchingControl.errors && !MatchingControl.errors['MustMatch']) {
        return
      }
      if (control.value !== MatchingControl.value) {
        MatchingControl.setErrors({ MustMatch: true });
      }
      else {
        MatchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationform.invalid) {
      return;
    }
    if (this.registrationform.valid) {

      this.router.navigate(['login']);
    }

    this.registrationform.reset();

  }
}
