import {
    async,
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/of';

import {
    HomeComponent,
    ProductComponent,
    OverlayComponent
} from '../../../components';

import { SearchPipe, OrderByPipe } from '../../../pipes';
import { DataService } from '../../../services';
import { Data } from '../../../interfaces';

const mockedProducts = [
    {
        'code': 'HTC-DESIREC-WHI-0',
        'make': 'HTC',
        'model': 'Desire C',
        'name': 'HTC Desire C White',
        'type': 'paym',
        'tar_code': 'NC24-1000-250-SM',
        'tar_name': 'Â£10 Smartphone tariff 24 month contract',
        'tar_minutes': '250',
        'tar_sms': '5000',
        'tar_data': '500'
    },
    {
        'code': 'HTC-8S-XXX-0',
        'make': 'HTC',
        'model': 'Windows Phone 8S',
        'name': 'HTC 8S',
        'type': 'paym',
        'tar_code': 'FC24-2250-750-M1',
        'tar_name': 'Â£22.50 Smartphone tariff 24 month contract',
        'tar_minutes': '750',
        'tar_sms': '5000',
        'tar_data': '1024'
    }
];

xdescribe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let service: DataService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                ProductComponent,
                OverlayComponent,
                SearchPipe,
                OrderByPipe
            ],
            imports: [
                ReactiveFormsModule,
                FormsModule,
                HttpClientTestingModule
            ],
            providers: [DataService]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(HomeComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // Detect the changes in the component
        fixture.detectChanges();
        // Get the provided services to the TestBed
        service = TestBed.get(DataService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('the page title should be "Home Page - Essence Global"', () => {
        const title = component.pageTitle.getTitle();
        expect(title).toEqual('Home Page - Essence Global');
    });

    it('should trigger the service that retrieve the products and manage the server response', fakeAsync(() => {
        spyOn(service, 'getData').and.returnValue(Observable.of(mockedProducts));
        component.ngOnInit();
        tick();
        fixture.detectChanges();
        expect(component.loading).toBeTruthy();
        expect(service.getData).toHaveBeenCalled();
    }));

    it('should display the error message if there is a server error', fakeAsync(() => {
        const errStub = {
            status: 500,
            statusText: 'server error',
            message: 'server error occurred'
        };
        spyOn(service, 'getData').and.returnValue(Observable.throw(errStub));
        component.ngOnInit();
        tick();
        expect(service.getData).toHaveBeenCalled();
        expect(component.serverError).toBeTruthy();
    }));
});
