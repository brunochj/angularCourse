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

  userName = '';
  userNameCriado = '';
  
  constructor() { 
  }
  
  ngOnInit(): void {
  }

  onCreateUsername(){
    this.userNameCriado = 'o novo usuário é ' + this.userName;
  }

  onUpdateServerName($event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    console.log(event)
  }
}
