import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactListPage } from '../pages/contact-list/contact-list';
import { ShareProvider } from '../providers/share/share';
import { DeclarationProvider } from '../providers/declaration/declaration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactListPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShareProvider,
    DeclarationProvider
  ]
})
export class AppModule {}
