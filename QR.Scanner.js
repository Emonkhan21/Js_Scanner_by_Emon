const start_btn = document.getElementById( "start_btn" );


start_btn.addEventListener('click', function(){
    const userInput = document.getElementById("userInput").value;
    const userW = document.getElementById("userSize1").value;
    const userH = document.getElementById("userSize2").value;
    const userCode = document.getElementById("QRimage");
    userCode.src=`https://api.qrserver.com/v1/create-qr-code/?size=${userW}x${userH}&data=${userInput}`;
})
