import { Component, ViewChild, AfterViewInit, OnInit, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2 ){
    
  }
  @ViewChild('container') component: any;
  ngOnInit(): void {
    var height = `${window.innerHeight}px`;
    this.renderer.setStyle(this.component.nativeElement, "height", height) ;;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var height = `${event.target.innerHeight}px`;
    this.renderer.setStyle(this.component.nativeElement, "height", height) ;
  }
}
