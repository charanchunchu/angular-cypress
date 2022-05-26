import { constructorParametersDownlevelTransform } from "@angular/compiler-cli";
export interface User {
  id: number,
  name: string,
  email: string,
  mobile: string,
  gender: string,
  dob: Date,
  isActive: boolean,
  range?: any
  userType?: string
}

export class Users {
  id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  mobile: string | undefined;
  salary: string | undefined;

constructor(id: string | undefined,firstName: string | undefined,lastName: string | undefined,email: string | undefined,mobile: string | undefined,salary: string | undefined){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.mobile=mobile;
    this.salary=salary;
}
}
