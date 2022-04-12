import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  gotoQuest(){
    this._router.navigate(['quiz'])
  }

  gotoResults(){
    this._router.navigate(['result'])
  }

  gotoAbout(){
    this._router.navigate(['about'])
  }

}
