import {Injectable} from '@angular/core';
import {Http, Response, Request} from '@angular/http';

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-82a2d.firebaseio.com/';

    constructor(private http: Http) {

    }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
}