import { Injectable } from '@angular/core';
import data from '../data/departments_france.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WildfireService {
  private coursSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public courses$: Observable<any> = this.coursSubject.asObservable();
  departments = [
    '17',
    '33',
    '40',
    '64',
    '16',
    '24',
    '47',
    '32',
    '65',
    '46',
    '82',
    '31',
    '09',
    '12',
    '15',
    '81',
    '09',
    '11',
    '66',
    '34',
    '48',
    '43',
    '19',
    '07',
    '30',
    '13',
    '84',
    '26',
    '38',
    '73',
    '05',
    '04',
    '83',
    '06',
  ];

  constructor() {}
  getFireData(selectedYear: number) {
    let departmentsCopy = this.departments;
    let filteredData = data[0].features;

    for (let year = 2023; year >= selectedYear; year--) {
      const randomIndex = Math.floor(Math.random() * departmentsCopy.length);
      departmentsCopy.splice(randomIndex, 1);

      filteredData = data[0].features.filter((d: any) =>
        departmentsCopy.includes(d.properties.code)
      );
    }
    return filteredData;
  }
}
