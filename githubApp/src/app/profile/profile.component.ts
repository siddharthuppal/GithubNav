 import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   user = [];
   repos = [];

  constructor(private _githubService:GithubService) {
  		this._githubService.getUser().subscribe(user => {
  			//console.log(user);
        this.user = user;

  		})

      this._githubService.getRepos().subscribe(repos => {
        //console.log(repos);
        this.repos = repos;

      })
   }


  ngOnInit() {
  }

}
