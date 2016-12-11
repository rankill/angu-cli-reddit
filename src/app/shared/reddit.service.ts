import { Injectable }    from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';

// Classes
import { Post } from './../classes/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RedditService {
  latestPosts: Post[];
  private _postsRedditUrl: string = 'https://www.reddit.com/r/news/.json';
  private _postsRedditSearchUrl: string = 'https://www.reddit.com/search.json?q=';


  private handleError(_error: any): Promise<any> {
    console.error('An error occurred', _error); // for demo purposes only
    return Promise.reject(_error.message || _error);
  }

  constructor(private _http: Http) { }

  getLatestPosts(_quantity:any = null): Promise<Post[]> {

    let tempUrl = this._postsRedditUrl;

    if (_quantity) {
      console.warn('Pase cantidad');
      tempUrl = tempUrl + `?limit=${_quantity}`;
    }


    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(tempUrl)
      .toPromise()
      .then(_response => _response.json().data.children.map((_children: any) => _children.data as Post[])
      )
      .catch(this.handleError);
  }

  getPostDetails(_id: any): Promise<Post> {

    console.warn('Este es el parametro', _id);

    const currentUrl = `${this._postsRedditSearchUrl}${_id}`;
    return this._http.get(currentUrl)
      .toPromise()
      .then(_response => _response.json().data.children.map((_children: any) => _children.data as Post))
      .catch(this.handleError);
  }

  saveLatesPost(_posts: Post[] = null): void {
    this.latestPosts = _posts;
    console.warn('Alamaceno los posts para una busqueda futura', this.latestPosts);
  }
}
