import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  // Create the instace of FormGroup
  loginForm: FormGroup;

  show: boolean = false;
  jsonFormObject: any;
  label_1: string;
  label_2: string;

//Create the Login Data
  loginFormData: {
    userName: string,
    password: string
  }

  constructor( private router: Router, private fb: FormBuilder,
               private commonService: CommonService,
               private http: HttpClient ) { }

  ngOnInit() {
    this.loginFormData = {
      userName: '',
      password: ''
    }

    // Initialize Form Before CommonService
    this.initForm();
    // Using CommonService
    this.commonService.getData().subscribe(res => {
      this.jsonFormObject = res;

      this.label_1 = this.jsonFormObject[0].userName.label;
      this.label_2 = this.jsonFormObject[0].password.label;

      // Initialize the Form Validations
      this.setFormValidation();
    });
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  setFormValidation() {
    // console.log('form controls', this.loginForm.controls);
    const dataArray = [];
    Object.keys(this.jsonFormObject[0]).forEach(data => {
      dataArray.push(data)
      return dataArray;
    });
    // console.log('Json Data Array', dataArray)
    dataArray.forEach(key => {
      this.jsonFormObject.forEach( element => {
        if (element.required[key] === true) {
          //Set Validators to each Input Controls
          // console.log('elemnt key', element[key]);
          this.loginForm.get(key).setValidators([ Validators[element[key].mandatory],
                                                  Validators.maxLength(element[key].lengthString), 
                                                  Validators.pattern(element[key].regex) ]);
        }
      });
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return
    }

    this.loginFormData.userName = this.loginForm.value['userName'];
    this.loginFormData.password = this.loginForm.value['password'];

    if (this.loginFormData.userName === 'appiyo' && this.loginFormData.password === 'appiyo@123') {
      alert('SignIn Validation Successfully');
      this.router.navigate(["./loanform"]);
    }
    else {
      this.show = true;
    }
    // console.log(this.loginFormData);
  }
    //If user touched the Input controls without fill any value the required error msg shows
  updateChange(change) {
    //Get the all input control values
    const ctrlValue = change.target.value;
    // console.log("ControlName",change);
    //Get the all Input Control Name
    const inputControlName = change.target.name;
    //If Input Control Values were empty
    if (ctrlValue === '') {
      this.loginForm.get(inputControlName).setValidators([Validators.required]);
      this.loginForm.get(inputControlName).updateValueAndValidity();
    }
  }

}
