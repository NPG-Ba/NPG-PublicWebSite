import { Component, OnInit, ElementRef } from '@angular/core';
declare var Isotope: any;

@Component({
  selector: 'app-isotope',
  templateUrl: './isotope.component.html',
  styleUrls: ['./isotope.component.css']
})
export class IsotopeComponent implements OnInit {
  els: any;
  iso: any;
  
  constructor(private hostElement: ElementRef) {
    this.els = hostElement;
  }

  ngOnInit() {
    this.iso = new Isotope(this.els.nativeElement.querySelector('ul'),
      {
        sortBy: 'random'
      }
    );
  }

  filter(field){
    console.log(field);
    this.iso.arrange({
      // item element provided as argument
      filter: '.' + field
    });
  }
}
