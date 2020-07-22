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
    console.log(1);
    const summoner: Summoner = {userId: '5f15a1daf7bfa346b272c89e', summonerName: this.summoner};
    console.log(summoner);
    this.summoner !== undefined ? this.summonerService.create(summoner).subscribe((emitData: any) => { console.log(emitData); }) : console.log('Introduce tu nombre de invocador');

  }
}
