import React from 'react'
import Peer from "simple-peer"
import "jquery";

function Webcam() {
    window.onload = function(){
        navigator.webkitGetUserMedia({ video: {height: 400, width: 500}, audio: false}, function(stream) {
            var peer = new Peer({
                initiator: window.location.hash === "#init",
                trickle: false,
                stream: stream
            })
            peer.on("signal", function (data) {
                document.getElementById("yourId").value = JSON.stringify(data);
            })

            document.getElementById("connect").addEventListener("click", function () {
                var peerId = JSON.parse(document.getElementById("peerId").value)
                peer.signal(peerId)
            })

            document.getElementById("send").addEventListener("click", function () {
                var yourMessage = document.getElementById("yourMessage").value
                peer.send(yourMessage)
                document.getElementById("messages").textContent += "You: " + yourMessage + "\n"
                document.getElementById("yourMessage").value = "";
                
            })

            peer.on("data", function(data) {
                document.getElementById("messages").textContent += "Peer: " + data + "\n"
            })

            peer.on("stream", function (stream) {
                var webcam = document.getElementById("webcam")
                var video = document.createElement("video");

                
                video.srcObject = stream;
                video.play();
                webcam.appendChild(video)
                video.style.border = "5px solid rgba(49, 142, 145, 0.755)"
                video.style.borderRadius = "5px"
                video.style.boxShadow = "2px 2px 10px"
            })
        }, function (err) {
            console.log(err)
        });
    }
    








    // var constraints = {
    //     audio: false,
    //     video: {height: 300, width: 400}
    // }

    // navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    //     var video = document.getElementById("yourVideo");
    //     video.srcObject = stream;
    //     video.play()
    // })
    return (
        <div style = {containerStyle} className = "container" id = "fullCon">
            <div className = "row">
                <div className = "col-md-12">
                    <div style = { connectFormStyle } className = "connect-form">
                        <div className = "row">
                            <div className = "col-md-6">
                                <div className = "yourId-form">
                                    <label>Your ID:</label><br/>
                                    <textarea id = "yourId"></textarea>
                                </div>
                            </div>
                            <div className = "col-md-6">
                                <div className = "friendId-form">
                                    <label>Peer ID:</label><br/>
                                    <textarea id = "peerId"></textarea>
                                </div>
                                <button id = "connect">connect</button><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style = { communicateFormStyle } className = "connect-form" id= "conn-form">
                <div className = "row">
                    <div className = "col-md-6" id = "webcam"></div>
                    <div className = "col-md-6">
                        <div style = {messageFormStyle} className = "message-form">
                            <label>Enter message:</label><br/>
                            <textarea style = {{width: "100%"}} id = "yourMessage"></textarea><br/>
                            <button id = "send">send</button><br/>
                        </div>
                        <pre style = {{marginTop: "20px", height: "240px",overflow: "auto",}} id = "messages"></pre>
                    </div>
                    
                </div>
            </div>
                
                
            
            
            
            
            
            
        </div>
    )
}

const connectFormStyle = {
    border: "1px solid black",
    width: "fit-content",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    boxShadow: "2px 2px 10px"
}

const messageFormStyle = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    boxShadow: "2px 2px 10px"
}

const containerStyle = {
    marginTop: "10px"
}

const communicateFormStyle = {
    border: "1px solid black",
    //width: "fit-content",
    padding: "20px",
    borderRadius: "5px",
    marginTop: "20px",
    backgroundColor: "white",
    boxShadow: "2px 2px 10px"
}
export default Webcam;