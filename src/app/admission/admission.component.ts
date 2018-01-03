import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
    selector: 'app-admission',
    templateUrl: './admission.component.html',
    styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

    constructor(
        public router: Router
    ) {

    }

    ngOnInit() {

    }
}
