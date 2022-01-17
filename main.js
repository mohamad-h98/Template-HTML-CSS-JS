
// اول دالة يجب اضافة (sweet scrept)

// تشييك اذا التاسك مكرر او لاء

// بوتن يحذف جميع العناصر

// بوتن يشطب على جميع العناصر

// اضافة التاسكات الى لوكال ستورج



// Setting Up Variables

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");


// Focus On Input Field 

window.onload = function () {
    theInput.focus();
};

// adding The Task 

theAddButton.onclick = function () {

    // If Input Is Empty
    if( theInput.value === '') {

        //********************************** */

        console.log("Use Sweet Alert Library");

        //********************************** */
    } else {

        let noTaskMsg = document.querySelector(".no-tasks-message");


        // check If Span With No Tasks Message Is Exist
        if(document.body.contains(document.querySelector(".no-tasks-message"))){

        // Remove No Tasks Message
        noTaskMsg.remove();

        }


        // Creat ht Main Span Element 
        let mainSpan = document.createElement("span");


        // Creat Delete Button
        let deleteElement = document.createElement("span");

        // Creat the Span Text
        let text = document.createTextNode(theInput.value);


        // Creat The Delete Button Text
        let deleteText = document.createTextNode("Delete");
        

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class To Main Span
        mainSpan.className = 'task-box';

        // Add Task To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The Task To The Container
        taskContainer.appendChild(mainSpan);

        // Empty The Input 
        theInput.value = '';

        // Focus On Field
        theInput.focus();

        // Calclate Tasks
        calculationTasks();
    }
};

document.addEventListener('click', function (e) {

    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();

        // Check Numbur Of Tasks Inside The Container
        if(taskContainer.childElementCount == 0){

            creatNoTasks();
        }

    }



    //Finish Task (classList.containsخاصيه تقول ان العنصر هذا ييحتوي في اخر الكلاسات المكتوبه فيكود ال سي اس اس )
    if (e.target.classList.contains('task-box')){

        //Toggle Class 'finished' (وظيفة الخاصيه :اذا كان العنصر هذا فعال فألغيه واذا كان غير فعال فشغله)
        e.target.classList.toggle("finished");
    }

        // Calclate Tasks
        calculationTasks();
});

// Function To Create No Tasks Message
function creatNoTasks() {

    //Creat message Span Element 
    let msgSpan = document.createElement("span");

    // Creat The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Messsage Span Element 
    msgSpan.appendChild(msgText);

    // Add Class To Message Span 
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element To The Task Container
    taskContainer.appendChild(msgSpan); 
}

// Function To Calculate Tasks 
function calculationTasks() {

    // Calclution All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;


    // Calclution Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}