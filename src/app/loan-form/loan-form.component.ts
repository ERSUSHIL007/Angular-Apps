import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
  loanForm: FormGroup;
  // submitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }
 
  ngOnInit() {
    this.loanForm = this.fb.group ({
      businessCategory : new FormControl('',Validators.required),
      product : new FormControl('',Validators.required),
      loanAmount : new FormControl('',[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      salesEmpID : new FormControl('',Validators.required)
    });
  }

  // convenience getter for easy access to form fields
  get fCtrls() { return this.loanForm.controls; }

  saveLoanInfo() {
    // this.submitted = true;

    //Stop here if form fields is Invalid
    if(this.loanForm.invalid) {
      return;
    }
    let businessCategory = this.loanForm.get('businessCategory').value;
    let product = this.loanForm.get('product').value;
    let loanAmount = this.loanForm.get('loanAmount').value;
    let salesEmpID = this.loanForm.get('salesEmpID').value;

    alert("Loan Application Submitted!");
    this.router.navigate(['/applicantForm']);
  }
  
}
