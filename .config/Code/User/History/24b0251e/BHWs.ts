import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './../../services/empresa.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-baserfb',
  templateUrl: './baserfb.component.html',
  styleUrls: ['./baserfb.component.css'],
})
export class BaserfbComponent implements OnInit {
  estabelecimentos: any[] = [];
  cols: any[] = [];
  visivel: boolean = false;

  constructor(
    private empresaService: EmpresaService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.cols = [
      { campo: 'cnpj', cabecalho: 'CNPJ' },
      { campo: 'razao', cabecalho: 'Razão Social' },
      { campo: 'municipio', cabecalho: 'Município' },
      { campo: 'uf', cabecalho: 'UF' },
      { campo: 'situacao_cadastral', cabecalho: 'Situação' },
      // Adicione mais colunas conforme necessário
    ];

    this.empresaService.getEstabelecimentos().subscribe({
      next: (value) => {
        this.estabelecimentos = value;
        console.log(this.estabelecimentos);
      },
      error: (err) => {
        console.log('Erro ao carregar estabelecimentos:', err);
      },
    });
  }

  showDialogo(): void {
    this.visivel = true;
  }

  exportXlsx(): void {
    // Aqui você pode integrar com uma biblioteca de exportação como xlsx ou PrimeNG Table export
    console.log('Exportar para Excel acionado');
  }

  deleteEmpresa(id: string): void {
    // Aqui entraria a chamada de exclusão da API
    console.log(`Excluir empresa com ID: ${id}`);
  }

  editEmpresa(empresa: any): void {
    // Pode abrir modal, carregar empresa no form etc.
    console.log('Editar empresa:', empresa);
    this.visivel = true;
  }
}
