export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues extends LoginValues {
  firstName: string;
  lastName: string;
}
