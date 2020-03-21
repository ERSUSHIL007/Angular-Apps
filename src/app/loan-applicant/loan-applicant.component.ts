import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-applicant',
  templateUrl: './loan-applicant.component.html',
  styleUrls: ['./loan-applicant.component.css']
})
export class LoanApplicantComponent implements OnInit {

  applicantForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.applicantForm = this.fb.group({
      title: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{9}$'), Validators.maxLength(10)]),
      applicantType: new FormControl('', Validators.required)
    });
  }
// Get Form Controls
get fCtrls() { return this.applicantForm.controls }

  onSubmit() {
    this.submitted = true;
    if(this.applicantForm.invalid) {
      return;
    }
    let title = this.applicantForm.get('title').value;
    let firstName = this.applicantForm.get('firstName').value;
    let middleName = this.applicantForm.get('middleName').value;
    let lastName = this.applicantForm.get('lastName').value;
    let mobileNumber = this.applicantForm.get('mobileNumber').value;
    let applicantType = this.applicantForm.get('applicantType').value;
  }

}
