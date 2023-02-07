import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {
  pictureCover: string = ""
  authorPhoto: string = ""
  contentAuthor: string = ""
  contentTitle: string = ""
  contentSubtitle: string | undefined = ""
  contentDate: Date | string = ""
  contentDescription: string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
        )    
      this.setValuesToComponent(this.id)
    }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.pictureCover = result.pictureCover
    this.authorPhoto = result.authorPhoto
    this.contentAuthor = result.author
    this.contentTitle = result.title
    this.contentSubtitle = result.subtitle
    this.contentDate = result.date
    this.contentDescription = result.description
  }

}