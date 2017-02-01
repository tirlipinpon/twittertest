import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  }    from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { userData, mock, userDataError } from '../mocks/user-data.mock';

@Injectable()
export class SaveService {
    constructor(private http: Http) {  }

     private heroesUrl = 'https://api.twitter.com/1.1/followers/ids.json?screen_name=';  // URL to web API
     private token ="Bearer AAAAAAAAAAAAAAAAAAAAANyyywAAAAAAe8ehULnd1pNJiVags0KXlr%2BIKGI%3DOYoEegQqHwscDUXGwDkEdrjDDtoSAOFtkfjLbMgGTtj1AJlWTx";


    getDataByName(name: string): Observable<any> {

        // let authToken = localStorage.getItem('auth_token');
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', `Bearer `+this.token);

        let options = new RequestOptions({ headers: headers });

        if(userData[0].id) {
            if(name ==="s") {
                return Observable.of(userDataError.errors[0]);
            }
            return Observable.of(userData[0].followers_count);
        }else{
            return null;
        }

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