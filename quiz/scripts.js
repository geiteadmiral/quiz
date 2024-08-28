 let totalScore = 0

function riktig (event) {
    event.target.innerText += "\n\nRiktig"
    event.target.style.backgroundColor = "green"
    totalScore += 1
}

function feil (event) {
    event.target.innerText += "\n\nFeil"
    event.target.style.backgroundColor = "red"
}

//spørsmål 1

let spm1svart = false

let spørsmål1 = document.querySelectorAll(".spørsmål1")

spørsmål1.forEach((alternativ) => {
    alternativ.addEventListener("click", spørsmål1Funk)
})

function spørsmål1Funk (event) {
    if (!spm1svart) {
        if (event.target.id == "riktig1") {
            riktig(event)
            spm1svart = true
        } else {
            feil(event)
            spm1svart = true
        }
    } else {
        alert("Du har bare ett forsøk per spørsmål")
    }
}

//spørsmål 2

let spm2svart = false

let spørsmål2 = document.querySelectorAll(".spørsmål2")

spørsmål2.forEach((alternativ) => {
    alternativ.addEventListener("click", spørsmål2Funk)
})

function spørsmål2Funk (event) {
    if (!spm2svart) {
        if (event.target.id == "riktig2") {
            riktig(event)
            spm2svart = true
        } else {
            feil(event)
            spm2svart = true
        }
    } else {
        alert("Du har bare ett forsøk per spørsmål")
    }
}

