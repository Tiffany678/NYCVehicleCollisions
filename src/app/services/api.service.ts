import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { VehicleCollisions } from '../model/VechicleCollisions.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getVehicleCollisionsData(): Observable<VehicleCollisions[]> {
    return this.http.get<VehicleCollisions[]>(
      //'https://data.cityofnewyork.us/resource/h9gi-nx95.json?$query=SELECT%20crash_date%2C%20crash_time%2C%20borough%2C%20zip_code%2C%20latitude%2C%20longitude%2C%20location%2C%20on_street_name%2C%20off_street_name%2C%20cross_street_name%2C%20number_of_persons_injured%2C%20number_of_persons_killed%2C%20number_of_pedestrians_injured%2C%20number_of_pedestrians_killed%2C%20number_of_cyclist_injured%2C%20number_of_cyclist_killed%2C%20number_of_motorist_injured%2C%20number_of_motorist_killed%2C%20contributing_factor_vehicle_1%2C%20contributing_factor_vehicle_2%2C%20contributing_factor_vehicle_3%2C%20contributing_factor_vehicle_4%2C%20contributing_factor_vehicle_5%2C%20collision_id%2C%20vehicle_type_code1%2C%20vehicle_type_code2%2C%20vehicle_type_code_3%2C%20vehicle_type_code_4%2C%20vehicle_type_code_5%20ORDER%20BY%20crash_date%20DESC'
      `https://data.cityofnewyork.us/resource/h9gi-nx95.json?$query=SELECT%20crash_date%2C%20crash_time%2C%20borough%2C%20zip_code%2C%20latitude%2C%20longitude%2C%20location%2C%20on_street_name%2C%20off_street_name%2C%20cross_street_name%2C%20number_of_persons_injured%2C%20number_of_persons_killed%2C%20number_of_pedestrians_injured%2C%20number_of_pedestrians_killed%2C%20number_of_cyclist_injured%2C%20number_of_cyclist_killed%2C%20number_of_motorist_injured%2C%20number_of_motorist_killed%2C%20contributing_factor_vehicle_1%2C%20contributing_factor_vehicle_2%2C%20contributing_factor_vehicle_3%2C%20contributing_factor_vehicle_4%2C%20contributing_factor_vehicle_5%2C%20collision_id%2C%20vehicle_type_code1%2C%20vehicle_type_code2%2C%20vehicle_type_code_3%2C%20vehicle_type_code_4%2C%20vehicle_type_code_5%20WHERE%20((%60crash_date%60%20%3E%20'2023-12-31')%20AND%20%60crash_date%60%20IS%20NOT%20NULL)%20ORDER%20BY%20crash_date%20ASC`
    );
  }
}
