import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdepartamento',
  templateUrl: './editdepartamento.component.html',
  styleUrls: ['./editdepartamento.component.css']
})
export class EditdepartamentoComponent implements OnInit {

  public departamento!: Departamento;

  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _service: DepartamentoService,
    private _router: Router,
    private _ActiveRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDepartamento();
  }

  loadDepartamento(): void {
    this._ActiveRouter.params.subscribe((params: Params) => {
      var num = parseInt(params["num"]);
      this.departamento = new Departamento(num, params["nom"], params["loc"]);
    });
  }

  updateDepartamento(): void {
    var nombre = this.cajaNombre.nativeElement.value;
    var localidad = this.cajaLocalidad = this.cajaLocalidad.nativeElement.value;
    //modificamos los datos del departamentos con los datos de las cajas
    this.departamento.nombre = nombre,
      this.departamento.localidad = localidad;

    this._service.update(this.departamento).subscribe(res => {
      this._router.navigate(["/"]);
    })
  }
}
