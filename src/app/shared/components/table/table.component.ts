import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Table } from '@shared/models';

@Component({
  selector: 'iso-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
})
export class TableComponent implements OnInit {
  @Input() pageSize: number[] = [];
  @Input() dataSource?: unknown[] = [];
  @Input() headerColumns: Table[] = [];
  @Input() footerColumns: Table[] = [];
  @Input() shouldShowDetail: boolean = false;
  @Input() shouldShowFooter: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  expandedElement = false;

  tableContent!: MatTableDataSource<unknown>;

  headerColumnNames: string[] = [];
  footerColumnNames: string[] = [];

  ngOnInit(): void {
    this.headerColumns = this.headerColumns.sort((a, b) => {
      return a.position - b.position;
    });
    this.footerColumns = this.footerColumns.sort((a, b) => {
      return a.position - b.position;
    });
    this.tableContent = new MatTableDataSource<unknown>(this.dataSource);
    this.headerColumnNames = this.headerColumns.map(coluna => {
      return coluna.name;
    });
    this.footerColumnNames = this.footerColumns.map(coluna => {
      return coluna.name;
    });
  }

  ngAfterViewInit() {
    this.tableContent.sort = this.sort;
    this.tableContent.paginator = this.paginator;
  }

  termoBuscado(termo: string) {
    this.tableContent.filter = termo;
  }
}
