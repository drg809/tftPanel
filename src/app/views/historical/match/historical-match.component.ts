import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummonerService } from 'src/app/shared/services/summoners.service';

@Component({
  selector: 'app-historical-match',
  templateUrl: './historical-match.component.html',
  styleUrls: ['./historical-match.component.scss']
})
export class HistoricalMatchComponent implements OnInit {
  entrieId: string | null;
  constructor(private route: ActivatedRoute,
              private summonerService: SummonerService) { }

  ngOnInit() {
    this.entrieId = this.route.snapshot.paramMap.get('id');
    this.summonerService.getMatchInfo(this.entrieId).subscribe(data => {
      console.log(data);
    });
  }

}
