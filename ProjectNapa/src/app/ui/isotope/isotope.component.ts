import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare var Isotope: any;

@Component({
  selector: 'app-isotope',
  templateUrl: './isotope.component.html',
  styleUrls: ['./isotope.component.css']
})
export class IsotopeComponent implements OnInit, AfterViewInit {
  profile = [
    { clazz: 'web', image: 'assets/images/demo/web1.jpeg', title: 'CRM System', content: 'Create a market cap service for Kyber Network coin base on decentralized.' },
    { clazz: 'blockchain', image: 'assets/images/demo/block4.jpg', title: 'Trading system', content: 'Create a market cap service for Kyber Network coin base on decentralized.' },
    { clazz: 'blockchain', image: 'assets/images/demo/block3.jpg', title: 'Data Entry App', content: 'Create a market cap service for Kyber Network coin base on decentralized.'},
    { clazz: 'backend', image: 'assets/images/demo/web1.jpeg', title: 'TO Corporation', content: 'Create a market cap service for Kyber Network coin base on decentralized.' },
    { clazz: 'app', image: 'assets/images/demo/MyF.jpeg', title: 'FS Project', content: 'Create a market cap service for Kyber Network coin base on decentralized.'},
    { clazz: 'web', image: 'assets/images/demo/areaparking_app.png', title: 'Auto Parking', content: 'Create a market cap service for Kyber Network coin base on decentralized.'},
    { clazz: 'bpo', image: 'assets/images/demo/adas.jpeg', title: 'Traveling Company', content: 'Create a market cap service for Kyber Network coin base on decentralized.' },
    { clazz: 'app', image: 'assets/images/demo/data.jpeg', title: 'Create Wallet', content: 'Create a market cap service for Kyber Network coin base on decentralized.'}
  ];
  tags = [
    { name: 'Blockchain Solutions', clazz: 'blockchain' },
    { name: 'Web Development', clazz: 'web' },
    { name: 'Backend Applications', clazz: 'backend' },
    { name: 'Apps Development', clazz: 'app' },
    { name: 'BPO Services', clazz: 'bpo' }

  ];
  els: any;
  iso: any;

  constructor(private hostElement: ElementRef) {
    this.els = hostElement;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.iso = new Isotope(this.els.nativeElement.querySelector('.grid'),
      {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        sortBy: 'random'
      }
    );
  }

  filter(field) {
    //console.log(field);
    this.iso.arrange({
      filter: '.' + field
    });
  }
}
