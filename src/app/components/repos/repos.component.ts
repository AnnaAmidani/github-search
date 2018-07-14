import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { Repo } from '../model/Repo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos$: Repo;

  constructor(private searchdata: SearchService) { }

  ngOnInit() {
    this.searchdata.getRepos().subscribe(
      data => this.repos$ = data['items']
    );
  }

}
