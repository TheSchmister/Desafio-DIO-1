let heroNameAndXP = ["Rilgar" , 10000]
let message = "O herói de nome " + heroNameAndXP[0] + " está no nível de ";

switch(true){
    case heroNameAndXP[1] <= 1000:
    message += "Ferro"
    break

    case heroNameAndXP[1] > 1000 && heroNameAndXP[1] <= 2000:
    message += "Bronze"
    break
    
    case heroNameAndXP[1] > 2000 && heroNameAndXP[1] <= 5000:
    message += "Prata"
    break

    case heroNameAndXP[1] > 5000 && heroNameAndXP[1] <= 7000:
    message += "Ouro"
    break

    case heroNameAndXP[1] > 7000 && heroNameAndXP[1] <= 8000:
    message += "Platina"
    break

    case heroNameAndXP[1] > 8000 && heroNameAndXP[1] <= 9000:
    message += "Ascendente"
    break

    case heroNameAndXP[1] > 9000 && heroNameAndXP[1] <= 10000:
    message += "Imortal"
    break

    case heroNameAndXP[1] > 10000: 
    message += "Radiante"
    break
}
console.log(message)