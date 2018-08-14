import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
// export class SearchPipe implements PipeTransform {
//     /*
//      * This Pipe filters for a query string passed as first argument.
//      * If the filter has to look inside a JSON, it accepts also a second
//      * argument that lookup inside the specified JSON node.
//      */
//     transform(value: any, query?: any, lookupJsonNode?: any): any {
//         if (value == null) {
//             return null;
//         }
//         if (query == null) {
//             return value;
//         }
//         query = query.toLowerCase();
//         return value.filter(item => {
//             if (lookupJsonNode == null) {
//                 return item.toLowerCase().includes(query);
//             } else {
//                 return item[lookupJsonNode].toLowerCase().includes(query);
//             }
//         });
//     }
// }

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
