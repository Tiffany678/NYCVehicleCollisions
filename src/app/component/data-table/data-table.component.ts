import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { VehicleCollisions } from '../../model/VechicleCollisions.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  vehicleCollisions?: VehicleCollisions[];
  dataSource: any;
  displayedColumns: any[] = [
    'crash_date',
    'crash_time',
    // 'latitude',
    // 'longitude',
    // 'location',
    // 'on_street_name',
    'number_of_persons_injured',
    // 'number_of_persons_killed',
    // 'number_of_pedestrians_injured',
    // 'number_of_pedestrians_killed',
    // 'number_of_cyclist_injured',
    // 'number_of_cyclist_killed',
    // 'number_of_motorist_injured',
    // 'number_of_motorist_killed',
    'contributing_factor_vehicle_1',
    'contributing_factor_vehicle_2',
    // 'collision_id',
    'vehicle_type_code1',
    'vehicle_type_code2',
  ];
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getVehicleCollisionsData().subscribe({
      next: (response) => {
        this.vehicleCollisions = response;
        this.dataSource = new MatTableDataSource<VehicleCollisions>(
          this.vehicleCollisions
        );
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
      },
    });
  }
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
