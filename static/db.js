var db;

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
var request = indexedDB.open("ToDoDB", 1);
var customerObjectStore; ß
request.onerror = function(event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};

request.onsuccess = function(event) {
  console.log("data added");
  // customerObjectStore.put({key:'name', value:'my name'});

  // event.target.result === customer.ssn;
};

// request.onupgradeneeded = function(event) {
//   console.log('db can be used')
//   db = event.target.result;
//   var objectStore = db.createObjectStore("todo", { keyPath: "todo" });
//   var transaction = db.transaction(["todo"], "readwrite");
//   var objectStore = transaction.objectStore("todo");
//   var request = objectStore.add("hello");
// };
request.onupgradeneeded =
    function(event) {
        window.db = event.target.result;
        var objectStore = window.db.createObjectStore("TODO", { keyPath: "todo" });
        objectStore.createIndex("todo", "todo", { unique: false });
        // objectStore.createIndex("email", "email", { unique: false });
        // objectStore.transaction.oncomplete = function(event) {
        //   customerObjectStore = db.transaction(["TODO"], "readwrite").objectStore("TODO")
        //   customerObjectStore.add( { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" , ads:"asdasd"})
        // };
    }