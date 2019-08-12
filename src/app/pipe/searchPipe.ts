import { Pipe, PipeTransform } from '@angular/core';

class Employee {
    id: number;
    firstName: string;
    lastName: string;
    salary: number;
}

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(emp: Employee[], firstName?: string, lastName?: string, salaryRange?: number) {
        console.log(salaryRange);

        if (!emp) { return []; }
        if (!firstName && !lastName && !salaryRange) { return emp; }
        if (lastName) {
            emp = emp.filter(employee => employee.lastName.toLocaleLowerCase().startsWith(lastName.toLocaleLowerCase()));
        }
        if (firstName) {
            emp = emp.filter(employee => employee.firstName.toLocaleLowerCase().startsWith(firstName.toLocaleLowerCase()));
        }
        if (salaryRange) {
            emp = emp.filter(employee => employee.salary >= salaryRange * 100);
        }
        return emp;
    }
}
