var array = [];
window.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addStudent);
    function addStudent() {
        var studentNameInput = document.getElementById('student-name-input');
        var studentList = document.getElementById('student-list');
        if (studentNameInput.value !== '') {
            var listItem = document.createElement('li');
            listItem.textContent = studentNameInput.value;
            studentList.appendChild(listItem);
            array.push(studentNameInput.value);
            console.log(array);
            studentNameInput.value = '';
        }
    }
});
