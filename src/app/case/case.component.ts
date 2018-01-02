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
        $('.nbs-flexisel-ul').flexisel({
            visibleItems: 3, // 一行显数的个数
            animationSpeed: 200, // 动画时间
            autoPlay: true, // 自动播放
            autoPlaySpeed: 3000, // 播放间隔时间
            pauseOnHover: true, // 鼠标悬浮是否停止播放
            clone: true, // 是否使用克隆
            enableResponsiveBreakpoints: true, // 是否开启响应式
            responsiveBreakpoints: {
                portrait: { // 项目名，可随意命名
                    changePoint: 480, // 屏幕最大像素，意思为当屏幕最大像素为480时，只显示一个Item，即例子只显示一张图片。
                    visibleItems: 1 // 只显示一个Item，下面的雷同
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        });

        $('.nbs-flexisel-ul li').bind('click', (e) => {
            if (e.currentTarget.id === 'case_4') {
                this.router.navigateByUrl('/sanet-case');
            }
        });
    }
}
