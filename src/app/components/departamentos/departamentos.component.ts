import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>
  constructor(
    private _service: DepartamentoService,
    private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params:Params)=>{
      if (params['id']  !=   null){
        var id = parseInt(params['id']);
        this.deleteDepartamento(id);
      }
    })
   this.loadDepartamento();
  }

  loadDepartamento(): void {
    this._service.getDepartamentos().subscribe(res => {
      this.departamentos = res;
    })
  }

  deleteDepartamento(id:number): void {
    this._service.delete(id).subscribe(res=>{
      console.log("borrado");
      this.loadDepartamento();
    })
  }


}
