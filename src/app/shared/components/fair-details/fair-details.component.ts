import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from '../../models/fair';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {

  fairId !: string;
  fairObj !: Ifairs;
  constructor(
    private _routes : ActivatedRoute,
    private _fairService : FairsService
  ) { }

  ngOnInit(): void {
    this._routes.params
        .subscribe((params : Params) => {
          this.fairId = params['fairId'];
          this.fairObj = this._fairService.fetchFair(this.fairId)
        })
  }

}
