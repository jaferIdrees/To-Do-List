export default class Task {
  constructor(desc, index, completed = false) {
    this.description = desc;
    this.completed = completed;
    this.index = index;
  }
}