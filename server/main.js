import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TaskCollection';
import { UserCollection } from '/imports/api/UserCollection';

const insertTask = taskText => TasksCollection.insert({text: taskText});
//const insertUser = user => UserCollection.insert({nombre: 'Gerardo', correo: 'correo@corre.com', password: '123456'})

Meteor.startup(() => {
    
})