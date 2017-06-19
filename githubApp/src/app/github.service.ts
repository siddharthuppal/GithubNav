import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
	private username:string;
  private client_id = '355b26012b97173878c7';
  private client_secret = 'e939be346166a58f39276afe89b9de6d0a40586a';

  constructor(private _http:Http) { 
  		console.log('Github Service Ready');
  		this.username = 'siddharthuppal';
  }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    
     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

  updateUser(username:string){
      this.username = username;
  }

}
