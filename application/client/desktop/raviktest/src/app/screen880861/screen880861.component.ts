import { Component, OnInit } from '@angular/core';
import { Screen880861Service } from './screen880861.service.ts';

@Component({
  selector: 'app-screen880861',
  templateUrl: './screen880861.component.html',
  styleUrls: ['./screen880861.component.scss'],
})

export class Screen880861Component implements OnInit {
    public email = {
        name: '',
    }

    constructor (
        private screen880861Service: Screen880861Service,
    ) { }

    ngOnInit() {
    }
}