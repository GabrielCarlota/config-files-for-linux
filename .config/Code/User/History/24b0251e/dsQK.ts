import { EmpresaService } from './../../services/empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baserfb',
  imports: [],
  templateUrl: './baserfb.component.html',
  styleUrl: './baserfb.component.css',
})
export class BaserfbComponent implements OnInit {
  estabelecimentos: any[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.empresaService.getEstabelecimentos().subscribe((data) => {
      this.estabelecimentos = data;
    });
  }
}
