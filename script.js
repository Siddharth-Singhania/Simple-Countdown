const endDate = "8 June 2026 01:59 AM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000; //seconds
    if(diff<0){ //stopping countdown so that it is not negative
        alert("hey there!\nWe are here!");
        clearInterval(intervalId); //stopping the interval
        return -1;
    }
    //convert into days
    console.log(diff);
    inputs[0].value = Math.floor(diff/(24*60*60)); //days math.floor -> lower integer
    inputs[1].value = Math.floor(diff/(60*60)%24); //hours remaining --using %
    inputs[2].value = Math.floor((diff/60) % 24 % 60); //minutes remaining
    inputs[3].value = Math.floor(diff % 24 % 60 % 60); //seconds remaining
}

//initial call
clock();
 //calling the function every second
intervalId = setInterval(clock,1000);
