import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './../../services/empresa.service';

@Component({
  selector: 'app-baserfb',
  templateUrl: './baserfb.component.html',
  styleUrls: ['./baserfb.component.css'],
})
export class BaserfbComponent implements OnInit {
  estabelecimentos: any[] = [];
  cols: any[] = [];
  visivel: boolean = false;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
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
        console.error('Erro ao carregar estabelecimentos:', err);
      },
    });
  }

  showDialogo(): void {
    this.visivel = true;
  }

  exportXlsx(): void {
    console.log('Exportar para Excel acionado');
    // Aqui você pode implementar a exportação real usando a lib xlsx ou similar
  }

  deleteEmpresa(id: string): void {
    console.log(`Excluir empresa com ID: ${id}`);
    // Implemente aqui a lógica de exclusão
  }

  editEmpresa(empresa: any): void {
    console.log('Editar empresa:', empresa);
    this.visivel = true;
    // Implemente a lógica de edição conforme necessidade
  }
}
