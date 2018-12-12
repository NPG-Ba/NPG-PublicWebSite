import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AccessComponent } from './access/access.component';
import { ModalComponent } from './modal/modal.component';
import { IsotopeComponent } from './isotope/isotope.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, GooglemapComponent, ProfileComponent, ContactComponent, ServiceComponent, AccessComponent, ModalComponent, IsotopeComponent],
  exports: [LayoutComponent, HeaderComponent,FooterComponent]
})
export class UiModule { }