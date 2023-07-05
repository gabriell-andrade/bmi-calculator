function calculate() {
    var height = (document.getElementById("height").value)
    var heightInCm = height/100
    var weight = document.getElementById("weight").value
    var imc = weight/heightInCm**2
    var text = ""

    if (height < 3) {
        text = "Por favor, insira a altura em centímetros!"
    } else if (imc < 18.5) {
        text = "Você está magro demais!"
    } else if (imc < 24.9) {
        text = "Você está com peso ideal!"
    } else if (imc < 29.9) {
        text = "Você está com sobrepeso!"
    } else if (imc < 39.9) {
        text = "Você está com obesidade!"
    } else if (imc > 39.9) {
        text = "Você está com obesidade mórbida!"
    }
    document.getElementById("text_area").innerText=text
}