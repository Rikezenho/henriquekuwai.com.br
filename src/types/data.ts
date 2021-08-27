export interface PersonalData {
  lastUpdate: string;
  description: string;
  languages: string[];
  school: Course;
  contacts: Contacts;
  personal: Personal;
  employees: Employee[];
  complementary: Course[];
  nodeLists: NodeList[];
}

export interface Contacts {
  phone: string;
  email: string;
  web: string;
  github: string;
  codesandbox: string;
  address: string;
  linkedin: string;
}

export interface Personal {
  logo: string;
  name: string;
  shortName: string;
  subtitle: string;
  birthDate: string;
}

export interface Employee {
  provider: string;
  location: string;
  positions: Array<EmployeePosition>;
}

export interface EmployeePosition {
  position: string;
  description: string;
  date: string;
  awards?: string[];
}

export interface Course {
  institute: string;
  course: string;
  date: string;
}

export interface NodeList {
  title: string;
  items: string[];
}
