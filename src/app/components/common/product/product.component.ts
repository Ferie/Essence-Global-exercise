import { Component, Input } from '@angular/core';

import { SearchPipe, OrderByPipe } from '../../../pipes';

@Component({
    selector: 'essence-global-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() public products: Array<Object>;
    @Input() public queryString: string;
    private orderBy: string;

    constructor() {
        this.orderBy = 'code';
    }
}
