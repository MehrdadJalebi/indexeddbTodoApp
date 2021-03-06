
/*
  Reference: 
    https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
    https://javascript.info/indexeddb
*/

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const taskList = document.getElementById('task-list');
const title = document.getElementById('title');
const year = document.getElementById('year');
const month = document.getElementById('month')
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const submit = document.getElementById('submit');

MONTHS.forEach(m => {
  var opt = document.createElement('option');
    opt.value = m;
    opt.innerHTML = m;
    month.appendChild(opt);
})

let db;

let newTask = [
  { 
    title: "",
    hours: 0,
    minutes: 0,
    day: 0,
    month: "",
    year: 0,
  }
];


const DBOpenRequest = window.indexedDB.open("toDoList", 1);
DBOpenRequest.onerror = event => {
  console.error(event)
};
DBOpenRequest.onsuccess = event => {
  console.log(DBOpenRequest.result)
  db = DBOpenRequest.result;
};

DBOpenRequest.onupgradeneeded = event => {
  let db = event.target.result;
  db.onerror = event => {
    console.error(event)
  };
  let objectStore = db.createObjectStore("tasks", { keyPath: "title" });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("hour", "hour", { unique: false });
  objectStore.createIndex("min", "min", { unique: false });
};
function addTask() {
  let newItem = [
    { 
      title: title.value,
      year: year.value,
      month: month.value,
      day: day.value,
      hour: hour.value,
      min: min.value
    }
  ];
  let transaction = db.transaction(["tasks"], "readwrite");
  let objectStore = transaction.objectStore("tasks");
  let objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    title.value = '';
    year.value = null;
    month.value = '';
    day.value = null;
    hour.value = null;
    min.value = null;
  };
}

/**** first task ended *****/

/**** second task
// making an "tasks" objectstore and add task fields
.
.
.
.
.
.
.
.
.

/**** second task ended *****/

/**** third task
//get task values from inputs and add new task to "tasks" objectStore
function addTask() {
  let newItem = [
    { 
      title: title.value,
      year: year.value,
      month: month.value,
      day: day.value,
      hour: hour.value,
      min: min.value
    }
  ];
.
.
.
.
.
.
.
.
.
  let objectStoreRequest = ???????;
  objectStoreRequest.onsuccess = event => {
    .
    .
    .
  };
}
/**** third task ended *****/


/**** fourth task *****/
//create a list of tasks and show them.
function displayData() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
/*
.
.
.
.
.
.
.
.
.
*/
}
function createListItem(contents) {
  const listItem = document.createElement('li');
  listItem.textContent = contents;
  return listItem;
}
/**** fourth task ended *****/


/**** fifth task *****/
//be able to delete task
function deleteItem(event) {
  /*let transaction = ???????;
  transaction.oncomplete = () => {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  };*/
};
/**** fifth task ended *****/
