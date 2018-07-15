import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Repo } from '../../model/Repo';


@Component({
  selector: 'app-search',
  providers: [ SearchService ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  languages: string[] = [];
  searchForm: FormGroup;
  repoRes$: Repo;

  constructor(private fb: FormBuilder,
              private searchdata: SearchService) {
   }

  ngOnInit() {
    this.languages = ['java', 'javascript', 'java', 'php', 'python', 'typescript', 'ruby', 'scala'];

    this.searchForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      keyword: new FormControl('', Validators.required),
      language: new FormControl()
    });

  }

  public onSubmit() {
    let params = this.searchForm.get('keyword').value + '+language:' + this.searchForm.get('language').value;
    console.log(params);
    this.searchdata.findRepos(params)
      .subscribe(repoRes => this.repoRes$ = repoRes['items']);
    
    //Todo: validation logics
    if(this.searchForm.valid) {
    }
  }


}
