import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('essence-global-root h1')).getText();
    }
}
