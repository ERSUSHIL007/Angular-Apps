import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ValidationMsgService {
    
    public getValidationMsg(validationId:string):string{
        return this.errorMessages[validationId];
    }
    
    private errorMessages = {
        'userName-required-msg' : "User Name is a required field",
        'userName-maxlength-msg' : "User Name can have maximum 12 characters",

        'password-required-msg' : "Password is a required field",
        'password-pattern-msg' : "Password must contains a alphabet, a special Character and a number",
        'password-maxlength-msg' : "Password can have maximum 12 characters",

        'businessCategory-required-msg' : "Business Category is a required field",

        'product-required-msg' : "Product is a required field",

        'loanAmount-required-msg' : 'Loan Amount is a required field',
        'loanAmount-pattern-msg' : 'Loan Amount accepts numbers only',

        'salesEmpID-required-msg' : ' Sales_Employee_ID is a required field',

        'title-required-msg' : "Title is a required Field",

        'firstName-required-msg' : "First_Name is a required field",

        'confirmPassword-required-msg': "Confirm Password is a required field",
        'confirmPassword-mustMatch-msg': " Passwords must matches",

        'birthDate-required-msg' : "DOB is a required field",

        "email-required-msg" : "Email is a required field",

        'mobileNumber-required-msg' : "Mobile Number is a required field",
        // 'mobileNumber-pattern-msg' : "Mobile Number accepts numbers only",
        // 'mobileNumber-maxlenghth-msg' : "Mobile Number can have maximum 10 digits long",

        'gender-required-msg' : "Gender is a required field",

        'applicantType-required-msg' : "Applicant_Type is a required field"

    }

}