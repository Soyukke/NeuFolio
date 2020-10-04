import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'neu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title;
  @Input() content;
  constructor() { }

  ngOnInit(): void {
  }

}
