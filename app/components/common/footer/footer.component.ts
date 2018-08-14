import { Component, Input } from '@angular/core';

@Component({
    selector: 'essence-global-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    @Input() public socials: Array<Object>;
    @Input() public contactEmails: Array<Object>;
}
