import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
    selector: 'app-case',
    templateUrl: './case.component.html',
    styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

    constructor(
        public router: Router
    ) {

    }

    ngOnInit() {

    }
}
