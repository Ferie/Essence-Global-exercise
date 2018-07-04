import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';

describe('OverlayComponent', () => {
    let component: OverlayComponent;
    let fixture: ComponentFixture<OverlayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverlayComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(OverlayComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // Detect the changes in the component
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
