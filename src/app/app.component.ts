import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/merge';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    collapse: boolean;

    constructor(
        public elementRef: ElementRef,
        public renderer: Renderer,
        public router: Router,
        public activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.collapse = false;
        if (window.innerWidth <= 768) {
            this.collapse = true;
        }
        console.log(window.location.href);

    }

    toggle() {
        this.collapse = !this.collapse;
    }

    goTo(id) {
        let scrollTo: any = $(`#${id}`);
        let html = scrollTo.html();
        if (typeof (html) === 'undefined') {
            this.toHome(id);
            return;
        }
        if (typeof (scrollTo.offset().top) !== 'undefined') {
            $('html,body').animate({
                scrollTop: (scrollTo.offset().top - 80) + 'px'
            }, 800);
        }
    }

    toHome(id) {
        this.router.navigateByUrl('/home');
        setTimeout(() => {
            this.goTo(id);
        }, 200);
    }

}
