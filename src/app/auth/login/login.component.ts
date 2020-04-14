import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isLoading = false;

  onLogin(form: NgForm){
    console.log(form.value)
  }

}
