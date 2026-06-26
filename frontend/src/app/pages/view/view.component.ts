import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequisitionService } from '../../services/requisition.service';
import { Requisition } from '../../models/requisition';
import { Router } from '@angular/router';

interface ViewRecord {
  refurbishmentId: number;
  equipmentName: string;
  serialNo: string;
  mfgYear: number;
  make: string;
  model: string;
  kw: string;
  frame: string;
  rpm: string;
}

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  rows: ViewRecord[] = [];
  private requisitionService = inject(RequisitionService);
  private router = inject(Router);

  idFilter = '';
  equipmentFilter = '';
  serialFilter = '';
  makeFilter = '';
  idOperator = 'contains';
equipmentOperator = 'contains';
serialOperator = 'contains';
makeOperator = 'contains';
  private matchesFilter(
  value: string,
  filterValue: string,
  operator: string
): boolean {

  const source = value.toLowerCase();
  const target = filterValue.toLowerCase();

  if (
    operator !== 'blank' &&
    operator !== 'notBlank' &&
    !target
  ) {
    return true;
  }

  switch (operator) {

    case 'contains':
      return source.includes(target);

    case 'notContains':
      return !source.includes(target);

    case 'equals':
      return source === target;

    case 'notEquals':
      return source !== target;

    case 'beginsWith':
      return source.startsWith(target);

    case 'endsWith':
      return source.endsWith(target);

    case 'blank':
      return source.trim() === '';

    case 'notBlank':
      return source.trim() !== '';

    default:
      return true;
  }
}

  constructor() {
}

ngOnInit(): void {

  this.requisitionService.getAllRequisitions().subscribe({

    next: (data: Requisition[]) => {

      this.rows = data.map(item => ({

        refurbishmentId: item.id,

        equipmentName: item.mainEquipmentName,

        serialNo: item.equipmentSerialNo,

        mfgYear: Number(item.motorManufacturingYear),

        make: item.make,

        model: item.model,

        kw: item.kw,

        frame: item.frame,

        rpm: item.rpm

      }));

    },

    error: (error) => {

      console.error('Error loading requisitions:', error);

    }

  });

}

  get filteredRows(): ViewRecord[] {

  return this.rows.filter(row => {

    return (

      this.matchesFilter(
        row.refurbishmentId.toString(),
        this.idFilter,
        this.idOperator
      )

      &&

      this.matchesFilter(
        row.equipmentName,
        this.equipmentFilter,
        this.equipmentOperator
      )

      &&

      this.matchesFilter(
        row.serialNo,
        this.serialFilter,
        this.serialOperator
      )

      &&

      this.matchesFilter(
        row.make,
        this.makeFilter,
        this.makeOperator
      )

    );

  });

}

  exportCsv(): void {

    const headers = [
      'Refurbishment ID',
      'Equipment Name',
      'Serial No',
      'Mfg Year',
      'Make',
      'Model',
      'KW',
      'Frame',
      'RPM'
    ];

    const csvRows = this.filteredRows.map(row => [
      row.refurbishmentId,
      row.equipmentName,
      row.serialNo,
      row.mfgYear,
      row.make,
      row.model,
      row.kw,
      row.frame,
      row.rpm
    ]);

    const csvContent = [
      headers.join(','),
      ...csvRows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob(
      [csvContent],
      { type: 'text/csv;charset=utf-8;' }
    );

    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'equipment-data.csv';

    link.click();
  }

  openSettings(): void {
  this.showSettings = true;
}

closeSettings(): void {
  this.showSettings = false;
}

applyChanges(): void {

  this.showSettings = false;

}

  viewAllotment(id: number): void {

  this.router.navigate(['/repair', id]);

}

  moveToVisible(): void {

  if (!this.selectedAvailableColumn) {
    return;
  }

  this.availableColumns = this.availableColumns.filter(
    column => column !== this.selectedAvailableColumn
  );

  this.visibleColumns.push(this.selectedAvailableColumn);

  this.selectedAvailableColumn = '';

}

moveToAvailable(): void {

  if (!this.selectedVisibleColumn) {
    return;
  }

  this.visibleColumns = this.visibleColumns.filter(
    column => column !== this.selectedVisibleColumn
  );

  this.availableColumns.push(this.selectedVisibleColumn);

  this.selectedVisibleColumn = '';

}

  showSettings = false;

  isColumnVisible(column: string): boolean {

  return this.visibleColumns.includes(column);

}

availableColumns: string[] = [];

visibleColumns: string[] = [
  'Refurbishment ID',
  'Allotment',
  'Main Equipment Name',
  'Serial No',
  'Mfg Year',
  'Make',
  'Model',
  'KW',
  'Frame',
  'RPM'
];

selectedAvailableColumn = '';

selectedVisibleColumn = '';

}

