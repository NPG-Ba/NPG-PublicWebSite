import { Component, OnInit, ElementRef } from '@angular/core';
declare var Isotope: any;

@Component({
  selector: 'app-isotope',
  templateUrl: './isotope.component.html',
  styleUrls: ['./isotope.component.css']
})
export class IsotopeComponent implements OnInit {

  profile = [
              {image :'assets/images/demo/web1.jpeg', title:'CRM System',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Blockchain Solutions'},
              {image :'assets/images/demo/block4.jpg', title:'Trading system',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Web Development'},
              {image :'assets/images/demo/block3.jpg', title:'Data Entry App',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Backend Applications'},
              {image :'assets/images/demo/web1.jpeg', title:'TO Corporation',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Apps Development'},
              {image :'assets/images/demo/MyF.jpeg', title:'FS Project',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'BPO Services'},
              {image :'assets/images/demo/areaparking_app.png', title:'Auto Parking',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Blockchain Solutions'},
              {image :'assets/images/demo/adas.jpeg', title:'Traveling Company',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Apps Development'},
              {image :'assets/images/demo/data.jpeg', title:'Create Wallet',content:'Create a market cap service for Kyber Network coin base on decentralized.',tag:'Apps Development'}
            ];
  tags =    [
               {name:'Blockchain Solutions',des:'Blockchain Solutions'},
               {name:'Web Development',des:'Blockchain Solutions'},
               {name:'Backend Applications',des:'Backend Applications'},
               {name:'Apps Development',des:'Apps Development'},
               {name:'BPO Services',des:'BPO Services'}

            ];
  els: any;
  iso: any;
  
  constructor(private hostElement: ElementRef) {
    this.els = hostElement;
  }

  ngOnInit() {
    this.iso = new Isotope(this.els.nativeElement.querySelector('.grid'),
      {
        sortBy: 'random'
      }
    );
  }

  filter(field){
    console.log(field);
    this.iso.arrange({
      filter: '.' + field
    });
  } 
}
