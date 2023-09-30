import { KittenBotGrapeBit } from "@devicescript/drivers"

const board = new KittenBotGrapeBit()

const acc = await board.startAccelerometer()
const buzzer = await board.startBuzzer()
const m1 = await board.startMotor1()
const m2 = await board.startMotor1()
const bA = await board.startButtonA()
const bB = await board.startButtonA()
