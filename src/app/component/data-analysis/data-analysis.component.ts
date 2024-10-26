import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.css',
})
export class DataAnalysisComponent {
  analysis: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProjects().subscribe(
      (analysis: any[]) => {
        console.log(analysis);
        this.analysis = analysis;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  fetchProjects(): Observable<any[]> {
    return this.http.get<any[]>('assets/data.json');
  }
}
