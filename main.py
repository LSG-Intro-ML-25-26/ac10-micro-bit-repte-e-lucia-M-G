basic.show_string("REPTE 6-7")
modo = 0
x = 2
y = 2
basic.show_icon(IconNames.HEART)

def on_button_pressed_a():
    global modo
    if modo == 0:
        modo = 1
        basic.show_string("G")
    else:
        modo = 0
        basic.show_string("T")
    basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x, y
    if modo == 1:
        x = 2
        y = 2
        basic.show_icon(IconNames.HAPPY)
        basic.pause(300)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global x, y
    if modo == 0:
        temp = input.temperature()
        if temp > 40:
            temp = 40
        altura = Math.idiv(temp * 5, 40)
        basic.clear_screen()
        
        # Gráfico
        for i in range(5):
            for j in range(5):
                if j < altura:
                    led.plot_brightness(i, 4 - j, 255)
    else:
        acelX = input.acceleration(Dimension.X)
        acelY = input.acceleration(Dimension.Y)
        
        # Inclinación
        if acelX > 150 and x < 4:
            x += 1
        if acelX < -150 and x > 0:
            x -= 1
        if acelY > 150 and y < 4:
            y += 1
        if acelY < -150 and y > 0:
            y -= 1
        basic.clear_screen()
        led.plot_brightness(x, y, 255)
    basic.pause(200)
basic.forever(on_forever)