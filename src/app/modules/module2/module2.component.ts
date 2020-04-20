import { Component, OnInit } from '@angular/core';
import { Module2Service } from './services/module2.service';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {

  constructor(private readonly service: Module2Service) { }

  ngOnInit(): void {
    this.service.makeRequest().subscribe(res => {
      console.log('RES2:', res);
    })
  }

}
