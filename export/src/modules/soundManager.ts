@Component ('sound')
export class SoundManager{
    pondSound = new AudioClip("sounds/Pond_water.mp3")
    shivTandavBand = new AudioClip("sounds/ShivaTandavaStotram.mp3")
    shivTandavOrignal = new AudioClip("sounds/Shiva Tandava Stotram.mp3")
    omOrignal = new AudioClip("sounds/testfor peace.mp3")
    constructor(){
        this.pondSound.volume = 0.002
        this.omOrignal.volume = 0.0001
    }
}