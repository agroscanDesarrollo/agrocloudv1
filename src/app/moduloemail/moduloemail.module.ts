//importar modulos necesarios
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importante para two way data binding
import { FormsModule } from '@angular/forms';

//importar component
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

// Decorar ngModule para cargar los componentes y la configuracion del modulo

@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports:[MainEmailComponent]
})

export class ModuloEmailModule{

}

