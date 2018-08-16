import { Component, Input } from '@angular/core';

import { Data } from '../../../interfaces';

import { SearchPipe, OrderByPipe } from '../../../pipes';

@Component({
    selector: 'essence-global-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() public products: Array<Data>;
    @Input() public queryString: string;
    public orderBy: string;

    constructor() {
        this.orderBy = 'code';
    }
}
