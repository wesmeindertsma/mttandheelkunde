import {Component, OnInit} from '@angular/core';
import {CardService} from "./cards/card.service";
import {Card} from "./cards/card";

@Component({
  selector: 'app-wat-ik-doe',
  templateUrl: './wat-ik-doe.component.html',
  styleUrl: './wat-ik-doe.component.css'
})
export class WatIkDoeComponent implements OnInit{
  werkzaamheden?: Card[];

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.getWerkzaamheden();
  }

  private getWerkzaamheden(): void {
    const result = this.cardService.getWerkzaamheden();

    result.subscribe({
      next: (cards: Card[]) =>  {
        this.werkzaamheden = cards;
      },
      error: (err: Error) => {
        // do something with an error...
      },
      complete: () => {
        // do something when the observer completes, often not needed....
      }
    });
  }
}
