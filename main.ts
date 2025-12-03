basic.showString("REPTE 6-7")
let modo = 0
basic.showIcon(IconNames.Heart)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let modo: number;
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
    let x: number;
    let y: number;
    if (modo == 1) {
        x = 2
        y = 2
        basic.showIcon(IconNames.Happy)
        basic.pause(300)
    }
    
})
