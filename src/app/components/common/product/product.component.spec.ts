import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

import { SearchPipe, OrderByPipe } from '../../../pipes';

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

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProductComponent,
                SearchPipe,
                OrderByPipe
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(ProductComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // Detect the changes in the component
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get products from the HomeComponent', () => {
        component.products = mockedProducts;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
