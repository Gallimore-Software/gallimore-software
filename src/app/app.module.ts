/**
 * Module imports
 */
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

/**
 * Directive imports
 */
import { MouseEnterLeaveDebounceDirective } from './shared/directives/mouse-enter-leave-debounce.directive';

/**
 * Service imports
 */
import { ComponentPageTitle } from './shared/services/page-title/page-title';

/**
 * Component imports
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SlideShowComponent } from './shared/components/slide-show/slide-show.component';
import { ProudComponent } from './pages/home/components/proud/proud.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechnologiesWeUseComponent } from './pages/technologies-we-use/technologies-we-use.component';
import { TechnologiesWeUseItemComponent } from './pages/technologies-we-use/components/technologies-we-use-item/technologies-we-use-item.component';
import { WhatWeDoItemComponent } from './pages/what-we-do/components/what-we-do-item/what-we-do-item.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { IntroComponent } from './pages/home/components/intro/intro.component';
import { SidenavComponent } from './shared/components/nav/components/sidenav/sidenav.component';
import { HeaderNavComponent } from './shared/components/nav/components/header-nav/header-nav.component';
import { ProjectComponent } from './pages/projects/components/project/project.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavComponent,
    HeaderComponent,
    SlideShowComponent,
    ProudComponent,
    WhatWeDoComponent,
    WhatWeDoItemComponent,
    TechnologiesWeUseComponent,
    TechnologiesWeUseItemComponent,
    ContactComponent,
    ProjectsComponent,
    IntroComponent,
    MouseEnterLeaveDebounceDirective,
    SidenavComponent,
    HeaderNavComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ComponentPageTitle],
  bootstrap: [AppComponent]
})
export class AppModule { }
