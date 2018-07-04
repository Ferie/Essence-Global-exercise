import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NavigationComponent } from './navigation.component';

const menuList = [
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

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NavigationComponent],
            providers: []
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(NavigationComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // Detect the changes in the component
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

//     it('should insert an `active` class in the DOM to the element just clicked', () => {
//         const links = fixture.debugElement.queryAll(By.css('a'));
//         expect(links.length).toBeGreaterThan(0);
//         const link = links[0].nativeElement;
//         link.click();
//         fixture.detectChanges();
//         expect(link.className).toContain('active');
//     });
});
