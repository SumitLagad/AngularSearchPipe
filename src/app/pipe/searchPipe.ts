import { Pipe, PipeTransform } from '@angular/core';

class Employee {
    id: number;
    firstName: string;
    lastName: string;
}

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(emp: Employee[], firstName?: string, lastName?: string) {

        if (!emp) { return []; }
        if (!firstName && !lastName) { return emp; }
        if (lastName) {
            emp = emp.filter(employee => employee.lastName.toLocaleLowerCase().startsWith(lastName.toLocaleLowerCase()));
        }
        if (firstName) {
            emp = emp.filter(employee => employee.firstName.toLocaleLowerCase().startsWith(firstName.toLocaleLowerCase()));
        }
        return emp;
    }
}
