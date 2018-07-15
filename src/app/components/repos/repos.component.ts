import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { Repo } from '../../model/Repo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repos',
  providers: [ SearchService ],
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos$: Repo;

  constructor(private searchdata: SearchService) { }

  ngOnInit() {
    this.getTrendyRepos();
  }

  getTrendyRepos(): void {
    this.searchdata.findRepos('trendy+language:java')
      .subscribe(repos => this.repos$ = repos['items']);
  }


}
