basic.forever(function () {
    if (input.lightLevel() > 26) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
        basic.pause(2000)
        music.stopMelody(MelodyStopOptions.All)
    }
})
