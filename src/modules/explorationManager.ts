import utils from "node_modules/decentraland-ecs-utils/index"

export const forms_unlocked  = [false, false, false, false, false, false]

export function checkPossiblityOfDoorOpen(message: UIText)
{
    forms_unlocked.forEach(element => {
        if(element == false)
            return
    })
    log("Game OVER")
    if(forms_unlocked[0] && forms_unlocked[1] && forms_unlocked[2] && forms_unlocked[3] && forms_unlocked[4] && forms_unlocked[5])
        message.value = "YOU HAVE UNLOCKED ALL THE FORMS OF SHIV TANDAV"    
}

export function MeditateAndUnlockTripuraForm(message: UIText) {
    let timeRemaning = 60
    let entitty = new Entity()
    engine.addEntity(entitty)
    entitty.addComponentOrReplace(new utils.Interval(1000, (): void => {
      timeRemaning--
      if(timeRemaning < 0)
      {
        forms_unlocked[3] = true
        message.value = 'You have unlocked tripura tandav...'
        checkPossiblityOfDoorOpen(message)
        engine.removeEntity(entitty)
        return
      }
      else{
        message.value = "Meditate for: "  + timeRemaning.toString() + " seconds to unlock tripura tandav"
      }
    }))
  }