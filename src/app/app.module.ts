import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu/menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrosselComponent } from './menu/carrossel/carrossel.component';
import { StartPageComponent } from './home/start-page/start-page.component';
import { AtualizationComponent } from './home/atualization/atualization.component';
import { SobreComponent } from './home/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CarrosselComponent,
    StartPageComponent,
    AtualizationComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
