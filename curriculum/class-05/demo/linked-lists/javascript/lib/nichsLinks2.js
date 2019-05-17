'use strict';

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    if(!this.head){
      this.head = {
        value: value,
        next: null
      };
      return;
    }

    let tempStudent = this.head; // start with the first student
    while(tempStudent.next !== null){ // while there is another student in the class
      tempStudent = tempStudent.next; // point at the next student
    }

    tempStudent.next = {
      value: value,
      next: null
    };

  }

  printOut(){
    if(!this.head) return 'I\'m empty';
    let message = '';

    let tempStudent = this.head;
    message +=` ${tempStudent.value}`;
    while(tempStudent.next !== null){ // while there is a next student
      tempStudent = tempStudent.next;
      message += ` ${tempStudent.value}`;
    }
    console.log(message);
    return message;
  }
}

const students = new LinkedList();

students.insert('Jesse');
students.insert('Bonnie');
students.insert('Joe');
students.insert('Jag');
students.insert('Morgana');
students.insert('Jennifer');

console.log(students);

students.printOut();
