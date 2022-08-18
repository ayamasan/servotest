control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    ボタンA = 0
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    ボタンA = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    ボタンB = 0
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    ボタンB = 1
})
let ボタンB = 0
let ボタンA = 0
let 開始時間 = 500
let 終了時間 = 2500
let 角度 = 90
let パルス幅 = Math.map(角度, 0, 180, 開始時間, 終了時間)
ボタンA = 0
ボタンB = 0
basic.forever(function () {
    if (ボタンA != 0) {
        if (角度 < 180) {
            角度 += 2
        }
    }
    if (ボタンB != 0) {
        if (角度 > 0) {
            角度 += -2
        }
    }
    パルス幅 = Math.map(角度, 0, 180, 開始時間, 終了時間)
    pins.servoSetPulse(AnalogPin.P9, パルス幅)
    basic.pause(20)
})
