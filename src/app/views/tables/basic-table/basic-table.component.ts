import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/shared/services/summoners.service';
import { SumMatch } from 'src/app/shared/models/match';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  matchs: SumMatch[];
  user: User;

  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.user._id);
    this.summonerService.getMatchesHistoric(this.user._id).subscribe(data => {
      this.matchs = data;
      console.log(this.matchs);
    });
  }

}
