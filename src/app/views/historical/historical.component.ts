import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/shared/services/summoners.service';
import { SumMatch } from 'src/app/shared/models/match';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {
  matchs: SumMatch[];
  user: User;

  constructor(private summonerService: SummonerService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.summonerService.getMatchesHistoric(this.user._id).subscribe(data => {
      this.matchs = data;
      this.matchs.sort((a, b) => b.data?.info.game_datetime  - a.data?.info.game_datetime);
      console.log(this.matchs);
    });
  }

  navigateToMatch(entrie: string) {
    console.log(entrie);
    this.router.navigate(['/historical/' + entrie]);
  }
}
