import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [NgbCarouselConfig]
})
export class LayoutComponent implements OnInit {



  ngOnInit() {
  }
  closeResult: string;

  images =[
            {src:'assets/images/demo/slider/photo5.jpg',title:'BUILD YOUR WEB AND MOBILE APPS',des:'NAPA Global Helps You Realize Your Vision'},
            {src:'assets/images/demo/slider/a2.jpg',title:'BUILD YOUR WEB AND MOBILE APPS',des:'NAPA Global Helps You Realize Your Vision'},
            {src:'assets/images/demo/slider/computer-drink-iphone-586339.jpg',title:'BUILD YOUR WEB AND MOBILE APPS',des:'NAPA Global Helps You Realize Your Vision'}
          ];


  constructor(private modalService: NgbModal,config: NgbCarouselConfig) 
  {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators= false;
    config.showNavigationArrows= false;
  }

  open(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
