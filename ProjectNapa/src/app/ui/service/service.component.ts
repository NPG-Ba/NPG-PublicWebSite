import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service = [
              {name:'Web Apps Development',title:'Our reponsive web site designs will make you look good in every screen. Ecommerce, CMS, corporate, personal or custom web application. ',icon:'assets/images/symbol/Symbol WD.svg'},
              {name:'Mobile Apps Development',title:'IOS and Android app development. Why pick a platform? Get your native or HTML5 apps to support all the major mobile platforms.',icon:'assets/images/symbol/Symbol MA.svg'},
              {name:'Blockchain Solutions',title:'Making full-fledged cryptocurrency exchange, ICO solution, Integrate cruyptocurrency deposit and withdraw and payment.',icon:'assets/images/symbol/Sym_BC.svg'},
              {name:'AI',title:'We re experienced backend developers, powering data management tools for many of our clients. Get a software that adapts to your business and grows with it.',icon:'assets/images/symbol/Symbol_AI.svg'},
              {name:'Embedded Systems',title:'We`re experienced in automotive domain with car navigation, ECU unit testing and development, drivers development, firmware middleware development.',icon:'assets/images/symbol/Symbol em.svg'},
              {name:'BPO (Business Process Outsourcing)',title:'Exoerience in simple jobs like data entry, labeling image with high pridcutivity and low costs.',icon:'assets/images/symbol/Symbol BPO.svg'},
            ];

  constructor() { }

  ngOnInit() {
  }

}
