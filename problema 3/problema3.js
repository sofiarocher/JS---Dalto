free = false; 

const validateClient = (time) => {
    let age = prompt ("Cual es tu edad?")
        if (age >= 18) {
            if (time >= 2 && !free && time < 7) {
                alert(`Podes pasar gratis, la hora es ${time}hs`)
                free = true;                
            }
            else {
                alert (`Tenes que abonar la entrada, el total es de $10. La hora es ${time}`)
            }            
        } else {
            alert("No podes pasar, sos menor.")
        }
    }

validateClient (1);
validateClient (2);
validateClient (3);
validateClient (4);
validateClient (5);
