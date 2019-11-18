import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() nomArticle:String;
  @Input() image:String;
  @Input() Id:String;
  @Input() prix:number;
  
  onDetails(){
    if(this.nomArticle=='T-shirt'){
      console.log (this.Id);
    }
  }
  constructor() { }

  
  ngOnInit() {
  }

}
