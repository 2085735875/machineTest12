import { Component, OnInit } from '@angular/core';
import { FairsService } from '../../services/fairs.service';
import { Ifairs } from '../../models/fair';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
fairsArray : Ifairs[] = []
  constructor(
    private _fairService : FairsService
  ) { }

  ngOnInit(): void {
    this.fairsArray = this._fairService.fetchAllFairs()
  }

}
