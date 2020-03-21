import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor( private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName : new FormControl('', [Validators.required]),
      lastName :  new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      confirmPassword : new FormControl('', [Validators.required]),
      birthDate : new FormControl('', [Validators.required]),
      mobileNumber : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

    // convenience getter for easy access to form fields
    get fCtrls() { return this.registerForm.controls; }

    onSubmit() {
      //Stop here if form fields is Invalid
    if(this.registerForm.invalid) {
      return;
    }
    let firstName = this.registerForm.get('firstName').value;
    let lastName = this.registerForm.get('lastName').value;
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let confirmPassword = this.registerForm.get('confirmPassword').value;
    let birthDate = this.registerForm.get('birthDate').value;
    let mobileNumber = this.registerForm.get('mobileNumber').value;
    let gender = this.registerForm.get('gender').value;

    alert("Registration Form Submitted!");
    this.router.navigate(['/login']);
  }

}


