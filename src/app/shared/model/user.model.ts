export class UserModel {
  userName: string = '';
  userCode: string = '';
  department: string = '';
  role: string = '';
  password: string = '';
  tel: string = '';
  
  constructor(values: any) {
    Object.assign(this, values);
  }
}
