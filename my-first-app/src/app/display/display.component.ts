import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  cliques = [];
  botaoClicado = false;
  contador = 0;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  adicionarClick(){
    this.cliques.push(this.contador);
    if (this.contador % 2 == 0){
      this.botaoClicado = true;
      this.contador ++;
    } else{
      this.contador ++;
    }
  }
}
