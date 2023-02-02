let dineroHomero = prompt ("¿Cuánto dinero tienes, Homero?")

dineroHomero = parseInt(dineroHomero)

if (dineroHomero >= 1 && dineroHomero < 2) {
    alert ("Te alcanza para un ticket, Homero!")
}

else if (dineroHomero >= 2 && dineroHomero < 3) {
    alert ("Te alcanza para dos tickets, Homero!")
}

else if (dineroHomero >= 3) {
    alert ("Te alcanza para tres tickets, Homero!")
    alert ("Gracias por comprar tres tickets. Regalarás tu vuelto de: $" + (dineroHomero - 3))
}

else {
    alert ("Lo sentimos, no puedes realizar esta compra, Homero.")
}
