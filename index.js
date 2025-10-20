class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  get initials() {
    const initialFirstName = this.firstName[0];
    const initialLastName = this.lastName[0];
    return `${initialFirstName}${initialLastName}`;
  }
}

class Employee extends Person {
  #salary = 50000;
  #employeeId = "";
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName);

    this.#employeeId = employeeId;
  }
  get employeeId() {
    return this.#employeeId;
  }

  set salary(newSalary) {
    if (newSalary < this.#salary) {
      console.log("Salary cannot be decreased!");
    } else {
      this.#salary = newSalary;
    }
  }

  get annualPay() {
    return this.#salary;
  }
}

class Manager extends Employee {
  #projectsManaged = [];
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName, employeeId);
  }
  assignProjectName(projectName) {
    this.#projectsManaged.push(projectName);
  }
  get projectsCount() {
    return this.#projectsManaged.length;
  }
}
console.log("Julia");





class ProjectTask {
  #status = "Pending";
  constructor(description, assignedTo) {
    this.description = description;
    this.assignedTo = assignedTo;
  }

get status(){return this.#status}

set status(status){
  if (status === "Completed" || status === "InProgress" || status === "Pending")
  {this.#status = status}
  else{
    console.log(`${status} is not an allowed ProjectTask status!`)
  }
}
  get isDone() {
    if (this.#status === "Completed") {
      return true;
    }
    return false;
  }
  markInProgress() {this.status = "InProgress";}
    
  completedTask(){this.status ="Completed"}
}
  

const projectManager = new Manager("Lena", "Smith", "M901");
const developer = new Employee("Ben", "Carter", "E550");

// 2. Test Salary Setter (Validation)
projectManager.salary = 75000; // ✅ Valid (Current: 50000 -> New: 75000)
projectManager.salary = 70000; // ❌ Logs error, salary remains 75000.

// 3. Test Task Creation (Utility Class)
const task1 = new ProjectTask("Implement login feature", developer);
task1.markInProgress();

// 4. Test Getters/Inheritance
console.log(`Manager Initials: ${projectManager.initials}`); // L.S.
console.log(`Task Status: ${task1.isDone}`); // false
console.log(`Annual Pay: ${projectManager.annualPay}`); // 75000