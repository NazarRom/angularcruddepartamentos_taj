import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { EditdepartamentoComponent } from './components/editdepartamento/editdepartamento.component';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';

const routes: Routes = [
  {path:"",component:DepartamentosComponent},
  {path:"insert", component:InsertardepartamentoComponent},
  {path:"edit/:num/:nom/:loc",component:EditdepartamentoComponent},
  {path:"delete/:id", component:DepartamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
