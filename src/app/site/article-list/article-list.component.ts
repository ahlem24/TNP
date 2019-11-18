import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor() { }
  articles=[
    {nom:'T-shirt', id: 'e7f8', image: '../assets/t.jpg', prix:50, disponiblité:true,date:new Date(1980,4,15)},
    {nom:'pantalon',id:'f1d2',image:'../assets/p.jpg',prix:70,disponiblité:false,date:new Date(1980,4,15)},
    {nom:'robe',id:'e4s8',image:'../assets/r.jpg',prix:120,disponiblité:true,date:new Date(1980,4,15)},
    {nom:'bottines',id:'e5d4',image:'../assets/b.jpg',prix:150,disponiblité:true,date:new Date(1980,4,15)}

  ];
  ngOnInit() {
  }

}
