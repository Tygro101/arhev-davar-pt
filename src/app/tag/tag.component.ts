import { Component, OnInit, Input, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { TagDataHolder } from '../models/tag-data-holder';

@Component({
  selector: 'tag-component',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit, AfterViewInit {
  @ViewChild('text') tagComponent: ElementRef;
  @Input() isSubTag: boolean = false;
  @Input() tagDataHolder: TagDataHolder;
  subTags: Array<TagDataHolder>;
  constructor(private renderer: Renderer2, private element: ElementRef) { 

  }
  
  ngAfterViewInit(){
    if(this.isSubTag)
    this.renderer.setStyle(this.tagComponent.nativeElement, 'padding-left', '30px'); 
  }

  ngOnInit() {
  }
  
  private addPadding(tagComponent: TagComponent): void{
    if(this.isSubTag) {
      console.log(this.element);
      //this.renderer.setStyle(this.tagComponent.nativeElement, 'padding-left', '45px');
    }
  }

}
