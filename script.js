
const pan1 = document.getElementById("1")
const pan2 = document.getElementById("2")
const pan3 = document.getElementById("3")
const pan4 = document.getElementById("4")
const pan5 = document.getElementById("5")

const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const e = document.getElementById("e")



function toggleFunction(item) {
    switch(item) {
        case 1:
            if (pan1.style.display === "none") {
                pan1.style.display = "block"; 
                a.style.fontWeight = "700"; 
            } else {
                pan1.style.display = "none";
                a.style.fontWeight = "400"; 
            };
        break;
        case 2:
            if (pan2.style.display === "none") {
                pan2.style.display = "block"; 
                b.style.fontWeight = "700";
            } else {
                pan2.style.display = "none";
                b.style.fontWeight = "400";
            };
        break;
        case 3:
            if (pan3.style.display === "none") {
                pan3.style.display = "block"; 
                c.style.fontWeight = "700";
            } else {
                pan3.style.display = "none";
                c.style.fontWeight = "400";
            };
        break;
        case 4:
            if (pan4.style.display === "none") {
                pan4.style.display = "block";
                d.style.fontWeight = "700"; 
                
            } else {
                pan4.style.display = "none";
                d.style.fontWeight = "400";
            };
        break;
        case 5:
            if (pan5.style.display === "none") {
                pan5.style.display = "block"; 
                e.style.fontWeight = "700";
            } else {
                pan5.style.display = "none";
                e.style.fontWeight = "400";
            };
        break;


    }
    
   
}



