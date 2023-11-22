let heroNameAndXP = ["Rilgar" , 10001]
let message = "O herói de nome " + heroNameAndXP[0] + " está no nível de ";

switch(true){
    case heroNameAndXP[1] <= 1000:
    console.log(message + "Ferro")
    break

    case heroNameAndXP[1] > 1000 && heroNameAndXP[1] <= 2000:
    console.log(message + "Bronze")
    break
    
    case heroNameAndXP[1] > 2000 && heroNameAndXP[1] <= 5000:
    console.log(message + "Prata")
    break

    case heroNameAndXP[1] > 5000 && heroNameAndXP[1] <= 7000:
    console.log(message + "Ouro")
    break

    case heroNameAndXP[1] > 7000 && heroNameAndXP[1] <= 8000:
    console.log(message + "Platina")
    break

    case heroNameAndXP[1] > 8000 && heroNameAndXP[1] <= 9000:
    console.log(message + "Ascendente")
    break

    case heroNameAndXP[1] > 9000 && heroNameAndXP[1] <= 10000:
    console.log(message + "Imortal")
    break

    case heroNameAndXP[1] > 10000: 
    console.log(message + "Radiante")
    break
}