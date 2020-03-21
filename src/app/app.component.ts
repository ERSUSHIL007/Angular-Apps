import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jsonFormObject: any  ;

  constructor(private http: HttpClient, private commonService: CommonService, private router: Router) { }
 
  ngOnInit() {
    const jsonURL = '../assets/validation.json';
    // console.log('Inside  AppComponent');

    this.http.get(jsonURL).subscribe(resp =>{
      // console.log("Inside AppComponent Response Data is ",resp);
      this.jsonFormObject = resp;
      this.commonService.setData(this.jsonFormObject);
      // console.log(" inside AppComponent JSONFormatData", this.jsonFormObject);
       this.router.navigate(["./login"]);
    });
    // console.log("AppComponent Data Is ",this.data);
  }
  title = 'Angularpoc';
}
