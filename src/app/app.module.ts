import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//importante para two way data binding
import { FormsModule } from '@angular/forms';

// importante para las animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material design
import { MatInputModule, MatSelectModule,
  MatCardModule, MatListModule, MatIconModule } from '@angular/material';


// Importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';




import { appRoutingProviders, routing } from './app.routing';



import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MapComponent } from './componentes/map/map.component';

//import { AdminRoutingModule } from './admin/admin-routing.module';

// Servicios
//import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,    
    RegisterComponent,
    LoginComponent,
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule
    //AdminRoutingModule
  ],
  providers: [
    appRoutingProviders
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
