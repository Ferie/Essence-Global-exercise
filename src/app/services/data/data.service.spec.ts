import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Data } from '../../interfaces';

describe('DataService', () => {
    const apiURL = 'assets/data/data.json';
    let service: DataService;
    let httpMock: HttpTestingController;
    // let dataInterface: <Data>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataService]
        });
        // Get the provided services to the TestBed
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(DataService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should compile without errors', () => {
        expect(service).toBeTruthy();
    });

    it('should not immediately connect to the server', () => {
        httpMock.expectNone({});
    });

    it('should send the HTTP GET request to retrieve the products', () => {
        service.getData().subscribe(resp => Array<Data>());
        const req = httpMock.expectOne(apiURL);
        expect(req.request.method).toBe('GET');
        req.flush({});
    });
});
