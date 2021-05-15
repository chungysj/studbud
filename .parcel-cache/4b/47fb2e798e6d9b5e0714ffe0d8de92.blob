const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false); 
        console.log(tasklist);
    }
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {  
        // this id is going to be a way we can link our tasks inside the array to the task that is going to display on the screen
        // use the Date() field tiem. use the data.now function to return that date as a time stamp  
      id: Date.now(),
      taskDescription,
      dueDate,
      dateCreated,
      estimatedTime,
      completionTime,
      priorityRating,
      estimatedTime,
      completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
  }

function renderTask(task){

    updateEmpty();


    // Create HTML elements
    let item = document.createElement("li");
    // set this up as a html attribute, so we can create arbitrary html attributes for different data we install. 
    // we do this by using the set attribute function, for the name attribute we usually use the data pre fix followed by whatever type of data we're storing 
    item.setAttribute('data-id', task.id);
    item.innerHTML = "<p>" + task.taskDescription + "</p>" + "<p>" + task.dueDate + "</p>" + "<p>" + task.dateCreated + "</p>" + "<p>" + task.estimatedTime + "</p>" + "<p>" + task.completionTime + "</p>" + "<p>" + task.priorityRating + "</p>" + "<p>" + task.completionStatus + "</p>";
  
    tasklist.appendChild(item);
  
    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
  
  
    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event){
      event.preventDefault();
      console.log(taskListArray);
      // create a code that is going to check the id then delete it from the array if necessary 
      let id = event.target.parentElement.getAttribute('data-id');
      // with that id we are going to compare it to the value of the array 
      // A tricky line that will allow us to search through an array and return in index, given an input that we provide which would be the value of the item in the array 
      let index = taskListArray.findIndex(task => task.id === Number(id));

      // remove that Item from the array all together once they click the delete button, we are going to do this in a function we will create called remove item from array 
      removeItemFromArray(taskListArray,index)
      console.log(taskListArray);
      item.remove();
    })
  
    // Clear the input form
    form.reset();
  }

//  function to remove that frmom the array 
  function removeItemFromArray(arr, index) {
      if (index > -1){
          arr.splice(index, 1)
      }
      return arr;
  }

// Make sure this makes sense for the user, and it doesnt tell them they havent added tasks, when they clearly have 
// Add in a function to update this depending on if theres a task in the array or not 
function updateEmpty() {
    if (taskListArray.length > 0){
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
}
