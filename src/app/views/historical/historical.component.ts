import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/shared/services/summoners.service';
import { SumMatch } from 'src/app/shared/models/match';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {
  matchs: SumMatch[];
  user: User;

  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.user._id);
    this.summonerService.getMatchesHistoric(this.user._id).subscribe(data => {
      this.matchs = data;
      this.matchs.sort((a, b) => b.data?.info.game_datetime  - a.data?.info.game_datetime);
      console.log(this.matchs);
    });
  }
}
