@Component ('animation')

export class AnimationManager{
    animatorInstance = new Animator()

    first_form_animation = new AnimationState("Natraj|first_form_main_ismain")
    second_form_animation = new AnimationState("Natraj|Second")
    third_form_animation = new AnimationState("Natraj|Third_form")
    fourth_form_animation = new AnimationState("Natraj|Fourth")
    five_form_animation = new AnimationState("Natraj|NatrajAction_fifth")
    sixth_form_animation = new AnimationState("Natraj|Sixth_main")
    natraj_form_animation = new AnimationState("metarig|metarigAction.003")

    constructor()
    {
        this.animatorInstance.addClip(this.first_form_animation)
        this.animatorInstance.addClip(this.second_form_animation)
        this.animatorInstance.addClip(this.third_form_animation)
        this.animatorInstance.addClip(this.fourth_form_animation)
        this.animatorInstance.addClip(this.five_form_animation)
        this.animatorInstance.addClip(this.sixth_form_animation)
        this.animatorInstance.addClip(this.natraj_form_animation)   
    }
}