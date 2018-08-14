import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data } from '../../interfaces';

@Injectable()
export class DataService {
    private apiURL = 'assets/data/data.json';

    constructor(private http: HttpClient) {}

    /**
     * Gets the data.
     */
    getData() {
        // Call the endpoint to retrieve the data
        return this.http.get<Data>(this.apiURL);
    }
}
