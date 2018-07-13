import { Component, OnInit } from '@angular/core';

import { SearchdataService } from '../../services/searchdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos$: Object;

  constructor(private searchdata: SearchdataService) { }

  ngOnInit() {
    this.searchdata.getRepos().subscribe(
      data => this.repos$ = data['items']
    );
  }

}
