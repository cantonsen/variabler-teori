input.onButtonPressed(Button.A, function () {
    tall_1 = randint(0, 10)
    svar = tall_1 + tall_2
})
input.onButtonPressed(Button.B, function () {
    tall_2 = randint(2, 10)
    svar = tall_1 * tall_2
})
input.onGesture(Gesture.Shake, function () {
    tall_1 = 0
    tall_2 = 0
    svar = 0
})
let svar = 0
let tall_2 = 0
let tall_1 = 0
tall_1 = 0
tall_2 = 0
svar = 0
basic.forever(function () {
    basic.showNumber(svar)
})
