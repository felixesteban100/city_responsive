



// Create a function for getting a variable value
function change() {
    var btn = document.getElementById('button');
    
    switch(btn.value){
        case "none":
            btn.value="night";
            setTime("night");
        break;

        case "night":
            btn.value="day";    
            setTime("day");
        break;

        case "day":
            btn.value="night";    
            setTime("night");
        break;
    } 
}

// Create a function for setting a variable value
function setTime(time) {

    var root = document.querySelector(':root');
    var sky = document.querySelector('.sky');
    var btn = document.querySelector('#button');
    var colorback = document.querySelector('body');

    /* alert("The value of --building-color1 is: " + rs.setPropertyValue('--building-color1')); */
    if(time=="day"){
        root.style.setProperty('--building-color1', '#aa80ff');
        root.style.setProperty('--building-color2', '#66cc99');
        root.style.setProperty('--building-color3', '#cc6699');
        root.style.setProperty('--building-color4', '#538cc6');

        root.style.setProperty('--window-color1', '#bb99ff');
        root.style.setProperty('--window-color2', '#8cd9b3');
        root.style.setProperty('--window-color3', '#d98cb3');
        root.style.setProperty('--window-color4', '#d98cb3');
        sky.style.background = "radial-gradient(closest-corner circle at 15% 15%,#ffcf33,#ffcf33 20%,#ffff66 21%,#bbeeff 100%)";
        btn.style.backgroundColor = "green"
        colorback.style.background = "radial-gradient(closest-corner circle at 15% 15%,#ffcf33,#ffcf33 20%,#ffff66 21%,#bbeeff 100%)";
        
    }
    
    if(time=="night"){
        root.style.setProperty('--building-color1', '#1c0b3e');
        root.style.setProperty('--building-color2', '#193e2c');
        root.style.setProperty('--building-color3', '#391728');
        root.style.setProperty('--building-color4', '#183048');

        root.style.setProperty('--window-color1', 'white');
        root.style.setProperty('--window-color2', 'white');
        root.style.setProperty('--window-color3', 'white');
        root.style.setProperty('--window-color4', 'white');
        sky.style.background = "radial-gradient(closest-corner circle at 15% 15%,#ccc,#ccc 20%,#445 21%,#223 100%)";
        btn.style.backgroundColor = "blue";
        colorback.style.background = "radial-gradient(closest-corner circle at 15% 15%,#ccc,#ccc 20%,#445 21%,#223 100%)";
    }
  
}