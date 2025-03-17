function generateQR() {
    let qrInput = document.getElementById("qr-input").value;
    let qrCodeDiv = document.getElementById("qr-code");
    let downloadBtn = document.getElementById("download-btn");

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    if (qrInput.trim() === "") {
        alert("Please enter text or a URL!");
        return;
    }

    // Generate QR Code
    let qr = new QRCode(qrCodeDiv, {
        text: qrInput,
        width: 200,
        height: 200
    });

    // Show Download Button
    setTimeout(() => {
        downloadBtn.style.display = "block";
    }, 500);
}

function downloadQR() {
    let qrCanvas = document.querySelector("#qr-code canvas");
    
    if (!qrCanvas) {
        alert("Generate a QR code first!");
        return;
    }

    let qrImage = qrCanvas.toDataURL("image/png");

    let link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png";
    link.click();
}
