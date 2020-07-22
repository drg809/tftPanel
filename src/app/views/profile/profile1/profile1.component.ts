import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/shared/services/summoners.service';
import { Summoner } from 'src/app/shared/models/summoner';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {
  summoner: string;
  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
  }

  newSummoner() {
    const summoner: Summoner = {userId: '5f15a1daf7bfa346b272c89e', summonerName: this.summoner};
    this.summoner != '' ? this.summonerService.create(summoner) : alert('Introduce tu nombre de invocador');

  }
}
