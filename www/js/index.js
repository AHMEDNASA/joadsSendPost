/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        //////////////////////////////////////////////

        startApp();
        /////////////////////////////////////////////

    }
};

app.initialize();



function startApp(argument) {



    // /////////////////////////////////////////////////////////////////////////////////////

    // My Code - Start

    // /////////////////////////////////////////////////////////////////////////////////////



    // Initialize app
    var myApp = new Framework7({
        swipeBackPage: false
    });

    // If we need to use custom DOM library, let's save it to $$ variable:
    var $$ = Dom7;

    // Add view
    var mainView = myApp.addView('.view-main', {
        // Because we want to use dynamic navbar, we need to enable it for this view:
        dynamicNavbar: true,

    });


    $("#addNew").click(function(event) {
        createCard();
    });

}

counter=0;

function createCard(item) {

    var imageNumber=counter+1;

    var cardContent=
    '<div class="input-field col s12">'+
          '<p><input id="oldPrice" type="text" class="validate">'+
          '<label for="oldPrice">old Price</label></p>'+
        '</div>';

    var temp = '<div class="row">' +
        '<div class="col s12 m7">' +
        '<div class="card">' +
        '<div class="card-image">' +
        '<img id="image_'+imageNumber+'" class="responsive-img" src="">' +
        // '<span class="col s12 card-title " style="background-color:rgba(33,33,33,0.6)">' + +'</span>' +
        '</div>' +
        '<div class="card-content center" ><p>' +
        '' + cardContent +'' +
        '</p></div>' +
        '<div class="card-action">' +
        // '<a class="waves-effect waves-light btn my_btn" href="details.html?url=' + +'">Read More</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
counter++;
    $("#content").append(temp);
}

function cam() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;

        window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp', imageURI, null /* url */ , function() { console.log('share ok') }, function(errormsg) { alert(errormsg) });
    }

    function onFail(message) {
        alert('Failed because: ' + message);


    }
}