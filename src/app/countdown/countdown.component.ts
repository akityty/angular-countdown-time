import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  @Input()
  seconds = 11;
  remainingTime: number;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start countdown`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval
    (
      () => {
        this.remainingTime -= 1;
        if (this.remainingTime === 0) {
          this.message = 'Blast of';
          this.clearTimer();
        } else {
          this.message = `T-${this.remainingTime} seconds and counting`;
        }
      }, 1000
    );
  }
}
