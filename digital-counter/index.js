function updateClock(){
    const now= new Date();
    let hour=now.getHours().toString().padStart(2,0);
    const minute=now.getMinutes().toString().padStart(2,0);
    const half=hour>=12 ? "PM":"AM";
    hour=hour%12||12; 
     hour=hour.toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hour}:${minute}:${second}:${half}`;
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock,1000);