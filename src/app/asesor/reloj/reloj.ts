import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'reloj',
    styleUrls: ['./reloj.scss']
})
export class Reloj implements OnInit, OnDestroy {
    static startTime: number;
    timeLapsed;
    intervalRef;


    ngOnInit() {
        if (!Reloj.startTime) {
            Reloj.startTime = new Date().getTime();
        }
        this.start();
    }

    ngOnDestroy() {
        clearInterval(this.intervalRef);
    }

    start() {
        this.intervalRef = setInterval(() => {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = now - Reloj.startTime;

            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
            if (minutes.length == 1) {
                minutes = "0" + minutes;
            }

            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
            if (seconds.length == 1) {
                seconds = "0" + seconds;
            }

            this.timeLapsed = minutes + ":" + seconds;
        }, 1000);
    }
}
