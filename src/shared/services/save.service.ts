import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  }    from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class SaveService {
    constructor(private http: Http) {  }

     private heroesUrl = 'https://api.twitter.com/1.1/followers/ids.json?screen_name=';  // URL to web API
     private token ="Bearer AAAAAAAAAAAAAAAAAAAAANyyywAAAAAAe8ehULnd1pNJiVags0KXlr%2BIKGI%3DOYoEegQqHwscDUXGwDkEdrjDDtoSAOFtkfjLbMgGTtj1AJlWTx";

private mock= {
  "ids": [
    3046359254,
    661723,
    1854996806,
    269739291,
    220752898,
    2887311059,
    17508137,
    2405989642,
    1265498600,
    2161657372,
    331544473,
    28137557,
    301143164,
    325973068,
    148145535,
    233477736
  ],
  "next_cursor": 0,
  "next_cursor_str": "0",
  "previous_cursor": 0,
  "previous_cursor_str": "0"
};
    getDataByName(name: string): Observable<any[]> {

        // let authToken = localStorage.getItem('auth_token');
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', `Bearer `+this.token);

        let options = new RequestOptions({ headers: headers });

        return Observable.of(this.mock.ids);

        // return this.http.get(this.heroesUrl+this.name, options)
        //             .map(this.extractData)
        //             .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}