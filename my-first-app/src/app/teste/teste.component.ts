import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  // styleUrls: ['./teste.component.css']
  styles: [`
    p{
      color: #f23151
    }
  `]
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
