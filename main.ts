input.onButtonPressed(Button.B, function () {
    if (sonar.isSonar(Comparison.CLOSER, 70)) {
        startTime = input.runningTime()
        if (sonar.isSonar(Comparison.FURTHER, 70)) {
            endTime = input.runningTime()
        }
    }
    speed = endTime - startTime
    if (speed < 3000) {
        basic.showString("Fast")
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 3; index++) {
            music.playMelody("C B C B C B C B ", 120)
        }
        basic.showString("chase")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let endTime = 0
let startTime = 0
let speed = 0
speed = 0
startTime = 0
endTime = 0
