import { Audio } from 'expo-av'

export class MusicalInstrument {
    soundObject: Audio.Sound
    constructor() {
        this.soundObject = new Audio.Sound
    }
    playC() {

    }
    playD() {

    }
    playE() {

    }
    playF() {

    }
    playG() {

    }
    async playA() {
        try {
            await Audio.Sound.createAsync(
                require('../assets/pianoA.mp3'),
                { shouldPlay: true }
            );
        } catch (error) {
            console.error(error)
        }
    }
}