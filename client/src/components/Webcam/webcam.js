import React from 'react'
import Peer from "simple-peer"

function Webcam() {
    window.onload = function(){
        navigator.webkitGetUserMedia({ video: true, audio: true}, function(stream) {
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
            })

            peer.on("data", function(data) {
                document.getElementById("messages").textContent += data + "\n"
            })

            peer.on("stream", function (stream) {
                var root = document.getElementById("root")
                var video = document.createElement("video");
                root.appendChild(video)

                video.srcObject = stream;
                video.play();
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
        <div>
            <label>Your ID:</label><br/>
            <textarea id = "yourId"></textarea><br/>
            {/* <video id = "yourVideo" autoPlay muted/><br/> */}
            <label>Peer ID:</label><br/>
            <textarea id = "peerId"></textarea><br/>
            {/* <video id = "peerVideo" autoPlay muted/><br/> */}
            <button id = "connect">connect</button><br/><br/>

            <label>Enter message:</label><br/>
            <textarea id = "yourMessage"></textarea><br/>
            <button id = "send">send</button><br/>
            <pre id = "messages"></pre>
        </div>
    )
}
export default Webcam;