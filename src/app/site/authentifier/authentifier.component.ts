import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.css']
})
export class AuthentifierComponent implements OnInit {
  mdp:string="ahlem";
  constructor() { }
  onConnect(mdp1){
    if (this.mdp==mdp1){
      alert("vous etes connecter");
    }else alert("mot de passe incorrect");
  }
  ngOnInit() {
  }

}
