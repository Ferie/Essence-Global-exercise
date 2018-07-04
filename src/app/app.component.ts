import { Component } from '@angular/core';

@Component({
    selector: 'essence-global-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public navigationArray: Array<Object>;
    private socials: Array<Object>;
    private contactEmails: Array<Object>;

    /**
     * Pass the navigation array to the component.
     */
    constructor() {
        // Those information should be taken via proper services
        this.navigationArray = [
            {
                index: 1,
                menuLabel: 'Home',
                link: '/home'
            },
            {
                index: 2,
                menuLabel: 'About',
                link: '/about'
            }
        ];

        this.socials = [
            {
                name: 'Twitter',
                link: 'https://twitter.com/essenceglobal'
            },
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/essenceglobal'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/essence_global/'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/company/essence/'
            },
            {
                name: 'YouTube',
                link: 'https://www.youtube.com/c/Essenceglobal'
            }
        ];

        this.contactEmails = [
            {
                name: 'Press',
                email: 'press@essenceglobal.com'
            },
            {
                name: 'Careers',
                email: 'work@essenceglobal.com'
            },
            {
                name: 'New Business',
                email: 'newclients@essenceglobal.com'
            },
            {
                name: 'General',
                email: 'hello@essenceglobal.com'
            }
        ];
    }
}
