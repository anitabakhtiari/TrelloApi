﻿"use strict";

//var connection = new signalR.HubConnectionBuilder().withUrl("/NotificationHub").build();

this.connection = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/NotificationHub", { accessTokenFactory: () => this.loginToken })
    .build();




//Disable send button until connection is established
//document.getElementById("sendButton").disabled = true;

//connection.on("ReceiveMessage", function (user, message) {
//    var li = document.createElement("li");
//    document.getElementById("messagesList").appendChild(li);
//    // We can assign user-supplied strings to an element's textContent because it
//    // is not interpreted as markup. If you're assigning in any other way, you 
//    // should be aware of possible script injection concerns.
//    li.textContent = `${user} says ${message}`;
//});


connection.on("Alert", function (message) {
    alert(message);
});

connection.start().then(function () {
    connection.invoke('GetConnectionId')
        .then(function (connectionId) {
            //alert(connectionId);

        });

//connection.start().then(function () {
//    document.getElementById("sendButton").disabled = false;
//}).catch(function (err) {
//    return console.error(err.toString());
//});

//document.getElementById("sendButton").addEventListener("click", function (event) {
//    var user = document.getElementById("userInput").value;
//    var message = document.getElementById("messageInput").value;
//    connection.invoke("SendMessage", user, message).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});