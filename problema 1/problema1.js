let dineroRoberto = prompt("¿Cuánto dinero tenes, Roberto?");
let dineroPedro = prompt("¿Cuánto dinero tenes, Pedro?");
let dineroCofla = prompt("¿Cuánto dinero tenes, Cofla?"); 

dineroCofla = parseInt(dineroCofla)

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Te alcanza para el helado de agua, Roberto")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Te alcanza para el helado de crema, Roberto")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Te alcanza para el helado de mascarpone, Roberto")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Te alcanza para el helado de tramontana, Roberto")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Te alcanza para el helado de sambayón, Roberto")
}
else if (dineroRoberto >= 2.9) {
    alert("Te alcanza para el helado de pistacho o el pote de 1/4kg, Roberto")
}
else {
    alert("Lo sentimos, no puedes realizar tu compra, Roberto.")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Te alcanza para el helado de agua, Pedro")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Te alcanza para el helado de crema, Pedro")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Te alcanza para el helado de mascarpone, Pedro")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Te alcanza para el helado de tramontana, Pedro")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Te alcanza para el helado de sambayón, Pedro")
}
else if (dineroPedro >= 2.9) {
    alert("Te alcanza para el helado de pistacho o el pote de 1/4kg, Pedro")
}
else {
    alert("Lo sentimos, no puedes realizar tu compra, Pedro.")
}

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Te alcanza para el helado de agua, Cofla")
    alert("Tu vuelto es:" + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Te alcanza para el helado de crema, Cofla")
    alert("Tu vuelto es:" + (dineroCofla - 1))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Te alcanza para el helado de mascarpone, Cofla")
    alert("Tu vuelto es:" + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Te alcanza para el helado de tramontana, Cofla")
    alert("Tu vuelto es:" + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Te alcanza para el helado de sambayón, Cofla")
    alert("Tu vuelto es:" + (dineroCofla - 1.8))
}
else if (dineroCofla >= 2.9) {
    alert("Te alcanza para el helado de pistacho o el pote de 1/4kg, Cofla")
    alert("Tu vuelto es: $" + (dineroCofla - 2.9))
}
else {
    alert("Lo sentimos, no puedes realizar tu compra, Cofla.")
}
