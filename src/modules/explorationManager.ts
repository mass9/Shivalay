export const forms_unlocked  = [false, false, false, false, false, false]

export function checkPossiblityOfDoorOpen()
{
    forms_unlocked.forEach(element => {
        if(element == false)
            return
    });
    log("Game OVER")    
}