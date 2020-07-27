import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/shared/services/summoners.service';
import { Summoner } from 'src/app/shared/models/summoner';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {
  summoners: any;
  newSummoner: Summoner;
  summonerName: string;
  user: any;
  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.summonerService.getByUserId(this.user._id).subscribe(data => {
      this.summoners = data;
    });
  }

  addNewSummoner() {
    this.summonerName !== undefined ? this.summonerService.create({userId: this.user._id, summonerName: this.summonerName}).subscribe((emitData: any) => { console.log(emitData); }) : console.log('Introduce tu nombre de invocador');
  }

  getMatches(userId: any) {
    this.summonerService.getMatches(userId).subscribe((emitData: any) => { console.log(emitData); });
  }

  getLastMatch(userId: any) {
    this.summonerService.setLastMatchInfo(userId).subscribe((emitData: any) => { console.log(emitData); });
  }

  deleteSummoner(id: string) {
    this.summonerService.remove(id).subscribe((emitData: any) => { console.log(emitData); });
  }
}
