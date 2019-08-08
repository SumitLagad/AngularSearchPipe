import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    getEmployeeData() {
        return this.http.get('assets/emp.json');
    }
}
