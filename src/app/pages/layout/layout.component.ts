import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    value: any;

    constructor() {
    }


    ngOnInit() {

    }

}
