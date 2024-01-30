import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {

  private werkzaamhedenUrl = 'api/werkzaamheden';

  constructor(private http: HttpClient) { }

  getWerkzaamheden(): Observable<Card[]> {
    const result = this.http.get<Card[]>(this.werkzaamhedenUrl);

    return result;
  }

  ngOnInit(): void {
  }
}
