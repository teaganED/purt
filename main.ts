basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
