import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'essence-global-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    constructor(public pageTitle: Title) {
        this.pageTitle.setTitle('About - Essence Global');
    }
}
