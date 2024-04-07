import { Time } from '@angular/common';

export interface VehicleCollisions {
  crash_date: Date;
  crash_time: Time;
  latitude: number;
  longitude: number;
  location: Location;
  on_street_name: string;
  number_of_persons_injured: number;
  number_of_persons_killed: number;
  number_of_pedestrians_injured: number;
  number_of_pedestrians_killed: number;
  number_of_cyclist_injured: number;
  number_of_cyclist_killed: number;
  number_of_motorist_injured: number;
  number_of_motorist_killed: number;
  contributing_factor_vehicle_1: string;
  contributing_factor_vehicle_2: string;
  collision_id: number;
  vehicle_type_code1: string;
  vehicle_type_code2: string;
}
