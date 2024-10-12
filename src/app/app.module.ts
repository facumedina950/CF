import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ItemsComponent } from './components/items/items.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ApiService } from './services/api.service';
import { BotonModalComponent } from './components/boton-modal/boton-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ItemsComponent,
    IndicadoresComponent,
    ModalFormComponent,
    BotonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
    
  ],
  providers: [CookieService, AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
