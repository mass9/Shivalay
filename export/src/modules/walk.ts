import { animals } from "./switchGoals";

// component to store lerp data
@Component('lerpData')
export class LerpData {
  target: Vector3 = Vector3.Zero()
  origin: Vector3 = Vector3.Zero()

  constructor(_target: Vector3, _origin: Vector3){
      this.target = _target
      this.origin = _origin
  }
  fraction: number = 0
}

// walk
export class LerpMove implements ISystem {
    update(dt: number) {
      for (let animal of animals.entities) {
          log(animal)
        let transform = animal.getComponent(Transform)
        let walk = animal.getComponent(LerpData)
        transform.lookAt(walk.target)
        if (walk.fraction < 1) {
        //   if (!isInBounds(walk.target)) return
          transform.position = Vector3.Lerp(
            walk.origin,
            walk.target,
            walk.fraction
          )
          walk.fraction += 1 / 90
        }
      }
    }
}

// check if the target is inside the scene's bounds
export function isInBounds(position: Vector3): boolean {
    return (
      position.x > 0.5 && position.x < 9.5 && position.z > 0.5 && position.z < 9.5
    )
}