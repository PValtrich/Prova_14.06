let array: string[]=[];
window.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addStudent);
  
    function addStudent() {
      const studentNameInput = document.getElementById('student-name-input') as HTMLInputElement;
      const studentList = document.getElementById('student-list');
  
      if (studentNameInput.value !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = studentNameInput.value;
        studentList.appendChild(listItem);
        array.push(studentNameInput.value)
        console.log(array);
        studentNameInput.value = '';
        
        
      }
    }
  });

