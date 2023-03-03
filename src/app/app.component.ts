import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  public isOpen: boolean = false;
  public isMobile: boolean = false;

  ngOnInit(): void {
    const userAgent = navigator.userAgent;

    if (/iPhone/.test(userAgent)) {
      this.isMobile = true;
    }
  }

  openGift(): void {
    this.isOpen = true;
    const audio = new Audio('assets/super3.mp3');
    audio.play();
  }
}
