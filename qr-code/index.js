let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImage");
let qrTxt = document.getElementById("qrText");

function showQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value;
    qrTxt.value = "";
    
}
