import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeadernavComponent } from './projectspage/headernav/headernav.component';
// import { WelcomeSectionComponent } from './projectspage/welcomesection/welcome-section.component';
// import { ProjectsComponent } from './projectspage/projects/projects.component';
// import { ProfileComponent } from './projectspage/profile/profile.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { FooterComponent } from 'footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ProjectspageComponent } from './projectspage/projectspage.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { DevstuffComponent } from './homepage/devstuff/devstuff.component';
import { ArtstuffComponent } from './homepage/artstuff/artstuff.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepageComponent,
    BannerComponent,
    DevstuffComponent,
    ArtstuffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
