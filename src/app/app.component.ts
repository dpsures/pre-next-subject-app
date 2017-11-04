import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'learning-system',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private _router : Router){}

  ngOnInit() {
    this._router.navigate(['/learning/dashboard']);
  }
}
