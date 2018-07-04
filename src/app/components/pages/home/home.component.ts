import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { SearchPipe } from '../../../pipes';
import { DataService } from '../../../services';
import { Data } from '../../../interfaces';

@Component({
    selector: 'essence-global-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private data: any;
    public loading: boolean;
    public serverError: boolean;
    private orderBy = 'code';

    constructor(
        private dataService: DataService,
        public pageTitle: Title
    ) {
        this.pageTitle.setTitle('Home Page - Essence Global');
    }

    ngOnInit() {
        if (!this.loading) {
            this.loading = true;
            this.dataService.getData().subscribe(
                (response: any) => {
                    // Request successful
                    // Pass the response to the template
                    if (response) {
                        this.data = response;
                    }
                    // Hide Error
                    this.serverError = false;
                    // Remove loader
                    this.loading = false;
                },
                (err: HttpErrorResponse) => {
                    // Request error
                    // Show Error
                    this.serverError = true;
                    // Remove loader
                    this.loading = false;
                }
            );
        }
    }
}
