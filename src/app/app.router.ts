import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { SapoMapasAPIComponent } from './sapo-mapas-api/sapo-mapas-api.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroUsuarioComponent},
    {path: 'sapo', component: SapoMapasAPIComponent}
  ];