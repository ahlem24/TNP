import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  articles=[
    {nom:'T-shirt', id: 'e7f8', image: '../assets/t.jpg', prix:50, disponiblité:true},
    {nom:'pantalon',id:'f1d2',image:'../assets/p.jpg',prix:70,disponiblité:false},
    {nom:'robe',id:'e4s8',image:'../assets/r.jpg',prix:120,disponiblité:true},
    {nom:'bottines',id:'e5d4',image:'../assets/b.jpg',prix:150,disponiblité:true}

  ];
 ajouterArtcile(nom:string,id:string,image:string,prix:number,disponiblité:boolean){
  this.articles.push({nom ,id,image,prix,disponiblité});
 }
 modifier(prix:number){
  return prix-prix*0.2;
 }
 supprimer(){
  this.articles.pop();
  
 }
  constructor() { }
}
