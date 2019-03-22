import Dexie from 'dexie'

const db = new Dexie('TODO')

const table = {
  todos: 'id++ , todo',
}

db.version(1).stores(table);
export var DB = db;
console.log('db', db);
// console.log(db.getDatabaseNames());