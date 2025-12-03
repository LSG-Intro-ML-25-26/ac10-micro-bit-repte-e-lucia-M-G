basic.showString("REPTE 6-7")
let modo = 0
let x = 2
let y = 2
basic.showIcon(IconNames.Heart)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (modo == 0) {
        modo = 1
        basic.showString("G")
    } else {
        modo = 0
        basic.showString("T")
    }
    
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (modo == 1) {
        x = 2
        y = 2
        basic.showIcon(IconNames.Happy)
        basic.pause(300)
    }
    
})
basic.forever(function on_forever() {
    let temp: number;
    let altura: number;
    let acelX: number;
    let acelY: number;
    
    if (modo == 0) {
        temp = input.temperature()
        if (temp > 40) {
            temp = 40
        }
        
        altura = Math.idiv(temp * 5, 40)
        basic.clearScreen()
        //  Gráfico
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (j < altura) {
                    led.plotBrightness(i, 4 - j, 255)
                }
                
            }
        }
    } else {
        acelX = input.acceleration(Dimension.X)
        acelY = input.acceleration(Dimension.Y)
        //  Inclinación
        if (acelX > 150 && x < 4) {
            x += 1
        }
        
        if (acelX < -150 && x > 0) {
            x -= 1
        }
        
        if (acelY > 150 && y < 4) {
            y += 1
        }
        
        if (acelY < -150 && y > 0) {
            y -= 1
        }
        
        basic.clearScreen()
        led.plotBrightness(x, y, 255)
    }
    
    basic.pause(200)
})
