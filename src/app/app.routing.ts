import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes


import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MapComponent } from './componentes/map/map.component';


const appRoutes:Routes=[
//{path:'',component:TiendaComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'registro',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'map',component:MapComponent},

{path:'**',redirectTo:'home',pathMatch:'full'}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);