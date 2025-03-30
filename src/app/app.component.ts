import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'webshop';
  screenSize: string = 'Asztali nézet';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,   // Mobil
      Breakpoints.Tablet,    // Tablet
      Breakpoints.Web        // Asztali
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.Handset]) {
          this.screenSize = 'Mobil nézet';
        } else if (result.breakpoints[Breakpoints.Tablet]) {
          this.screenSize = 'Tablet nézet';
        } else if (result.breakpoints[Breakpoints.Web]) {
          this.screenSize = 'Asztali nézet';
        }
      }
      console.log('Aktuális nézet:', this.screenSize);
    });
  }
}
