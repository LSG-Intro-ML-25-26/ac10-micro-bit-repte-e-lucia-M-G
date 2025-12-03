basic.show_string("REPTE 6-7")
modo = 0
basic.show_icon(IconNames.HEART)
def on_button_pressed_a():
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
    if modo == 1:
        x = 2
        y = 2
        basic.show_icon(IconNames.HAPPY)
        basic.pause(300)
input.on_button_pressed(Button.B, on_button_pressed_b)
def on_forever():
    if modo == 0:
        pass
    else:
        pass
    basic.pause(200)
basic.forever(on_forever)