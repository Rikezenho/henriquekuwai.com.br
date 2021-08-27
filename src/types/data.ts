export interface PersonalData {
  lastUpdate: string;
  aboutTitle: string;
  description: string;
  languagesTitle: string;
  languages: string[];
  schoolTitle: string;
  school: Course;
  contacts: Contacts;
  personal: Personal;
  employeesTitle: string;
  employees: Employee[];
  complementaryTitle: string;
  complementary: Course[];
  nodeLists: NodeList[];
  linkedInTitle: string;
  sourceCodeTitle: string;
  lastUpdateTitle: string;
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
