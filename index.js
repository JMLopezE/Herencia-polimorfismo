class FiguraGeometrica {
        
        constructor(Ancho, Largo, Radio,) {
                this.ancho = Ancho;
                this.largo = Largo
                this.radio = Radio
        }

        Area() {
            console.log(`El área del cuadrado es: ${(this.ancho) * (this.largo)} `)
        }

        Perimetro() {
            console.log(`El perímetro del cuadrado es: ${(this.ancho) * (this.largo) * 2}`)
        }
}

class Circulo extends FiguraGeometrica{
        Area() {
            console.log(`El área del circulo es: ${(this.radio^2) * (3.14)}`)
        }

        Perimetro() {
            console.log(`El perímetro de un circulo es:  ${(2) * (3.14) * (this.radio)}`)
        }
}

class Cuadrado extends FiguraGeometrica{
        Area() {
            console.log(`El área del cuadrado es: ${(this.ancho) * (this.largo)} `)
        }

        Perimetro() {
            console.log(`El perímetro del cuadrado: ${(this.ancho) * (this.largo) * (2)}`)
        }
}

class Rectangulo extends FiguraGeometrica{
        Area() {
            console.log(`El área del rectangulo : ${(this.ancho) * (this.largo)} `)
        }

        Perimetro() {
            console.log(`El perímetro del rectangulo es: ${(this.ancho) * (this.largo) * (2)}`)
        }
}

const medida_circulo = new Circulo (12, 5, 4)
medida_circulo.Area()
medida_circulo.Perimetro()

const medida_cuadrado = new Cuadrado (10, 10)
medida_cuadrado.Area()
medida_cuadrado.Perimetro()

const medida_rectangulo = new Rectangulo (3, 8)
medida_rectangulo.Area()
medida_rectangulo.Perimetro()