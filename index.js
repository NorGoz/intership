const conatiner = document.querySelector('.container');

const students = [
    {
        name: 'Martin',
        lastName: 'Lant',
        marks: [9, 8, null, 7, 5],
    },
    {
        name: 'Francesco',
        lastName: 'Portus',
        marks: [5, 4, 2, 3, 2],
    },
    {
        name: 'Bill',
        lastName: 'Merdoc',
        marks: [10, null, null, null, 10],
    },
    {
        name: 'John',
        lastName: 'Entman',
        marks: [9, 8, 9, 7, 5],
    },
];


function clearActive() {
    const activeItems = [...document.querySelectorAll('.active')];
    activeItems.forEach(activeItem => activeItem.classList.remove('active'));
}

function acviteTask(e) {
    clearActive()
    const item = e.target.parentElement;
    item.classList.toggle('active');
}

const createStudentCart = function (obj) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('cart');
    const nameSpan = document.createElement('span');
    addClassForElement(nameSpan,'cart__element')
    nameSpan.textContent = `Name: ${obj.name}`;
    newDiv.appendChild(nameSpan);

    const lastNameSpan = document.createElement('span');
    addClassForElement(lastNameSpan,'cart__element')
    lastNameSpan.textContent = `Last Name: ${obj.lastName}`;
    newDiv.appendChild(lastNameSpan);

    const marksSpan = document.createElement('span');
    addClassForElement(marksSpan,'cart__element')
    marksSpan.textContent = `attendance at the lesson: ${checkLessons(obj.marks)}`;
    newDiv.appendChild(marksSpan);

    const averageMark = document.createElement('span');
    addClassForElement(averageMark,'cart__element')
    averageMark.textContent=`Average Mark: ${checkAverageMark(obj.marks)}`;
    newDiv.appendChild(averageMark);

    checkGrade(newDiv,checkAverageMark(obj.marks));
    newDiv.addEventListener('click',(e) => acviteTask(e));
    conatiner.appendChild(newDiv);
};
function checkGrade(element,grade){
    grade > 5 ? addClassForElement(element,'highMark') : addClassForElement(element,'lowMark')
}
function addClassForElement(element,name){
    element.classList.add(name)
}
function checkLessons(marks){
    return marks.filter(item => item).length;
}
function checkAverageMark(marks){
    const clearArr = marks.filter(item => item);
    let sum = 0;
    clearArr.forEach(item => sum += item);
    return sum/marks.length
}

const initial = function (){
    students.forEach(item => createStudentCart(item))
}

initial();
