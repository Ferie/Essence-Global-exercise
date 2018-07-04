import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(arr: any, args: any): any {
        return arr.sort((a, b) => {
            if (a.p1 > b.p1 || a.p2 < b.p2) {
                return 1;
            }
            if (a.p1 < b.p1 || a.p2 > b.p2) {
                return -1;
            }
            return 0;
        });
    }
}


// export class OrderByPipe implements PipeTransform {
//     static _orderByComparator(a: any, b: any): number {
//         if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
//             // Isn't a number so lowercase the string to properly compare
//             if (a.toLowerCase() < b.toLowerCase()) {
//                 return -1;
//             }
//             if (a.toLowerCase() > b.toLowerCase()) {
//                 return 1;
//             }
//         } else {
//             // Parse strings as numbers to compare properly
//             if (parseFloat(a) < parseFloat(b)) {
//                 return -1;
//             }
//             if (parseFloat(a) > parseFloat(b)) {
//                 return 1;
//             }
//         }
//         return 0; // Equal each other
//     }

//     transform(input: any, [config = '+']): any {
//         if (!Array.isArray(input)) {
//             return input;
//         }
//         if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
//             const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
//             const desc = propertyToCheck.substr(0, 1) === '-';
//             // Basic array
//             if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
//                 return !desc ? input.sort() : input.sort().reverse();
//             } else {
//                 const property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
//                     ? propertyToCheck.substr(1)
//                     : propertyToCheck;

//                 return input.sort(function (a: any, b: any) {
//                     return !desc
//                         ? OrderByPipe._orderByComparator(a[property], b[property])
//                         : -OrderByPipe._orderByComparator(a[property], b[property]);
//                 });
//             }
//         } else {
//             // Loop over property of the array in order and sort
//             return input.sort(function (a: any, b: any) {
//                 for (let i = 0; i < config.length; i++) {
//                     const desc = config[i].substr(0, 1) === '-';
//                     const property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
//                         ? config[i].substr(1)
//                         : config[i];

//                     const comparison = !desc
//                         ? OrderByPipe._orderByComparator(a[property], b[property])
//                         : -OrderByPipe._orderByComparator(a[property], b[property]);

//                     // Don't return 0 yet in case of needing to sort by next property
//                     if (comparison !== 0) {
//                         return comparison;
//                     }
//                 }
//                 return 0; // Equal each other
//             });
//         }
//     }
// }


// export class OrderByPipe implements PipeTransform {
//     transform(items: any[], orderBy: string): any {
//         console.log('orderBy', orderBy);
//         if (!items) {
//             return false;
//         } else {
//             return items.sort((a, b) => {
//                 return b[orderBy] - a[orderBy];
//             });
//         }
//     }
// }


// export class ArraySortPipe implements PipeTransform {
//     transform(array: any[], field?: string): any[] {
//         array.sort((a: any, b: any) => {
//             if (a[field] < b[field]) {
//                 return -1;
//             } else if (a[field] > b[field]) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         });
//         return array;
//     }
// }
