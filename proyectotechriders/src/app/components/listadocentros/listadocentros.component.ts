import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicePrincipal } from 'src/app/services/service.principal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadocentros',
  templateUrl: './listadocentros.component.html',
  styleUrls: ['./listadocentros.component.css'],
})
export class ListadocentrosComponent implements OnInit {
  public centros!: any[];
  public centrosReset: any[] = [];
  public proFiltro!: any[];
  public centrosFiltroNombre!: any[]; //meter desde consulta
  public provincias!: any[];
  @ViewChild('selectprovincia') selectprovincia!: ElementRef;
  @ViewChild('selectempresa') selectempresa!: ElementRef;
  public empresa!: any;
  public provincia!: any;
  public filter_array!: any;
  public role!: number | null;
  public centrosCargados: boolean = false;

  constructor(private _service: ServicePrincipal, private _router: Router) {}

  ngOnInit(): void {
    if (this.role != localStorage.getItem('role'))
      this.role = parseInt(localStorage.getItem('role') ?? '0');
    this._service.getProvincias().subscribe((response: any) => {
      this.provincias = response;
      this._service.getEmpresasCentros().subscribe((response: any) => {
        this.centros = response;

        this.centros.forEach((centro) => {
          centro.provincia =
            this.provincias[centro.idProvincia - 1].nombreProvincia;
          if (centro.idTipoEmpresa == 2) this.centrosReset.push(centro);
        });

        this.proFiltro = this.centrosReset;
        this.centrosFiltroNombre = this.centrosReset;
        this.centrosFiltroNombre = this.centrosFiltroNombre.filter(
          (valor, indice, self) =>
            indice === self.findIndex((v) => v.nombre === valor.nombre)
        );
        this.centrosCargados = true;
      });
    });
  }

  filtrarTabla() {
    this.centrosReset = this.proFiltro;
    let i = 0;
    this.empresa = this.selectempresa.nativeElement.selectedOptions[0].value;
    this.provincia = parseInt(
      this.selectprovincia.nativeElement.selectedOptions[0].value
    );
    this.filter_array = [];

    if (this.empresa == 'todo' && this.provincia == 0) {
      this.centrosReset = this.proFiltro;
      return;
    } else if (this.provincia == 0 && this.empresa != 'todo') {
      this.filter_array = this.centrosReset.filter(
        (x) => x.nombre === this.empresa
      );
    } else if (this.provincia != 0 && this.empresa == 'todo') {
      this.filter_array = this.centrosReset.filter(
        (x) => x.idProvincia === this.provincia
      );
      console.log(this.filter_array);
    } else {
      this.filter_array = this.centrosReset.filter(
        (x) => x.nombre === this.empresa
      );
      this.filter_array = this.filter_array.filter(
        (x: { idProvincia: any }) => x.idProvincia === this.provincia
      );
    }
    this.centrosReset = this.filter_array;
  }
}
