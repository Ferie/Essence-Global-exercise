import { Component, Input } from '@angular/core';

@Component({
    selector: 'essence-global-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @Input() private horizontal: boolean;
    @Input() private icon: boolean;
    @Input() public navigation: Array<Object>;
    public isLoggedIn = !!sessionStorage.getItem('session_data');
    private selectedIndex: number;

    /**
     * Set the class `active` to the current menu element.
     * If the element is an external link with http in front it redirect the user there.
     */
    setActive(link: string, id: number) {
        this.selectedIndex = id;
        // TRICK OR TREAT: If external link, go directly there
        if (link.indexOf('http') === 0) {
            window.location.href = link;
        }
    }
}
