import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'maxlenghtImage'
})
export class MaxlenghtImagePipe implements PipeTransform {

    transform(str: string, args: number): string {
        if (str && str.length > args) {
            return str.slice(0, args) + '...' + str.slice(-3);
        } else {
            return str;
        }
    }

}
