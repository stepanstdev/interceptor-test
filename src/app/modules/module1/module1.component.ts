import { Component, OnInit } from '@angular/core';
import { Module1Service } from './services/module1.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  constructor(private readonly service: Module1Service) { }

  ngOnInit(): void {
    this.service.makeRequest().subscribe(res => {
      console.log('RES1', res);
    });
  }

}
