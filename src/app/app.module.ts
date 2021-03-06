import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { TopbarComponent } from './topbar/topbar.component';
import { IndexComponent } from './index/index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, far } from '@fortawesome/free-regular-svg-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OverlayComponent } from './overlay/overlay.component';

import { AlertComponent } from './_components';
import { ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MomentModule } from 'ngx-moment';

@NgModule({
  entryComponents: [OverlayComponent],
  declarations: [
    AppComponent,
    NoteComponent,
    TopbarComponent,
    IndexComponent,
    OverlayComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    MomentModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(far, faPlusSquare);
  }
 }
