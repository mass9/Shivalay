import utils from "../node_modules/decentraland-ecs-utils/index"
import {SoundManager} from "./modules/soundManager"
import { LerpData, LerpMove } from "./modules/walk";
import { Behavior, Goal } from "./modules/switchGoals";
// import{AnimationManager} from "./modules/animationManager"
import{forms_unlocked, checkPossiblityOfDoorOpen} from "./modules/explorationManager"
// Add systems
engine.addSystem(new LerpMove())

////////////////////////
const sceneAnimator_1 = new Animator()
const sceneAnimator_2 = new Animator()
const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const signboard_shivalay = new Entity()
signboard_shivalay.setParent(scene)
const gltf_signboard_shape = new GLTFShape('models/Board_v1.glb')
signboard_shivalay.addComponentOrReplace(gltf_signboard_shape)
const transform_1 = new Transform({
  position: new Vector3(36,0,1),
  scale: new Vector3(3.5,3,3),
  rotation: Quaternion.Euler(0,35,0)
})
signboard_shivalay.addComponentOrReplace(transform_1)
signboard_shivalay.addComponentOrReplace(new OnClick(() => {
  forms_unlocked[1] = true
  message.value = "You have unlocked Anand Tandav, keep exploring"
  checkPossiblityOfDoorOpen()
}))
engine.addEntity(signboard_shivalay)

const shiveling_with_Colliderv4 = new Entity()
shiveling_with_Colliderv4.setParent(scene)
const gltfShape = new GLTFShape('models/Shiveling_with_Colliderv4.glb')
shiveling_with_Colliderv4.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(33, -3, 30),
  rotation: new Quaternion(0, -1.0000000000000002, 0, -4.163336342344337e-17),
  scale: new Vector3(1.5773502691896255, 1.5773502691896255, 1.5773502691896255)
})
shiveling_with_Colliderv4.addComponentOrReplace(transform_2)
engine.addEntity(shiveling_with_Colliderv4)

const natraj_ring = new Entity()
natraj_ring.setParent(scene)
const gltfShape_natraj = new GLTFShape('models/boundaries_circle.glb')
natraj_ring.addComponentOrReplace(gltfShape_natraj)
const transform_natraj_ring = new Transform({
  position: new Vector3(33,2.5,31),
  scale: new Vector3(8,8,8)
})
natraj_ring.addComponentOrReplace(transform_natraj_ring)
natraj_ring.addComponentOrReplace(new SoundManager())
const soundClip_1 = natraj_ring.getComponent(SoundManager).shivTandavBand
natraj_ring.addComponentOrReplace(new AudioSource(soundClip_1))
natraj_ring.getComponent(AudioSource).playing = true
natraj_ring.getComponent(AudioSource).loop = true
engine.addEntity(natraj_ring)

const natrajShiv = new Entity()
natrajShiv.setParent(scene)
const natraj_form = new AnimationState("Natraj|Natraj|Natraj|Natraj|Natraj|NatrajAction_fifth|Natraj|NatrajAc_")
const glthShape_natrajShiv = new GLTFShape('models/natraj_form.glb')
natrajShiv.addComponentOrReplace(glthShape_natrajShiv)
const transform_natraj_shiv = new Transform({
  position: new Vector3(31.5,-14,59),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(4,4,4)
})
natrajShiv.addComponentOrReplace(transform_natraj_shiv)
sceneAnimator_1.addClip(natraj_form)
natrajShiv.addComponent(sceneAnimator_1)
natraj_form.play()
natraj_form.looping = true
natrajShiv.addComponentOrReplace(new OnClick(() => {
  message.value = 'Natraj'
  clearText()
}))
engine.addEntity(natrajShiv)

const floorBaseGrass_01 = new Entity()
floorBaseGrass_01.setParent(scene)
const gltfShape_2 = new GLTFShape('models/FloorBaseGrass_01/FloorBaseGrass_01.glb')
floorBaseGrass_01.addComponentOrReplace(gltfShape_2)
const transform_3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01.addComponentOrReplace(transform_3)
engine.addEntity(floorBaseGrass_01)

const floorBaseGrass_01_2 = new Entity()
floorBaseGrass_01_2.setParent(scene)
floorBaseGrass_01_2.addComponentOrReplace(gltfShape_2)
const transform_4 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_2.addComponentOrReplace(transform_4)
engine.addEntity(floorBaseGrass_01_2)

const floorBaseGrass_01_3 = new Entity()
floorBaseGrass_01_3.setParent(scene)
floorBaseGrass_01_3.addComponentOrReplace(gltfShape_2)
const transform_5 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_3.addComponentOrReplace(transform_5)
engine.addEntity(floorBaseGrass_01_3)

const floorBaseGrass_01_4 = new Entity()
floorBaseGrass_01_4.setParent(scene)
floorBaseGrass_01_4.addComponentOrReplace(gltfShape_2)
const transform_6 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_4.addComponentOrReplace(transform_6)
engine.addEntity(floorBaseGrass_01_4)

const floorBaseGrass_01_5 = new Entity()
floorBaseGrass_01_5.setParent(scene)
floorBaseGrass_01_5.addComponentOrReplace(gltfShape_2)
const transform_7 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_5.addComponentOrReplace(transform_7)
engine.addEntity(floorBaseGrass_01_5)

const floorBaseGrass_01_6 = new Entity()
floorBaseGrass_01_6.setParent(scene)
floorBaseGrass_01_6.addComponentOrReplace(gltfShape_2)
const transform_8 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_6.addComponentOrReplace(transform_8)
engine.addEntity(floorBaseGrass_01_6)

const floorBaseGrass_01_7 = new Entity()
floorBaseGrass_01_7.setParent(scene)
floorBaseGrass_01_7.addComponentOrReplace(gltfShape_2)
const transform_9 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_7.addComponentOrReplace(transform_9)
engine.addEntity(floorBaseGrass_01_7)

const floorBaseGrass_01_8 = new Entity()
floorBaseGrass_01_8.setParent(scene)
floorBaseGrass_01_8.addComponentOrReplace(gltfShape_2)
const transform_10 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_8.addComponentOrReplace(transform_10)
engine.addEntity(floorBaseGrass_01_8)

const floorBaseGrass_01_9 = new Entity()
floorBaseGrass_01_9.setParent(scene)
floorBaseGrass_01_9.addComponentOrReplace(gltfShape_2)
const transform_11 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_9.addComponentOrReplace(transform_11)
engine.addEntity(floorBaseGrass_01_9)

const floorBaseGrass_01_10 = new Entity()
floorBaseGrass_01_10.setParent(scene)
floorBaseGrass_01_10.addComponentOrReplace(gltfShape_2)
const transform_12 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_10.addComponentOrReplace(transform_12)
engine.addEntity(floorBaseGrass_01_10)

const floorBaseGrass_01_11 = new Entity()
floorBaseGrass_01_11.setParent(scene)
floorBaseGrass_01_11.addComponentOrReplace(gltfShape_2)
const transform_13 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_11.addComponentOrReplace(transform_13)
engine.addEntity(floorBaseGrass_01_11)

const floorBaseGrass_01_12 = new Entity()
floorBaseGrass_01_12.setParent(scene)
floorBaseGrass_01_12.addComponentOrReplace(gltfShape_2)
const transform_14 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_12.addComponentOrReplace(transform_14)
engine.addEntity(floorBaseGrass_01_12)

const floorBaseGrass_01_13 = new Entity()
floorBaseGrass_01_13.setParent(scene)
floorBaseGrass_01_13.addComponentOrReplace(gltfShape_2)
const transform_15 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_13.addComponentOrReplace(transform_15)
engine.addEntity(floorBaseGrass_01_13)

const floorBaseGrass_01_14 = new Entity()
floorBaseGrass_01_14.setParent(scene)
floorBaseGrass_01_14.addComponentOrReplace(gltfShape_2)
const transform_16 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_14.addComponentOrReplace(transform_16)
engine.addEntity(floorBaseGrass_01_14)

const floorBaseGrass_01_15 = new Entity()
floorBaseGrass_01_15.setParent(scene)
floorBaseGrass_01_15.addComponentOrReplace(gltfShape_2)
const transform_17 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_15.addComponentOrReplace(transform_17)
engine.addEntity(floorBaseGrass_01_15)

const floorBaseGrass_01_16 = new Entity()
floorBaseGrass_01_16.setParent(scene)
floorBaseGrass_01_16.addComponentOrReplace(gltfShape_2)
const transform_18 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_16.addComponentOrReplace(transform_18)
engine.addEntity(floorBaseGrass_01_16)

const grassPatchLarge_01 = new Entity()
grassPatchLarge_01.setParent(scene)
const gltfShape_3 = new GLTFShape('models/GrassPatchLarge_01/GrassPatchLarge_01.glb')
grassPatchLarge_01.addComponentOrReplace(gltfShape_3)
const transform_19 = new Transform({
  position: new Vector3(43.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_01.addComponentOrReplace(transform_19)
engine.addEntity(grassPatchLarge_01)

const grassPatchSmall_01 = new Entity()
grassPatchSmall_01.setParent(scene)
const gltfShape_4 = new GLTFShape('models/GrassPatchSmall_01/GrassPatchSmall_01.glb')
grassPatchSmall_01.addComponentOrReplace(gltfShape_4)
const transform_20 = new Transform({
  position: new Vector3(39.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchSmall_01.addComponentOrReplace(transform_20)
engine.addEntity(grassPatchSmall_01)

const fencePicketLarge_01 = new Entity()
fencePicketLarge_01.setParent(scene)
const gltfShape_5 = new GLTFShape('models/FencePicketLarge_01/FencePicketLarge_01.glb')
fencePicketLarge_01.addComponentOrReplace(gltfShape_5)
const transform_21 = new Transform({
  position: new Vector3(0.49999999999999994, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01.addComponentOrReplace(transform_21)
engine.addEntity(fencePicketLarge_01)

const fencePicketLarge_01_2 = new Entity()
fencePicketLarge_01_2.setParent(scene)
fencePicketLarge_01_2.addComponentOrReplace(gltfShape_5)
const transform_22 = new Transform({
  position: new Vector3(0.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_2.addComponentOrReplace(transform_22)
engine.addEntity(fencePicketLarge_01_2)

const fencePicketLarge_01_3 = new Entity()
fencePicketLarge_01_3.setParent(scene)
fencePicketLarge_01_3.addComponentOrReplace(gltfShape_5)
const transform_23 = new Transform({
  position: new Vector3(0.5, 0, 53.351490254774745),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_3.addComponentOrReplace(transform_23)
engine.addEntity(fencePicketLarge_01_3)

const fencePicketLarge_01_4 = new Entity()
fencePicketLarge_01_4.setParent(scene)
fencePicketLarge_01_4.addComponentOrReplace(gltfShape_5)
const transform_24 = new Transform({
  position: new Vector3(0.5, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_4.addComponentOrReplace(transform_24)
engine.addEntity(fencePicketLarge_01_4)

const fencePicketLarge_01_5 = new Entity()
fencePicketLarge_01_5.setParent(scene)
fencePicketLarge_01_5.addComponentOrReplace(gltfShape_5)
const transform_25 = new Transform({
  position: new Vector3(0.5, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_5.addComponentOrReplace(transform_25)
engine.addEntity(fencePicketLarge_01_5)

const fencePicketLarge_01_6 = new Entity()
fencePicketLarge_01_6.setParent(scene)
fencePicketLarge_01_6.addComponentOrReplace(gltfShape_5)
const transform_26 = new Transform({
  position: new Vector3(0.5, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_6.addComponentOrReplace(transform_26)
engine.addEntity(fencePicketLarge_01_6)

const fencePicketLarge_01_7 = new Entity()
fencePicketLarge_01_7.setParent(scene)
fencePicketLarge_01_7.addComponentOrReplace(gltfShape_5)
const transform_27 = new Transform({
  position: new Vector3(0.5, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_7.addComponentOrReplace(transform_27)
engine.addEntity(fencePicketLarge_01_7)

const fencePicketLarge_01_8 = new Entity()
fencePicketLarge_01_8.setParent(scene)
fencePicketLarge_01_8.addComponentOrReplace(gltfShape_5)
const transform_28 = new Transform({
  position: new Vector3(0.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_8.addComponentOrReplace(transform_28)
engine.addEntity(fencePicketLarge_01_8)

const fencePicketLarge_01_9 = new Entity()
fencePicketLarge_01_9.setParent(scene)
fencePicketLarge_01_9.addComponentOrReplace(gltfShape_5)
const transform_29 = new Transform({
  position: new Vector3(0.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_9.addComponentOrReplace(transform_29)
engine.addEntity(fencePicketLarge_01_9)

const fencePicketLarge_01_10 = new Entity()
fencePicketLarge_01_10.setParent(scene)
fencePicketLarge_01_10.addComponentOrReplace(gltfShape_5)
const transform_30 = new Transform({
  position: new Vector3(0.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_10.addComponentOrReplace(transform_30)
engine.addEntity(fencePicketLarge_01_10)

const fencePicketLarge_01_11 = new Entity()
fencePicketLarge_01_11.setParent(scene)
fencePicketLarge_01_11.addComponentOrReplace(gltfShape_5)
const transform_31 = new Transform({
  position: new Vector3(0.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_11.addComponentOrReplace(transform_31)
engine.addEntity(fencePicketLarge_01_11)

const fencePicketLarge_01_12 = new Entity()
fencePicketLarge_01_12.setParent(scene)
fencePicketLarge_01_12.addComponentOrReplace(gltfShape_5)
const transform_32 = new Transform({
  position: new Vector3(0.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_12.addComponentOrReplace(transform_32)
engine.addEntity(fencePicketLarge_01_12)

const fencePicketLarge_01_13 = new Entity()
fencePicketLarge_01_13.setParent(scene)
fencePicketLarge_01_13.addComponentOrReplace(gltfShape_5)
const transform_33 = new Transform({
  position: new Vector3(0.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_13.addComponentOrReplace(transform_33)
engine.addEntity(fencePicketLarge_01_13)

const fencePicketLarge_01_14 = new Entity()
fencePicketLarge_01_14.setParent(scene)
fencePicketLarge_01_14.addComponentOrReplace(gltfShape_5)
const transform_34 = new Transform({
  position: new Vector3(63.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_14.addComponentOrReplace(transform_34)
engine.addEntity(fencePicketLarge_01_14)

const fencePicketLarge_01_15 = new Entity()
fencePicketLarge_01_15.setParent(scene)
fencePicketLarge_01_15.addComponentOrReplace(gltfShape_5)
const transform_35 = new Transform({
  position: new Vector3(63.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_15.addComponentOrReplace(transform_35)
engine.addEntity(fencePicketLarge_01_15)

const fencePicketLarge_01_16 = new Entity()
fencePicketLarge_01_16.setParent(scene)
fencePicketLarge_01_16.addComponentOrReplace(gltfShape_5)
const transform_36 = new Transform({
  position: new Vector3(63.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_16.addComponentOrReplace(transform_36)
engine.addEntity(fencePicketLarge_01_16)

const fencePicketLarge_01_17 = new Entity()
fencePicketLarge_01_17.setParent(scene)
fencePicketLarge_01_17.addComponentOrReplace(gltfShape_5)
const transform_37 = new Transform({
  position: new Vector3(63.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_17.addComponentOrReplace(transform_37)
engine.addEntity(fencePicketLarge_01_17)

const fencePicketLarge_01_18 = new Entity()
fencePicketLarge_01_18.setParent(scene)
fencePicketLarge_01_18.addComponentOrReplace(gltfShape_5)
const transform_38 = new Transform({
  position: new Vector3(63.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_18.addComponentOrReplace(transform_38)
engine.addEntity(fencePicketLarge_01_18)

const fencePicketLarge_01_19 = new Entity()
fencePicketLarge_01_19.setParent(scene)
fencePicketLarge_01_19.addComponentOrReplace(gltfShape_5)
const transform_39 = new Transform({
  position: new Vector3(63.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_19.addComponentOrReplace(transform_39)
engine.addEntity(fencePicketLarge_01_19)

const fencePicketLarge_01_20 = new Entity()
fencePicketLarge_01_20.setParent(scene)
fencePicketLarge_01_20.addComponentOrReplace(gltfShape_5)
const transform_40 = new Transform({
  position: new Vector3(63.5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_20.addComponentOrReplace(transform_40)
engine.addEntity(fencePicketLarge_01_20)

const fencePicketLarge_01_21 = new Entity()
fencePicketLarge_01_21.setParent(scene)
fencePicketLarge_01_21.addComponentOrReplace(gltfShape_5)
const transform_41 = new Transform({
  position: new Vector3(63.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_21.addComponentOrReplace(transform_41)
engine.addEntity(fencePicketLarge_01_21)

const fencePicketLarge_01_22 = new Entity()
fencePicketLarge_01_22.setParent(scene)
fencePicketLarge_01_22.addComponentOrReplace(gltfShape_5)
const transform_42 = new Transform({
  position: new Vector3(63.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_22.addComponentOrReplace(transform_42)
engine.addEntity(fencePicketLarge_01_22)

const fencePicketLarge_01_23 = new Entity()
fencePicketLarge_01_23.setParent(scene)
fencePicketLarge_01_23.addComponentOrReplace(gltfShape_5)
const transform_43 = new Transform({
  position: new Vector3(63.5, 0, 50),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_23.addComponentOrReplace(transform_43)
engine.addEntity(fencePicketLarge_01_23)

const fencePicketLarge_01_24 = new Entity()
fencePicketLarge_01_24.setParent(scene)
fencePicketLarge_01_24.addComponentOrReplace(gltfShape_5)
const transform_44 = new Transform({
  position: new Vector3(63.5, 0, 55),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_24.addComponentOrReplace(transform_44)
engine.addEntity(fencePicketLarge_01_24)

const fencePicketLarge_01_25 = new Entity()
fencePicketLarge_01_25.setParent(scene)
fencePicketLarge_01_25.addComponentOrReplace(gltfShape_5)
const transform_45 = new Transform({
  position: new Vector3(63.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_25.addComponentOrReplace(transform_45)
engine.addEntity(fencePicketLarge_01_25)

const fencePicketLarge_01_26 = new Entity()
fencePicketLarge_01_26.setParent(scene)
fencePicketLarge_01_26.addComponentOrReplace(gltfShape_5)
const transform_46 = new Transform({
  position: new Vector3(63.5, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_26.addComponentOrReplace(transform_46)
engine.addEntity(fencePicketLarge_01_26)

const fencePicketLarge_01_27 = new Entity()
fencePicketLarge_01_27.setParent(scene)
fencePicketLarge_01_27.addComponentOrReplace(gltfShape_5)
const transform_47 = new Transform({
  position: new Vector3(58.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_27.addComponentOrReplace(transform_47)
engine.addEntity(fencePicketLarge_01_27)

const fencePicketLarge_01_28 = new Entity()
fencePicketLarge_01_28.setParent(scene)
fencePicketLarge_01_28.addComponentOrReplace(gltfShape_5)
const transform_48 = new Transform({
  position: new Vector3(53.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_28.addComponentOrReplace(transform_48)
engine.addEntity(fencePicketLarge_01_28)

const fencePicketLarge_01_29 = new Entity()
fencePicketLarge_01_29.setParent(scene)
fencePicketLarge_01_29.addComponentOrReplace(gltfShape_5)
const transform_49 = new Transform({
  position: new Vector3(48.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_29.addComponentOrReplace(transform_49)
engine.addEntity(fencePicketLarge_01_29)

const fencePicketLarge_01_30 = new Entity()
fencePicketLarge_01_30.setParent(scene)
fencePicketLarge_01_30.addComponentOrReplace(gltfShape_5)
const transform_50 = new Transform({
  position: new Vector3(38.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_30.addComponentOrReplace(transform_50)
engine.addEntity(fencePicketLarge_01_30)

const fencePicketLarge_01_31 = new Entity()
fencePicketLarge_01_31.setParent(scene)
fencePicketLarge_01_31.addComponentOrReplace(gltfShape_5)
const transform_51 = new Transform({
  position: new Vector3(43.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_31.addComponentOrReplace(transform_51)
engine.addEntity(fencePicketLarge_01_31)

const fencePicketLarge_01_32 = new Entity()
fencePicketLarge_01_32.setParent(scene)
fencePicketLarge_01_32.addComponentOrReplace(gltfShape_5)
const transform_52 = new Transform({
  position: new Vector3(33.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_32.addComponentOrReplace(transform_52)
engine.addEntity(fencePicketLarge_01_32)

const fencePicketLarge_01_33 = new Entity()
fencePicketLarge_01_33.setParent(scene)
fencePicketLarge_01_33.addComponentOrReplace(gltfShape_5)
const transform_53 = new Transform({
  position: new Vector3(28.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_33.addComponentOrReplace(transform_53)
engine.addEntity(fencePicketLarge_01_33)

const fencePicketLarge_01_34 = new Entity()
fencePicketLarge_01_34.setParent(scene)
fencePicketLarge_01_34.addComponentOrReplace(gltfShape_5)
const transform_54 = new Transform({
  position: new Vector3(23.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_34.addComponentOrReplace(transform_54)
engine.addEntity(fencePicketLarge_01_34)

const fencePicketLarge_01_35 = new Entity()
fencePicketLarge_01_35.setParent(scene)
fencePicketLarge_01_35.addComponentOrReplace(gltfShape_5)
const transform_55 = new Transform({
  position: new Vector3(18.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_35.addComponentOrReplace(transform_55)
engine.addEntity(fencePicketLarge_01_35)

const fencePicketLarge_01_36 = new Entity()
fencePicketLarge_01_36.setParent(scene)
fencePicketLarge_01_36.addComponentOrReplace(gltfShape_5)
const transform_56 = new Transform({
  position: new Vector3(13.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_36.addComponentOrReplace(transform_56)
engine.addEntity(fencePicketLarge_01_36)

const fencePicketLarge_01_37 = new Entity()
fencePicketLarge_01_37.setParent(scene)
fencePicketLarge_01_37.addComponentOrReplace(gltfShape_5)
const transform_57 = new Transform({
  position: new Vector3(8.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_37.addComponentOrReplace(transform_57)
engine.addEntity(fencePicketLarge_01_37)

const fencePicketLarge_01_38 = new Entity()
fencePicketLarge_01_38.setParent(scene)
fencePicketLarge_01_38.addComponentOrReplace(gltfShape_5)
const transform_58 = new Transform({
  position: new Vector3(3.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_38.addComponentOrReplace(transform_58)
engine.addEntity(fencePicketLarge_01_38)

const fencePicketLarge_01_39 = new Entity()
fencePicketLarge_01_39.setParent(scene)
fencePicketLarge_01_39.addComponentOrReplace(gltfShape_5)
const transform_59 = new Transform({
  position: new Vector3(0.5, 0, 63.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_39.addComponentOrReplace(transform_59)
engine.addEntity(fencePicketLarge_01_39)

const pond_02 = new Entity()
pond_02.setParent(scene)
const gltfShape_6 = new GLTFShape('models/Pond_02/Pond_02.glb')
pond_02.addComponentOrReplace(gltfShape_6)
const transform_60 = new Transform({
  position: new Vector3(43.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pond_02.addComponentOrReplace(transform_60)
engine.addEntity(pond_02)

const pond_02_2 = new Entity()
pond_02_2.setParent(scene)
pond_02_2.addComponentOrReplace(gltfShape_6)
const transform_61 = new Transform({
  position: new Vector3(22.5, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pond_02_2.addComponentOrReplace(transform_61)
engine.addEntity(pond_02_2)

const floorBlock_05 = new Entity()
floorBlock_05.setParent(scene)
const gltfShape_7 = new GLTFShape('models/FloorBlock_05/FloorBlock_05.glb')
floorBlock_05.addComponentOrReplace(gltfShape_7)
const transform_62 = new Transform({
  position: new Vector3(15.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05.addComponentOrReplace(transform_62)
engine.addEntity(floorBlock_05)

const floorBlock_05_2 = new Entity()
floorBlock_05_2.setParent(scene)
floorBlock_05_2.addComponentOrReplace(gltfShape_7)
const transform_63 = new Transform({
  position: new Vector3(18, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_2.addComponentOrReplace(transform_63)
engine.addEntity(floorBlock_05_2)

const floorBlock_05_3 = new Entity()
floorBlock_05_3.setParent(scene)
floorBlock_05_3.addComponentOrReplace(gltfShape_7)
const transform_64 = new Transform({
  position: new Vector3(18, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_3.addComponentOrReplace(transform_64)
engine.addEntity(floorBlock_05_3)

const floorBlock_05_4 = new Entity()
floorBlock_05_4.setParent(scene)
floorBlock_05_4.addComponentOrReplace(gltfShape_7)
const transform_65 = new Transform({
  position: new Vector3(15.5, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_4.addComponentOrReplace(transform_65)
engine.addEntity(floorBlock_05_4)

const floorBlock_05_5 = new Entity()
floorBlock_05_5.setParent(scene)
floorBlock_05_5.addComponentOrReplace(gltfShape_7)
const transform_66 = new Transform({
  position: new Vector3(51, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_5.addComponentOrReplace(transform_66)
engine.addEntity(floorBlock_05_5)

const floorBlock_05_6 = new Entity()
floorBlock_05_6.setParent(scene)
floorBlock_05_6.addComponentOrReplace(gltfShape_7)
const transform_67 = new Transform({
  position: new Vector3(51, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_6.addComponentOrReplace(transform_67)
engine.addEntity(floorBlock_05_6)

const floorBlock_05_7 = new Entity()
floorBlock_05_7.setParent(scene)
floorBlock_05_7.addComponentOrReplace(gltfShape_7)
const transform_68 = new Transform({
  position: new Vector3(48.5, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_7.addComponentOrReplace(transform_68)
engine.addEntity(floorBlock_05_7)

const floorBlock_05_8 = new Entity()
floorBlock_05_8.setParent(scene)
floorBlock_05_8.addComponentOrReplace(gltfShape_7)
const transform_69 = new Transform({
  position: new Vector3(48.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_8.addComponentOrReplace(transform_69)
engine.addEntity(floorBlock_05_8)

const floorBlock_05_9 = new Entity()
floorBlock_05_9.setParent(scene)
floorBlock_05_9.addComponentOrReplace(gltfShape_7)
const transform_70 = new Transform({
  position: new Vector3(34.5, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_9.addComponentOrReplace(transform_70)
engine.addEntity(floorBlock_05_9)

const floorBlock_05_10 = new Entity()
floorBlock_05_10.setParent(scene)
floorBlock_05_10.addComponentOrReplace(gltfShape_7)
const transform_71 = new Transform({
  position: new Vector3(32, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_10.addComponentOrReplace(transform_71)
engine.addEntity(floorBlock_05_10)

const floorBlock_05_11 = new Entity()
floorBlock_05_11.setParent(scene)
floorBlock_05_11.addComponentOrReplace(gltfShape_7)
const transform_72 = new Transform({
  position: new Vector3(32, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_11.addComponentOrReplace(transform_72)
engine.addEntity(floorBlock_05_11)

const floorBlock_05_12 = new Entity()
floorBlock_05_12.setParent(scene)
floorBlock_05_12.addComponentOrReplace(gltfShape_7)
const transform_73 = new Transform({
  position: new Vector3(34.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlock_05_12.addComponentOrReplace(transform_73)
engine.addEntity(floorBlock_05_12)

const treePine_01 = new Entity()
treePine_01.setParent(scene)
const gltfShape_8 = new GLTFShape('models/TreePine_01/TreePine_01.glb')
treePine_01.addComponentOrReplace(gltfShape_8)
const transform_74 = new Transform({
  position: new Vector3(2, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01.addComponentOrReplace(transform_74)
engine.addEntity(treePine_01)

const treePine_01_2 = new Entity()
treePine_01_2.setParent(scene)
treePine_01_2.addComponentOrReplace(gltfShape_8)
const transform_75 = new Transform({
  position: new Vector3(25, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_2.addComponentOrReplace(transform_75)
engine.addEntity(treePine_01_2)

const treePine_01_3 = new Entity()
treePine_01_3.setParent(scene)
treePine_01_3.addComponentOrReplace(gltfShape_8)
const transform_76 = new Transform({
  position: new Vector3(40.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_3.addComponentOrReplace(transform_76)
engine.addEntity(treePine_01_3)

const treePine_01_4 = new Entity()
treePine_01_4.setParent(scene)
treePine_01_4.addComponentOrReplace(gltfShape_8)
const transform_77 = new Transform({
  position: new Vector3(50, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_4.addComponentOrReplace(transform_77)
engine.addEntity(treePine_01_4)

const bamboo_01 = new Entity()
bamboo_01.setParent(scene)
const gltfShape_9 = new GLTFShape('models/Bamboo_01/Bamboo_01.glb')
bamboo_01.addComponentOrReplace(gltfShape_9)
const transform_78 = new Transform({
  position: new Vector3(20.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo_01.addComponentOrReplace(transform_78)
engine.addEntity(bamboo_01)

const bamboo_01_2 = new Entity()
bamboo_01_2.setParent(scene)
bamboo_01_2.addComponentOrReplace(gltfShape_9)
const transform_79 = new Transform({
  position: new Vector3(19.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo_01_2.addComponentOrReplace(transform_79)
engine.addEntity(bamboo_01_2)

const bamboo_01_3 = new Entity()
bamboo_01_3.setParent(scene)
bamboo_01_3.addComponentOrReplace(gltfShape_9)
const transform_80 = new Transform({
  position: new Vector3(44, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo_01_3.addComponentOrReplace(transform_80)
engine.addEntity(bamboo_01_3)

const bamboo_01_4 = new Entity()
bamboo_01_4.setParent(scene)
bamboo_01_4.addComponentOrReplace(gltfShape_9)
const transform_81 = new Transform({
  position: new Vector3(45.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo_01_4.addComponentOrReplace(transform_81)
engine.addEntity(bamboo_01_4)

const treePine_03 = new Entity()
treePine_03.setParent(scene)
const gltfShape_10 = new GLTFShape('models/TreePine_03/TreePine_03.glb')
treePine_03.addComponentOrReplace(gltfShape_10)
const transform_82 = new Transform({
  position: new Vector3(50, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03.addComponentOrReplace(transform_82)
engine.addEntity(treePine_03)

const treePine_03_2 = new Entity()
treePine_03_2.setParent(scene)
treePine_03_2.addComponentOrReplace(gltfShape_10)
const transform_83 = new Transform({
  position: new Vector3(16.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_2.addComponentOrReplace(transform_83)
engine.addEntity(treePine_03_2)

const treeSycamore_01 = new Entity()
treeSycamore_01.setParent(scene)
const gltfShape_11 = new GLTFShape('models/TreeSycamore_01/TreeSycamore_01.glb')
treeSycamore_01.addComponentOrReplace(gltfShape_11)
const transform_84 = new Transform({
  position: new Vector3(16.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01.addComponentOrReplace(transform_84)
engine.addEntity(treeSycamore_01)

const treeSycamore_01_2 = new Entity()
treeSycamore_01_2.setParent(scene)
treeSycamore_01_2.addComponentOrReplace(gltfShape_11)
const transform_85 = new Transform({
  position: new Vector3(50, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_2.addComponentOrReplace(transform_85)
engine.addEntity(treeSycamore_01_2)

const treeSycamore_03 = new Entity()
treeSycamore_03.setParent(scene)
const gltfShape_12 = new GLTFShape('models/TreeSycamore_03/TreeSycamore_03.glb')
treeSycamore_03.addComponentOrReplace(gltfShape_12)
const transform_86 = new Transform({
  position: new Vector3(50, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03.addComponentOrReplace(transform_86)
engine.addEntity(treeSycamore_03)

const treeSycamore_03_2 = new Entity()
treeSycamore_03_2.setParent(scene)
treeSycamore_03_2.addComponentOrReplace(gltfShape_12)
const transform_87 = new Transform({
  position: new Vector3(16.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_2.addComponentOrReplace(transform_87)
engine.addEntity(treeSycamore_03_2)

const grassPatchSmall_01_2 = new Entity()
grassPatchSmall_01_2.setParent(scene)
grassPatchSmall_01_2.addComponentOrReplace(gltfShape_4)
const transform_88 = new Transform({
  position: new Vector3(13.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_2.addComponentOrReplace(transform_88)
engine.addEntity(grassPatchSmall_01_2)

const fountain_02 = new Entity()
fountain_02.setParent(scene)
const gltfShape_13 = new GLTFShape('models/Fountain_02/Fountain_02.glb')
fountain_02.addComponentOrReplace(gltfShape_13)
const transform_89 = new Transform({
  position: new Vector3(9.5, 0, 28.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fountain_02.addComponentOrReplace(transform_89)
fountain_02.addComponentOrReplace(new SoundManager())
const soundClip_2 = fountain_02.getComponent(SoundManager).pondSound
soundClip_2.volume = 0.00002
fountain_02.addComponentOrReplace(new AudioSource(soundClip_2))
fountain_02.getComponent(AudioSource).playing = true
fountain_02.getComponent(AudioSource).loop = true
engine.addEntity(fountain_02)

const grassPatchSmall_01_3 = new Entity()
grassPatchSmall_01_3.setParent(scene)
grassPatchSmall_01_3.addComponentOrReplace(gltfShape_4)
const transform_90 = new Transform({
  position: new Vector3(13.5, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_3.addComponentOrReplace(transform_90)
engine.addEntity(grassPatchSmall_01_3)

const grassPatchSmall_01_4 = new Entity()
grassPatchSmall_01_4.setParent(scene)
grassPatchSmall_01_4.addComponentOrReplace(gltfShape_4)
const transform_91 = new Transform({
  position: new Vector3(5, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_4.addComponentOrReplace(transform_91)
engine.addEntity(grassPatchSmall_01_4)

const grassPatchSmall_01_5 = new Entity()
grassPatchSmall_01_5.setParent(scene)
grassPatchSmall_01_5.addComponentOrReplace(gltfShape_4)
const transform_92 = new Transform({
  position: new Vector3(5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_5.addComponentOrReplace(transform_92)
engine.addEntity(grassPatchSmall_01_5)

const templeMoon_01 = new Entity()
templeMoon_01.setParent(scene)
const gltfShape_14 = new GLTFShape('models/TempleMoon_01/TempleMoon_01.glb')
templeMoon_01.addComponentOrReplace(gltfShape_14)
const transform_93 = new Transform({
  position: new Vector3(9.5, 0, 19),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
templeMoon_01.addComponentOrReplace(transform_93)
templeMoon_01.addComponentOrReplace(new SoundManager())
const audio_clip = templeMoon_01.getComponent(SoundManager).omOrignal
audio_clip.volume = 0.000001
templeMoon_01.addComponentOrReplace(new AudioSource(audio_clip))
templeMoon_01.getComponent(AudioSource).playing = true
templeMoon_01.getComponent(AudioSource).loop = true
templeMoon_01.addComponentOrReplace(new OnClick(() => {
  message.value = "You have unlocked Sandhya Tandav dance form of Shiv, explore more"
  forms_unlocked[0] = true
  checkPossiblityOfDoorOpen()
}))
engine.addEntity(templeMoon_01)

const hayStack = new Entity()
hayStack.setParent(scene)
const gltfShape_haystack = new GLTFShape('models/HayStack/HayStack.gltf')
hayStack.addComponentOrReplace(gltfShape_haystack)
const transform_haystack = new Transform({
  position: new Vector3(5, 0, 60),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
hayStack.addComponentOrReplace(transform_haystack)
hayStack.addComponentOrReplace(new OnClick(() => {
  deer.getComponent(LerpData).origin = deer.getComponent(Transform).position  
  deer.getComponent(LerpData).target = new Vector3(transform_haystack.position.x + 1, transform_haystack.position.y, transform_haystack.position.z - 3)
  deer.getComponent(LerpData).fraction = 0
}))
engine.addEntity(hayStack)


const grassPatchSmall_01_6 = new Entity()
grassPatchSmall_01_6.setParent(scene)
grassPatchSmall_01_6.addComponentOrReplace(gltfShape_4)
const transform_94 = new Transform({
  position: new Vector3(9.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_6.addComponentOrReplace(transform_94)
engine.addEntity(grassPatchSmall_01_6)

const grassPatchSmall_01_7 = new Entity()
grassPatchSmall_01_7.setParent(scene)
grassPatchSmall_01_7.addComponentOrReplace(gltfShape_4)
const transform_95 = new Transform({
  position: new Vector3(13.5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_7.addComponentOrReplace(transform_95)
engine.addEntity(grassPatchSmall_01_7)

const grassPatchSmall_01_8 = new Entity()
grassPatchSmall_01_8.setParent(scene)
grassPatchSmall_01_8.addComponentOrReplace(gltfShape_4)
const transform_96 = new Transform({
  position: new Vector3(13.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_8.addComponentOrReplace(transform_96)
engine.addEntity(grassPatchSmall_01_8)

const grassPatchSmall_01_9 = new Entity()
grassPatchSmall_01_9.setParent(scene)
grassPatchSmall_01_9.addComponentOrReplace(gltfShape_4)
const transform_97 = new Transform({
  position: new Vector3(5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_9.addComponentOrReplace(transform_97)
engine.addEntity(grassPatchSmall_01_9)


const templeMoon_01_2 = new Entity()
templeMoon_01_2.setParent(scene)
templeMoon_01_2.addComponentOrReplace(gltfShape_14)
const transform_98 = new Transform({
  position: new Vector3(9.5, 0, 38),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
templeMoon_01_2.addComponentOrReplace(transform_98)
templeMoon_01_2.addComponentOrReplace(new OnClick(() => {
  cow.getComponent(LerpData).origin = cow.getComponent(Transform).position  
  cow.getComponent(LerpData).target = new Vector3(transform_98.position.x, transform_98.position.y, transform_98.position.z + 2)
  cow.getComponent(LerpData).fraction = 0
}))

templeMoon_01_2.addComponentOrReplace(new SoundManager())
const audio_clip_2 = templeMoon_01_2.getComponent(SoundManager).omOrignal
audio_clip_2.volume = 0.000001
templeMoon_01_2.addComponentOrReplace(new AudioSource(audio_clip_2))
templeMoon_01_2.getComponent(AudioSource).playing = true
templeMoon_01_2.getComponent(AudioSource).loop = true
engine.addEntity(templeMoon_01_2)

const grassPatchSmall_01_10 = new Entity()
grassPatchSmall_01_10.setParent(scene)
grassPatchSmall_01_10.addComponentOrReplace(gltfShape_4)
const transform_99 = new Transform({
  position: new Vector3(9.5, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_10.addComponentOrReplace(transform_99)
engine.addEntity(grassPatchSmall_01_10)

const treeSycamore_03_3 = new Entity()
treeSycamore_03_3.setParent(scene)
treeSycamore_03_3.addComponentOrReplace(gltfShape_12)
const transform_100 = new Transform({
  position: new Vector3(16.5, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_3.addComponentOrReplace(transform_100)
engine.addEntity(treeSycamore_03_3)

const treeSycamore_01_3 = new Entity()
treeSycamore_01_3.setParent(scene)
treeSycamore_01_3.addComponentOrReplace(gltfShape_11)
const transform_101 = new Transform({
  position: new Vector3(16.5, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_3.addComponentOrReplace(transform_101)
engine.addEntity(treeSycamore_01_3)

const treePine_03_3 = new Entity()
treePine_03_3.setParent(scene)
treePine_03_3.addComponentOrReplace(gltfShape_10)
const transform_102 = new Transform({
  position: new Vector3(16.5, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_3.addComponentOrReplace(transform_102)
engine.addEntity(treePine_03_3)

const treePine_01_5 = new Entity()
treePine_01_5.setParent(scene)
treePine_01_5.addComponentOrReplace(gltfShape_8)
const transform_103 = new Transform({
  position: new Vector3(16.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_5.addComponentOrReplace(transform_103)
engine.addEntity(treePine_01_5)

const treePine_03_4 = new Entity()
treePine_03_4.setParent(scene)
treePine_03_4.addComponentOrReplace(gltfShape_10)
const transform_104 = new Transform({
  position: new Vector3(2, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_4.addComponentOrReplace(transform_104)
engine.addEntity(treePine_03_4)

const treePine_01_6 = new Entity()
treePine_01_6.setParent(scene)
treePine_01_6.addComponentOrReplace(gltfShape_8)
const transform_105 = new Transform({
  position: new Vector3(2, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_6.addComponentOrReplace(transform_105)
engine.addEntity(treePine_01_6)

const treeSycamore_01_4 = new Entity()
treeSycamore_01_4.setParent(scene)
treeSycamore_01_4.addComponentOrReplace(gltfShape_11)
const transform_106 = new Transform({
  position: new Vector3(2, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_4.addComponentOrReplace(transform_106)
engine.addEntity(treeSycamore_01_4)

const treePine_01_7 = new Entity()
treePine_01_7.setParent(scene)
treePine_01_7.addComponentOrReplace(gltfShape_8)
const transform_107 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_7.addComponentOrReplace(transform_107)
engine.addEntity(treePine_01_7)

const treePine_03_5 = new Entity()
treePine_03_5.setParent(scene)
treePine_03_5.addComponentOrReplace(gltfShape_10)
const transform_108 = new Transform({
  position: new Vector3(2, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_5.addComponentOrReplace(transform_108)
engine.addEntity(treePine_03_5)

const treeSycamore_01_5 = new Entity()
treeSycamore_01_5.setParent(scene)
treeSycamore_01_5.addComponentOrReplace(gltfShape_11)
const transform_109 = new Transform({
  position: new Vector3(2, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_5.addComponentOrReplace(transform_109)
engine.addEntity(treeSycamore_01_5)

const treeSycamore_03_4 = new Entity()
treeSycamore_03_4.setParent(scene)
treeSycamore_03_4.addComponentOrReplace(gltfShape_12)
const transform_110 = new Transform({
  position: new Vector3(2, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_4.addComponentOrReplace(transform_110)
engine.addEntity(treeSycamore_03_4)

const treeSycamore_03_5 = new Entity()
treeSycamore_03_5.setParent(scene)
treeSycamore_03_5.addComponentOrReplace(gltfShape_12)
const transform_111 = new Transform({
  position: new Vector3(2, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_5.addComponentOrReplace(transform_111)
engine.addEntity(treeSycamore_03_5)

const grassPatchSmall_01_11 = new Entity()
grassPatchSmall_01_11.setParent(scene)
grassPatchSmall_01_11.addComponentOrReplace(gltfShape_4)
const transform_112 = new Transform({
  position: new Vector3(5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
grassPatchSmall_01_11.addComponentOrReplace(transform_112)
engine.addEntity(grassPatchSmall_01_11)

const treeFir_02 = new Entity()
treeFir_02.setParent(scene)
const gltfShape_15 = new GLTFShape('models/TreeFir_02/TreeFir_02.glb')
treeFir_02.addComponentOrReplace(gltfShape_15)
const transform_113 = new Transform({
  position: new Vector3(2, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
})
treeFir_02.addComponentOrReplace(transform_113)
engine.addEntity(treeFir_02)

const treeFir_02_2 = new Entity()
treeFir_02_2.setParent(scene)
treeFir_02_2.addComponentOrReplace(gltfShape_15)
const transform_114 = new Transform({
  position: new Vector3(62, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
})
treeFir_02_2.addComponentOrReplace(transform_114)
engine.addEntity(treeFir_02_2)

const treeSycamore_03_6 = new Entity()
treeSycamore_03_6.setParent(scene)
treeSycamore_03_6.addComponentOrReplace(gltfShape_12)
const transform_115 = new Transform({
  position: new Vector3(50, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_6.addComponentOrReplace(transform_115)
engine.addEntity(treeSycamore_03_6)

const treeSycamore_01_6 = new Entity()
treeSycamore_01_6.setParent(scene)
treeSycamore_01_6.addComponentOrReplace(gltfShape_11)
const transform_116 = new Transform({
  position: new Vector3(50, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_6.addComponentOrReplace(transform_116)
engine.addEntity(treeSycamore_01_6)

const treePine_03_6 = new Entity()
treePine_03_6.setParent(scene)
treePine_03_6.addComponentOrReplace(gltfShape_10)
const transform_117 = new Transform({
  position: new Vector3(50, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_6.addComponentOrReplace(transform_117)
engine.addEntity(treePine_03_6)

const treePine_01_8 = new Entity()
treePine_01_8.setParent(scene)
treePine_01_8.addComponentOrReplace(gltfShape_8)
const transform_118 = new Transform({
  position: new Vector3(50, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_8.addComponentOrReplace(transform_118)
engine.addEntity(treePine_01_8)

const treePine_03_7 = new Entity()
treePine_03_7.setParent(scene)
treePine_03_7.addComponentOrReplace(gltfShape_10)
const transform_119 = new Transform({
  position: new Vector3(62, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_7.addComponentOrReplace(transform_119)
engine.addEntity(treePine_03_7)

const treePine_01_9 = new Entity()
treePine_01_9.setParent(scene)
treePine_01_9.addComponentOrReplace(gltfShape_8)
const transform_120 = new Transform({
  position: new Vector3(62, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_9.addComponentOrReplace(transform_120)
engine.addEntity(treePine_01_9)

const treeSycamore_03_7 = new Entity()
treeSycamore_03_7.setParent(scene)
treeSycamore_03_7.addComponentOrReplace(gltfShape_12)
const transform_121 = new Transform({
  position: new Vector3(62, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_7.addComponentOrReplace(transform_121)
engine.addEntity(treeSycamore_03_7)

const treeSycamore_01_7 = new Entity()
treeSycamore_01_7.setParent(scene)
treeSycamore_01_7.addComponentOrReplace(gltfShape_11)
const transform_122 = new Transform({
  position: new Vector3(62, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_7.addComponentOrReplace(transform_122)
engine.addEntity(treeSycamore_01_7)

const treeSycamore_01_8 = new Entity()
treeSycamore_01_8.setParent(scene)
treeSycamore_01_8.addComponentOrReplace(gltfShape_11)
const transform_123 = new Transform({
  position: new Vector3(62, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_8.addComponentOrReplace(transform_123)
engine.addEntity(treeSycamore_01_8)

const treeSycamore_03_8 = new Entity()
treeSycamore_03_8.setParent(scene)
treeSycamore_03_8.addComponentOrReplace(gltfShape_12)
const transform_124 = new Transform({
  position: new Vector3(62, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_8.addComponentOrReplace(transform_124)
engine.addEntity(treeSycamore_03_8)

const treePine_01_10 = new Entity()
treePine_01_10.setParent(scene)
treePine_01_10.addComponentOrReplace(gltfShape_8)
const transform_125 = new Transform({
  position: new Vector3(62, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_10.addComponentOrReplace(transform_125)
engine.addEntity(treePine_01_10)

const treePine_03_8 = new Entity()
treePine_03_8.setParent(scene)
treePine_03_8.addComponentOrReplace(gltfShape_10)
const transform_126 = new Transform({
  position: new Vector3(62, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_8.addComponentOrReplace(transform_126)
engine.addEntity(treePine_03_8)

const rockBig_07 = new Entity()
rockBig_07.setParent(scene)
const gltfShape_16 = new GLTFShape('models/RockBig_07/RockBig_07.glb')
rockBig_07.addComponentOrReplace(gltfShape_16)
const transform_127 = new Transform({
  position: new Vector3(5.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
rockBig_07.addComponentOrReplace(transform_127)
engine.addEntity(rockBig_07)

const rockBig_07_2 = new Entity()
rockBig_07_2.setParent(scene)
rockBig_07_2.addComponentOrReplace(gltfShape_16)
const transform_128 = new Transform({
  position: new Vector3(12.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
rockBig_07_2.addComponentOrReplace(transform_128)
engine.addEntity(rockBig_07_2)

const spiralStone_01 = new Entity()
spiralStone_01.setParent(scene)
const gltfShape_17 = new GLTFShape('models/SpiralStone_01/SpiralStone_01.glb')
spiralStone_01.addComponentOrReplace(gltfShape_17)
const transform_129 = new Transform({
  position: new Vector3(9.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01.addComponentOrReplace(transform_129)
engine.addEntity(spiralStone_01)

const spiralStone_01_2 = new Entity()
spiralStone_01_2.setParent(scene)
spiralStone_01_2.addComponentOrReplace(gltfShape_17)
const transform_130 = new Transform({
  position: new Vector3(9.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_2.addComponentOrReplace(transform_130)
engine.addEntity(spiralStone_01_2)

const tableRock_01 = new Entity()
tableRock_01.setParent(scene)
const gltfShape_18 = new GLTFShape('models/TableRock_01/TableRock_01.glb')
tableRock_01.addComponentOrReplace(gltfShape_18)
const transform_131 = new Transform({
  position: new Vector3(46.5, 0, 12),
  rotation: new Quaternion(0, -0.3826834323650899, 0, 0.9238795325112871),
  scale: new Vector3(1, 1, 1)
})
tableRock_01.addComponentOrReplace(transform_131)
engine.addEntity(tableRock_01)

const tableRock_01_2 = new Entity()
tableRock_01_2.setParent(scene)
tableRock_01_2.addComponentOrReplace(gltfShape_18)
const transform_132 = new Transform({
  position: new Vector3(47, 0, 20),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_2.addComponentOrReplace(transform_132)
engine.addEntity(tableRock_01_2)

const spiralStone_01_3 = new Entity()
spiralStone_01_3.setParent(scene)
spiralStone_01_3.addComponentOrReplace(gltfShape_17)
const transform_133 = new Transform({
  position: new Vector3(20, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_3.addComponentOrReplace(transform_133)
engine.addEntity(spiralStone_01_3)

const spiralStone_01_4 = new Entity()
spiralStone_01_4.setParent(scene)
spiralStone_01_4.addComponentOrReplace(gltfShape_17)
const transform_134 = new Transform({
  position: new Vector3(20, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_4.addComponentOrReplace(transform_134)
engine.addEntity(spiralStone_01_4)

const spiralStone_01_5 = new Entity()
spiralStone_01_5.setParent(scene)
spiralStone_01_5.addComponentOrReplace(gltfShape_17)
const transform_135 = new Transform({
  position: new Vector3(46.5, 0, 30.5),
  rotation: new Quaternion(0, -0.9951847266721975, 0, 0.09801714032956076),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_5.addComponentOrReplace(transform_135)
engine.addEntity(spiralStone_01_5)

const greenHouse_01 = new Entity()
greenHouse_01.setParent(scene)
const gltfShape_19 = new GLTFShape('models/GreenHouse_01/GreenHouse_01.glb')
greenHouse_01.addComponentOrReplace(gltfShape_19)
const transform_136 = new Transform({
  position: new Vector3(56.5, 0, 43.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: new Vector3(0.7113248654051869, 0.7113248654051869, 0.7113248654051869)
})
greenHouse_01.addComponentOrReplace(transform_136)
engine.addEntity(greenHouse_01)

const pedestal_01 = new Entity()
pedestal_01.setParent(scene)
const gltfShape_20 = new GLTFShape('models/Pedestal_01/Pedestal_01.glb')
pedestal_01.addComponentOrReplace(gltfShape_20)
const transform_137 = new Transform({
  position: new Vector3(55.5, 0.5, 22.5),
  rotation: new Quaternion(0, 0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
pedestal_01.addComponentOrReplace(transform_137)
pedestal_01.addComponentOrReplace(new OnClick(() => {
  forms_unlocked[2] = true
  message.value = "You completed shiv by shakti, Om Namah Shivay......."
  clearText()
  checkPossiblityOfDoorOpen()
}))
engine.addEntity(pedestal_01)

const chineseHouse_01 = new Entity()
chineseHouse_01.setParent(scene)
const gltfShape_21 = new GLTFShape('models/ChineseHouse_01/ChineseHouse_01.glb')
chineseHouse_01.addComponentOrReplace(gltfShape_21)
const transform_138 = new Transform({
  position: new Vector3(57, 0, 29),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: new Vector3(1.711324865405187, 0.7113248654051871, 0.7113248654051871)
})
chineseHouse_01.addComponentOrReplace(transform_138)
engine.addEntity(chineseHouse_01)

const pedestal_01_2 = new Entity()
pedestal_01_2.setParent(scene)
pedestal_01_2.addComponentOrReplace(gltfShape_20)
const transform_139 = new Transform({
  position: new Vector3(55.5, 0.5, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
pedestal_01_2.addComponentOrReplace(transform_139)
engine.addEntity(pedestal_01_2)

const pedestal_01_3 = new Entity()
pedestal_01_3.setParent(scene)
pedestal_01_3.addComponentOrReplace(gltfShape_20)
const transform_140 = new Transform({
  position: new Vector3(55.5, 0.5, 27.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
pedestal_01_3.addComponentOrReplace(transform_140)
engine.addEntity(pedestal_01_3)

const pedestal_01_4 = new Entity()
pedestal_01_4.setParent(scene)
pedestal_01_4.addComponentOrReplace(gltfShape_20)
const transform_141 = new Transform({
  position: new Vector3(55.5, 0.5, 30.5),
  rotation: new Quaternion(0, -1.0000000000000004, 0, 1.1102230246251565e-16),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
pedestal_01_4.addComponentOrReplace(transform_141)
engine.addEntity(pedestal_01_4)

const pedestal_01_5 = new Entity()
pedestal_01_5.setParent(scene)
pedestal_01_5.addComponentOrReplace(gltfShape_20)
const transform_142 = new Transform({
  position: new Vector3(55.5, 0.5, 33),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
pedestal_01_5.addComponentOrReplace(transform_142)
engine.addEntity(pedestal_01_5)

const pedestal_01_6 = new Entity()
pedestal_01_6.setParent(scene)
pedestal_01_6.addComponentOrReplace(gltfShape_20)
const transform_143 = new Transform({
  position: new Vector3(55.5, 0.5, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.42264973081037416, 0.42264973081037416, 0.42264973081037416)
})
pedestal_01_6.addComponentOrReplace(transform_143)
engine.addEntity(pedestal_01_6)

const chinesePergola_01 = new Entity()
chinesePergola_01.setParent(scene)
const gltfShape_22 = new GLTFShape('models/ChinesePergola_01/ChinesePergola_01.glb')
chinesePergola_01.addComponentOrReplace(gltfShape_22)
const transform_144 = new Transform({
  position: new Vector3(23.5, 0, 56),
  rotation: new Quaternion(0, 0.9238795325112866, 0, 0.38268343236508984),
  scale: new Vector3(2.154700538379253, 2.154700538379253, 2.154700538379253)
})
chinesePergola_01.addComponentOrReplace(transform_144)
engine.addEntity(chinesePergola_01)

const spiralStone_01_6 = new Entity()
spiralStone_01_6.setParent(scene)
spiralStone_01_6.addComponentOrReplace(gltfShape_17)
const transform_145 = new Transform({
  position: new Vector3(31, 0, 40.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_6.addComponentOrReplace(transform_145)
engine.addEntity(spiralStone_01_6)

const spiralStone_01_7 = new Entity()
spiralStone_01_7.setParent(scene)
spiralStone_01_7.addComponentOrReplace(gltfShape_17)
const transform_146 = new Transform({
  position: new Vector3(35, 0, 40.5),
  rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_7.addComponentOrReplace(transform_146)
engine.addEntity(spiralStone_01_7)

const treePine_03_9 = new Entity()
treePine_03_9.setParent(scene)
treePine_03_9.addComponentOrReplace(gltfShape_10)
const transform_147 = new Transform({
  position: new Vector3(45, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_9.addComponentOrReplace(transform_147)
engine.addEntity(treePine_03_9)

const treeSycamore_01_9 = new Entity()
treeSycamore_01_9.setParent(scene)
treeSycamore_01_9.addComponentOrReplace(gltfShape_11)
const transform_148 = new Transform({
  position: new Vector3(41, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_9.addComponentOrReplace(transform_148)
engine.addEntity(treeSycamore_01_9)

const treeSycamore_03_9 = new Entity()
treeSycamore_03_9.setParent(scene)
treeSycamore_03_9.addComponentOrReplace(gltfShape_12)
const transform_149 = new Transform({
  position: new Vector3(37.5, 0, 46),
  rotation: new Quaternion(0, -0.6343932841636457, 0, 0.773010453362737),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_9.addComponentOrReplace(transform_149)
engine.addEntity(treeSycamore_03_9)

const treePine_03_10 = new Entity()
treePine_03_10.setParent(scene)
treePine_03_10.addComponentOrReplace(gltfShape_10)
const transform_150 = new Transform({
  position: new Vector3(22, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_10.addComponentOrReplace(transform_150)
engine.addEntity(treePine_03_10)

const treeSycamore_01_10 = new Entity()
treeSycamore_01_10.setParent(scene)
treeSycamore_01_10.addComponentOrReplace(gltfShape_11)
const transform_151 = new Transform({
  position: new Vector3(26.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_10.addComponentOrReplace(transform_151)
engine.addEntity(treeSycamore_01_10)

const treeSycamore_03_10 = new Entity()
treeSycamore_03_10.setParent(scene)
treeSycamore_03_10.addComponentOrReplace(gltfShape_12)
const transform_152 = new Transform({
  position: new Vector3(30, 0, 46.5),
  rotation: new Quaternion(0, 0.3826834323650896, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_10.addComponentOrReplace(transform_152)
engine.addEntity(treeSycamore_03_10)

const chineseGate_03 = new Entity()
chineseGate_03.setParent(scene)
const gltfShape_23 = new GLTFShape('models/ChineseGate_03/ChineseGate_03.glb')
chineseGate_03.addComponentOrReplace(gltfShape_23)
const transform_153 = new Transform({
  position: new Vector3(33.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseGate_03.addComponentOrReplace(transform_153)
engine.addEntity(chineseGate_03)

const tree_Lamp_01 = new Entity()
tree_Lamp_01.setParent(scene)
const gltfShape_24 = new GLTFShape('models/Tree_Lamp_01/Tree_Lamp_01.glb')
tree_Lamp_01.addComponentOrReplace(gltfShape_24)
const transform_154 = new Transform({
  position: new Vector3(55.5, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.175426480542944, 4.175426480542944, 4.175426480542944)
})
tree_Lamp_01.addComponentOrReplace(transform_154)
engine.addEntity(tree_Lamp_01)

const plate_01 = new Entity()
plate_01.setParent(scene)
const gltfShape_25 = new GLTFShape('models/Plate_01/Plate_01.glb')
plate_01.addComponentOrReplace(gltfShape_25)
const transform_155 = new Transform({
  position: new Vector3(51.5, 8.5, 55),
  rotation: new Quaternion(0.24277179945310562, 0.29581829354694633, -0.7141685362791031, 0.5861029708014087),
  scale: new Vector3(-14.588457268119898, -14.588457268119898, -14.588457268119898)
})
plate_01.addComponentOrReplace(transform_155)
engine.addEntity(plate_01)

const ornament_04 = new Entity()
ornament_04.setParent(scene)
const gltfShape_26 = new GLTFShape('models/Ornament_04/Ornament_04.glb')
ornament_04.addComponentOrReplace(gltfShape_26)
const transform_156 = new Transform({
  position: new Vector3(51, 10.5, 55),
  rotation: new Quaternion(0, 0.7730104533627369, 0, 0.6343932841636455),
  scale: new Vector3(-7.948929172439202, -7.948929172439202, -7.948929172439202)
})
ornament_04.addComponentOrReplace(transform_156)
engine.addEntity(ornament_04)

const junglePlant_05 = new Entity()
junglePlant_05.setParent(scene)
const gltfShape_27 = new GLTFShape('models/JunglePlant_05/JunglePlant_05.glb')
junglePlant_05.addComponentOrReplace(gltfShape_27)
const transform_157 = new Transform({
  position: new Vector3(56.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_05.addComponentOrReplace(transform_157)
engine.addEntity(junglePlant_05)

const rockArc_01 = new Entity()
rockArc_01.setParent(scene)
const gltfShape_28 = new GLTFShape('models/RockArc_01/RockArc_01.glb')
rockArc_01.addComponentOrReplace(gltfShape_28)
const transform_158 = new Transform({
  position: new Vector3(57, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.42264973081037427, 0.42264973081037427, 0.42264973081037427)
})
rockArc_01.addComponentOrReplace(transform_158)
engine.addEntity(rockArc_01)

const treePine_01_11 = new Entity()
treePine_01_11.setParent(scene)
treePine_01_11.addComponentOrReplace(gltfShape_8)
const transform_159 = new Transform({
  position: new Vector3(2, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_11.addComponentOrReplace(transform_159)
engine.addEntity(treePine_01_11)

const treeSycamore_03_11 = new Entity()
treeSycamore_03_11.setParent(scene)
treeSycamore_03_11.addComponentOrReplace(gltfShape_12)
const transform_160 = new Transform({
  position: new Vector3(2, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_11.addComponentOrReplace(transform_160)
engine.addEntity(treeSycamore_03_11)

const treeSycamore_01_11 = new Entity()
treeSycamore_01_11.setParent(scene)
treeSycamore_01_11.addComponentOrReplace(gltfShape_11)
const transform_161 = new Transform({
  position: new Vector3(2, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_11.addComponentOrReplace(transform_161)
engine.addEntity(treeSycamore_01_11)

const treePine_01_12 = new Entity()
treePine_01_12.setParent(scene)
treePine_01_12.addComponentOrReplace(gltfShape_8)
const transform_162 = new Transform({
  position: new Vector3(2, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_12.addComponentOrReplace(transform_162)
engine.addEntity(treePine_01_12)

const treePine_03_11 = new Entity()
treePine_03_11.setParent(scene)
treePine_03_11.addComponentOrReplace(gltfShape_10)
const transform_163 = new Transform({
  position: new Vector3(2, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_11.addComponentOrReplace(transform_163)
engine.addEntity(treePine_03_11)

const treePine_01_13 = new Entity()
treePine_01_13.setParent(scene)
treePine_01_13.addComponentOrReplace(gltfShape_8)
const transform_164 = new Transform({
  position: new Vector3(5.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_13.addComponentOrReplace(transform_164)
engine.addEntity(treePine_01_13)

const treeSycamore_01_12 = new Entity()
treeSycamore_01_12.setParent(scene)
treeSycamore_01_12.addComponentOrReplace(gltfShape_11)
const transform_165 = new Transform({
  position: new Vector3(9, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_12.addComponentOrReplace(transform_165)
engine.addEntity(treeSycamore_01_12)

const treeSycamore_03_12 = new Entity()
treeSycamore_03_12.setParent(scene)
treeSycamore_03_12.addComponentOrReplace(gltfShape_12)
const transform_166 = new Transform({
  position: new Vector3(13.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_12.addComponentOrReplace(transform_166)
engine.addEntity(treeSycamore_03_12)

const treePine_01_14 = new Entity()
treePine_01_14.setParent(scene)
treePine_01_14.addComponentOrReplace(gltfShape_8)
const transform_167 = new Transform({
  position: new Vector3(18, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_14.addComponentOrReplace(transform_167)
engine.addEntity(treePine_01_14)

const treePine_03_12 = new Entity()
treePine_03_12.setParent(scene)
treePine_03_12.addComponentOrReplace(gltfShape_10)
const transform_168 = new Transform({
  position: new Vector3(22, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_12.addComponentOrReplace(transform_168)
engine.addEntity(treePine_03_12)

const treeSycamore_01_13 = new Entity()
treeSycamore_01_13.setParent(scene)
treeSycamore_01_13.addComponentOrReplace(gltfShape_11)
const transform_169 = new Transform({
  position: new Vector3(26.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_13.addComponentOrReplace(transform_169)
engine.addEntity(treeSycamore_01_13)

const treeSycamore_03_13 = new Entity()
treeSycamore_03_13.setParent(scene)
treeSycamore_03_13.addComponentOrReplace(gltfShape_12)
const transform_170 = new Transform({
  position: new Vector3(30.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_13.addComponentOrReplace(transform_170)
engine.addEntity(treeSycamore_03_13)

const treeSycamore_03_14 = new Entity()
treeSycamore_03_14.setParent(scene)
treeSycamore_03_14.addComponentOrReplace(gltfShape_12)
const transform_171 = new Transform({
  position: new Vector3(37.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03_14.addComponentOrReplace(transform_171)
engine.addEntity(treeSycamore_03_14)

const treeSycamore_01_14 = new Entity()
treeSycamore_01_14.setParent(scene)
treeSycamore_01_14.addComponentOrReplace(gltfShape_11)
const transform_172 = new Transform({
  position: new Vector3(41.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_01_14.addComponentOrReplace(transform_172)
engine.addEntity(treeSycamore_01_14)

const treePine_03_13 = new Entity()
treePine_03_13.setParent(scene)
treePine_03_13.addComponentOrReplace(gltfShape_10)
const transform_173 = new Transform({
  position: new Vector3(45.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_13.addComponentOrReplace(transform_173)
engine.addEntity(treePine_03_13)

const treePine_01_15 = new Entity()
treePine_01_15.setParent(scene)
treePine_01_15.addComponentOrReplace(gltfShape_8)
const transform_174 = new Transform({
  position: new Vector3(49, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_15.addComponentOrReplace(transform_174)
engine.addEntity(treePine_01_15)

const treeFir_02_3 = new Entity()
treeFir_02_3.setParent(scene)
treeFir_02_3.addComponentOrReplace(gltfShape_15)
const transform_175 = new Transform({
  position: new Vector3(33.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
treeFir_02_3.addComponentOrReplace(transform_175)
engine.addEntity(treeFir_02_3)

const pedestal_01_7 = new Entity()
pedestal_01_7.setParent(scene)
pedestal_01_7.addComponentOrReplace(gltfShape_20)
const transform_176 = new Transform({
  position: new Vector3(20, 1.5, 55),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(0.7113248654051871, 0.7113248654051871, 0.7113248654051871)
})
pedestal_01_7.addComponentOrReplace(transform_176)
engine.addEntity(pedestal_01_7)

const pedestal_01_8 = new Entity()
pedestal_01_8.setParent(scene)
pedestal_01_8.addComponentOrReplace(gltfShape_20)
const transform_177 = new Transform({
  position: new Vector3(23, 1.5, 58),
  rotation: new Quaternion(0, 0.3826834323650898, 0, 0.9238795325112867),
  scale: new Vector3(0.7113248654051871, 0.7113248654051871, 0.7113248654051871)
})
pedestal_01_8.addComponentOrReplace(transform_177)
engine.addEntity(pedestal_01_8)

const pedestal_01_9 = new Entity()
pedestal_01_9.setParent(scene)
pedestal_01_9.addComponentOrReplace(gltfShape_20)
const transform_178 = new Transform({
  position: new Vector3(25, 1.5, 54),
  rotation: new Quaternion(0, -0.956940335732209, 0, -0.2902846772544624),
  scale: new Vector3(0.7113248654051871, 0.7113248654051871, 0.7113248654051871)
})
pedestal_01_9.addComponentOrReplace(transform_178)
engine.addEntity(pedestal_01_9)

const deer = new Entity()
deer.setParent(scene)
const gltfShape_29 = new GLTFShape('models/deer.glb')
deer.addComponentOrReplace(gltfShape_29)
const transform_179 = new Transform({
  position: new Vector3(12, 0, 54.5),
  rotation: new Quaternion(0, 0.9807852804032303, 0, 0.19509032201612816),
  scale: new Vector3(2.154700538379253, 2.154700538379253, 2.154700538379253)
})
deer.addComponentOrReplace(transform_179)
deer.addComponentOrReplace(new Behavior())
deer.addComponentOrReplace(new LerpData(transform_179.position,transform_179.position))
engine.addEntity(deer)

const cow = new Entity()
cow.setParent(scene)
const gltfShape_30 = new GLTFShape('models/cow_with_collider.glb')
cow.addComponentOrReplace(gltfShape_30)
const transform_180 = new Transform({
  position: new Vector3(6.5, 0, 52),
  rotation: new Quaternion(0, 0.7730104533627371, 0, 0.6343932841636455),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
cow.addComponentOrReplace(transform_180)
cow.addComponentOrReplace(new Behavior())
cow.addComponentOrReplace(new LerpData(transform_180.position,transform_180.position))
engine.addEntity(cow)

const junglePlant_06 = new Entity()
junglePlant_06.setParent(scene)
const gltfShape_31 = new GLTFShape('models/JunglePlant_06/JunglePlant_06.glb')
junglePlant_06.addComponentOrReplace(gltfShape_31)
const transform_181 = new Transform({
  position: new Vector3(10, 0, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06.addComponentOrReplace(transform_181)
engine.addEntity(junglePlant_06)

const grass04 = new Entity()
grass04.setParent(scene)
const gltfShape_32 = new GLTFShape('models/Grass_04/Grass04.glb')
grass04.addComponentOrReplace(gltfShape_32)
const transform_182 = new Transform({
  position: new Vector3(11, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04.addComponentOrReplace(transform_182)
engine.addEntity(grass04)

const grass05 = new Entity()
grass05.setParent(scene)
const gltfShape_33 = new GLTFShape('models/Grass_05/Grass05.glb')
grass05.addComponentOrReplace(gltfShape_33)
const transform_183 = new Transform({
  position: new Vector3(13.5, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05.addComponentOrReplace(transform_183)
engine.addEntity(grass05)

const grass03 = new Entity()
grass03.setParent(scene)
const gltfShape_34 = new GLTFShape('models/Grass_03/Grass03.glb')
grass03.addComponentOrReplace(gltfShape_34)
const transform_184 = new Transform({
  position: new Vector3(13, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03.addComponentOrReplace(transform_184)
engine.addEntity(grass03)

const grass_02 = new Entity()
grass_02.setParent(scene)
const gltfShape_35 = new GLTFShape('models/Grass_02/Grass_02.glb')
grass_02.addComponentOrReplace(gltfShape_35)
const transform_185 = new Transform({
  position: new Vector3(9, 0, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02.addComponentOrReplace(transform_185)
engine.addEntity(grass_02)

const grass05_2 = new Entity()
grass05_2.setParent(scene)
grass05_2.addComponentOrReplace(gltfShape_33)
const transform_186 = new Transform({
  position: new Vector3(12, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_2.addComponentOrReplace(transform_186)
engine.addEntity(grass05_2)

const grass05_3 = new Entity()
grass05_3.setParent(scene)
grass05_3.addComponentOrReplace(gltfShape_33)
const transform_187 = new Transform({
  position: new Vector3(12, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_3.addComponentOrReplace(transform_187)
engine.addEntity(grass05_3)

const grass05_4 = new Entity()
grass05_4.setParent(scene)
grass05_4.addComponentOrReplace(gltfShape_33)
const transform_188 = new Transform({
  position: new Vector3(8.5, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_4.addComponentOrReplace(transform_188)
engine.addEntity(grass05_4)

const grass05_5 = new Entity()
grass05_5.setParent(scene)
grass05_5.addComponentOrReplace(gltfShape_33)
const transform_189 = new Transform({
  position: new Vector3(8.5, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_5.addComponentOrReplace(transform_189)
engine.addEntity(grass05_5)

const grass05_6 = new Entity()
grass05_6.setParent(scene)
grass05_6.addComponentOrReplace(gltfShape_33)
const transform_190 = new Transform({
  position: new Vector3(4.5, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_6.addComponentOrReplace(transform_190)
engine.addEntity(grass05_6)

const grass05_7 = new Entity()
grass05_7.setParent(scene)
grass05_7.addComponentOrReplace(gltfShape_33)
const transform_191 = new Transform({
  position: new Vector3(4.5, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_7.addComponentOrReplace(transform_191)
engine.addEntity(grass05_7)

const grass05_8 = new Entity()
grass05_8.setParent(scene)
grass05_8.addComponentOrReplace(gltfShape_33)
const transform_192 = new Transform({
  position: new Vector3(6, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_8.addComponentOrReplace(transform_192)
engine.addEntity(grass05_8)

const grass05_9 = new Entity()
grass05_9.setParent(scene)
grass05_9.addComponentOrReplace(gltfShape_33)
const transform_193 = new Transform({
  position: new Vector3(9, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_9.addComponentOrReplace(transform_193)
engine.addEntity(grass05_9)

const grass05_10 = new Entity()
grass05_10.setParent(scene)
grass05_10.addComponentOrReplace(gltfShape_33)
const transform_194 = new Transform({
  position: new Vector3(9, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_10.addComponentOrReplace(transform_194)
engine.addEntity(grass05_10)

const grass05_11 = new Entity()
grass05_11.setParent(scene)
grass05_11.addComponentOrReplace(gltfShape_33)
const transform_195 = new Transform({
  position: new Vector3(13.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_11.addComponentOrReplace(transform_195)
engine.addEntity(grass05_11)

const grass05_12 = new Entity()
grass05_12.setParent(scene)
grass05_12.addComponentOrReplace(gltfShape_33)
const transform_196 = new Transform({
  position: new Vector3(3.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_12.addComponentOrReplace(transform_196)
engine.addEntity(grass05_12)

const grass05_13 = new Entity()
grass05_13.setParent(scene)
grass05_13.addComponentOrReplace(gltfShape_33)
const transform_197 = new Transform({
  position: new Vector3(3.5, 0, 55.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_13.addComponentOrReplace(transform_197)
engine.addEntity(grass05_13)

const grass05_14 = new Entity()
grass05_14.setParent(scene)
grass05_14.addComponentOrReplace(gltfShape_33)
const transform_198 = new Transform({
  position: new Vector3(14, 0, 55.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_14.addComponentOrReplace(transform_198)
engine.addEntity(grass05_14)

const grass05_15 = new Entity()
grass05_15.setParent(scene)
grass05_15.addComponentOrReplace(gltfShape_33)
const transform_199 = new Transform({
  position: new Vector3(14, 0, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_15.addComponentOrReplace(transform_199)
engine.addEntity(grass05_15)

const grass05_16 = new Entity()
grass05_16.setParent(scene)
grass05_16.addComponentOrReplace(gltfShape_33)
const transform_200 = new Transform({
  position: new Vector3(16, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_16.addComponentOrReplace(transform_200)
engine.addEntity(grass05_16)

const grass05_17 = new Entity()
grass05_17.setParent(scene)
grass05_17.addComponentOrReplace(gltfShape_33)
const transform_201 = new Transform({
  position: new Vector3(16, 0, 50),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_17.addComponentOrReplace(transform_201)
engine.addEntity(grass05_17)

const grass05_18 = new Entity()
grass05_18.setParent(scene)
grass05_18.addComponentOrReplace(gltfShape_33)
const transform_202 = new Transform({
  position: new Vector3(13, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_18.addComponentOrReplace(transform_202)
engine.addEntity(grass05_18)

const grass04_2 = new Entity()
grass04_2.setParent(scene)
grass04_2.addComponentOrReplace(gltfShape_32)
const transform_203 = new Transform({
  position: new Vector3(11, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_2.addComponentOrReplace(transform_203)
engine.addEntity(grass04_2)

const grass04_3 = new Entity()
grass04_3.setParent(scene)
grass04_3.addComponentOrReplace(gltfShape_32)
const transform_204 = new Transform({
  position: new Vector3(11, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_3.addComponentOrReplace(transform_204)
engine.addEntity(grass04_3)

const grass04_4 = new Entity()
grass04_4.setParent(scene)
grass04_4.addComponentOrReplace(gltfShape_32)
const transform_205 = new Transform({
  position: new Vector3(12, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_4.addComponentOrReplace(transform_205)
engine.addEntity(grass04_4)

const grass04_5 = new Entity()
grass04_5.setParent(scene)
grass04_5.addComponentOrReplace(gltfShape_32)
const transform_206 = new Transform({
  position: new Vector3(14, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_5.addComponentOrReplace(transform_206)
engine.addEntity(grass04_5)

const grass04_6 = new Entity()
grass04_6.setParent(scene)
grass04_6.addComponentOrReplace(gltfShape_32)
const transform_207 = new Transform({
  position: new Vector3(14, 0, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_6.addComponentOrReplace(transform_207)
engine.addEntity(grass04_6)

const grass04_7 = new Entity()
grass04_7.setParent(scene)
grass04_7.addComponentOrReplace(gltfShape_32)
const transform_208 = new Transform({
  position: new Vector3(15, 0, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_7.addComponentOrReplace(transform_208)
engine.addEntity(grass04_7)

const grass04_8 = new Entity()
grass04_8.setParent(scene)
grass04_8.addComponentOrReplace(gltfShape_32)
const transform_209 = new Transform({
  position: new Vector3(15, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_8.addComponentOrReplace(transform_209)
engine.addEntity(grass04_8)

const grass04_9 = new Entity()
grass04_9.setParent(scene)
grass04_9.addComponentOrReplace(gltfShape_32)
const transform_210 = new Transform({
  position: new Vector3(15.5, 0, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_9.addComponentOrReplace(transform_210)
engine.addEntity(grass04_9)

const grass04_10 = new Entity()
grass04_10.setParent(scene)
grass04_10.addComponentOrReplace(gltfShape_32)
const transform_211 = new Transform({
  position: new Vector3(15.5, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_10.addComponentOrReplace(transform_211)
engine.addEntity(grass04_10)

const grass04_11 = new Entity()
grass04_11.setParent(scene)
grass04_11.addComponentOrReplace(gltfShape_32)
const transform_212 = new Transform({
  position: new Vector3(15.5, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_11.addComponentOrReplace(transform_212)
engine.addEntity(grass04_11)

const grass04_12 = new Entity()
grass04_12.setParent(scene)
grass04_12.addComponentOrReplace(gltfShape_32)
const transform_213 = new Transform({
  position: new Vector3(13.5, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_12.addComponentOrReplace(transform_213)
engine.addEntity(grass04_12)

const grass04_13 = new Entity()
grass04_13.setParent(scene)
grass04_13.addComponentOrReplace(gltfShape_32)
const transform_214 = new Transform({
  position: new Vector3(13.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_13.addComponentOrReplace(transform_214)
engine.addEntity(grass04_13)

const grass03_2 = new Entity()
grass03_2.setParent(scene)
grass03_2.addComponentOrReplace(gltfShape_34)
const transform_215 = new Transform({
  position: new Vector3(11, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_2.addComponentOrReplace(transform_215)
engine.addEntity(grass03_2)

const grass03_3 = new Entity()
grass03_3.setParent(scene)
grass03_3.addComponentOrReplace(gltfShape_34)
const transform_216 = new Transform({
  position: new Vector3(11, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_3.addComponentOrReplace(transform_216)
engine.addEntity(grass03_3)

const grass03_4 = new Entity()
grass03_4.setParent(scene)
grass03_4.addComponentOrReplace(gltfShape_34)
const transform_217 = new Transform({
  position: new Vector3(14, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_4.addComponentOrReplace(transform_217)
engine.addEntity(grass03_4)

const grass03_5 = new Entity()
grass03_5.setParent(scene)
grass03_5.addComponentOrReplace(gltfShape_34)
const transform_218 = new Transform({
  position: new Vector3(14, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_5.addComponentOrReplace(transform_218)
engine.addEntity(grass03_5)

const grass03_6 = new Entity()
grass03_6.setParent(scene)
grass03_6.addComponentOrReplace(gltfShape_34)
const transform_219 = new Transform({
  position: new Vector3(16, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_6.addComponentOrReplace(transform_219)
engine.addEntity(grass03_6)

const grass03_7 = new Entity()
grass03_7.setParent(scene)
grass03_7.addComponentOrReplace(gltfShape_34)
const transform_220 = new Transform({
  position: new Vector3(16, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_7.addComponentOrReplace(transform_220)
engine.addEntity(grass03_7)

const grass03_8 = new Entity()
grass03_8.setParent(scene)
grass03_8.addComponentOrReplace(gltfShape_34)
const transform_221 = new Transform({
  position: new Vector3(16.5, 0, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_8.addComponentOrReplace(transform_221)
engine.addEntity(grass03_8)

const grass03_9 = new Entity()
grass03_9.setParent(scene)
grass03_9.addComponentOrReplace(gltfShape_34)
const transform_222 = new Transform({
  position: new Vector3(17.5, 0, 55),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_9.addComponentOrReplace(transform_222)
engine.addEntity(grass03_9)

const grass03_10 = new Entity()
grass03_10.setParent(scene)
grass03_10.addComponentOrReplace(gltfShape_34)
const transform_223 = new Transform({
  position: new Vector3(17, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_10.addComponentOrReplace(transform_223)
engine.addEntity(grass03_10)

const grass03_11 = new Entity()
grass03_11.setParent(scene)
grass03_11.addComponentOrReplace(gltfShape_34)
const transform_224 = new Transform({
  position: new Vector3(6.5, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_11.addComponentOrReplace(transform_224)
engine.addEntity(grass03_11)

const grass03_12 = new Entity()
grass03_12.setParent(scene)
grass03_12.addComponentOrReplace(gltfShape_34)
const transform_225 = new Transform({
  position: new Vector3(6.5, 0, 55),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_12.addComponentOrReplace(transform_225)
engine.addEntity(grass03_12)

const grass03_13 = new Entity()
grass03_13.setParent(scene)
grass03_13.addComponentOrReplace(gltfShape_34)
const transform_226 = new Transform({
  position: new Vector3(5, 0, 55),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_13.addComponentOrReplace(transform_226)
engine.addEntity(grass03_13)

const grass03_14 = new Entity()
grass03_14.setParent(scene)
grass03_14.addComponentOrReplace(gltfShape_34)
const transform_227 = new Transform({
  position: new Vector3(5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_14.addComponentOrReplace(transform_227)
engine.addEntity(grass03_14)

const grass03_15 = new Entity()
grass03_15.setParent(scene)
grass03_15.addComponentOrReplace(gltfShape_34)
const transform_228 = new Transform({
  position: new Vector3(7.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_15.addComponentOrReplace(transform_228)
engine.addEntity(grass03_15)

const grass03_16 = new Entity()
grass03_16.setParent(scene)
grass03_16.addComponentOrReplace(gltfShape_34)
const transform_229 = new Transform({
  position: new Vector3(7.5, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_16.addComponentOrReplace(transform_229)
engine.addEntity(grass03_16)

const grass03_17 = new Entity()
grass03_17.setParent(scene)
grass03_17.addComponentOrReplace(gltfShape_34)
const transform_230 = new Transform({
  position: new Vector3(9.5, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_17.addComponentOrReplace(transform_230)
engine.addEntity(grass03_17)

const grass03_18 = new Entity()
grass03_18.setParent(scene)
grass03_18.addComponentOrReplace(gltfShape_34)
const transform_231 = new Transform({
  position: new Vector3(10.5, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_18.addComponentOrReplace(transform_231)
engine.addEntity(grass03_18)

const grass03_19 = new Entity()
grass03_19.setParent(scene)
grass03_19.addComponentOrReplace(gltfShape_34)
const transform_232 = new Transform({
  position: new Vector3(14, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_19.addComponentOrReplace(transform_232)
engine.addEntity(grass03_19)

const grass_02_2 = new Entity()
grass_02_2.setParent(scene)
grass_02_2.addComponentOrReplace(gltfShape_35)
const transform_233 = new Transform({
  position: new Vector3(12.5, 0, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_2.addComponentOrReplace(transform_233)
engine.addEntity(grass_02_2)

const grass_02_3 = new Entity()
grass_02_3.setParent(scene)
grass_02_3.addComponentOrReplace(gltfShape_35)
const transform_234 = new Transform({
  position: new Vector3(12.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_3.addComponentOrReplace(transform_234)
engine.addEntity(grass_02_3)

const grass_02_4 = new Entity()
grass_02_4.setParent(scene)
grass_02_4.addComponentOrReplace(gltfShape_35)
const transform_235 = new Transform({
  position: new Vector3(15, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_4.addComponentOrReplace(transform_235)
engine.addEntity(grass_02_4)

const grass_02_5 = new Entity()
grass_02_5.setParent(scene)
grass_02_5.addComponentOrReplace(gltfShape_35)
const transform_236 = new Transform({
  position: new Vector3(15, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_5.addComponentOrReplace(transform_236)
engine.addEntity(grass_02_5)

const grass_02_6 = new Entity()
grass_02_6.setParent(scene)
grass_02_6.addComponentOrReplace(gltfShape_35)
const transform_237 = new Transform({
  position: new Vector3(7, 0, 55.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_6.addComponentOrReplace(transform_237)
engine.addEntity(grass_02_6)

const grass_02_7 = new Entity()
grass_02_7.setParent(scene)
grass_02_7.addComponentOrReplace(gltfShape_35)
const transform_238 = new Transform({
  position: new Vector3(7, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_7.addComponentOrReplace(transform_238)
engine.addEntity(grass_02_7)

const grass_02_8 = new Entity()
grass_02_8.setParent(scene)
grass_02_8.addComponentOrReplace(gltfShape_35)
const transform_239 = new Transform({
  position: new Vector3(9.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_8.addComponentOrReplace(transform_239)
engine.addEntity(grass_02_8)

const grass_02_9 = new Entity()
grass_02_9.setParent(scene)
grass_02_9.addComponentOrReplace(gltfShape_35)
const transform_240 = new Transform({
  position: new Vector3(9.5, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_9.addComponentOrReplace(transform_240)
engine.addEntity(grass_02_9)

const grass_02_10 = new Entity()
grass_02_10.setParent(scene)
grass_02_10.addComponentOrReplace(gltfShape_35)
const transform_241 = new Transform({
  position: new Vector3(2.5, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_10.addComponentOrReplace(transform_241)
engine.addEntity(grass_02_10)

const grass_02_11 = new Entity()
grass_02_11.setParent(scene)
grass_02_11.addComponentOrReplace(gltfShape_35)
const transform_242 = new Transform({
  position: new Vector3(2.5, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_11.addComponentOrReplace(transform_242)
engine.addEntity(grass_02_11)

const grass_02_12 = new Entity()
grass_02_12.setParent(scene)
grass_02_12.addComponentOrReplace(gltfShape_35)
const transform_243 = new Transform({
  position: new Vector3(2.5, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass_02_12.addComponentOrReplace(transform_243)
engine.addEntity(grass_02_12)

const grass05_19 = new Entity()
grass05_19.setParent(scene)
grass05_19.addComponentOrReplace(gltfShape_33)
const transform_244 = new Transform({
  position: new Vector3(6, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_19.addComponentOrReplace(transform_244)
engine.addEntity(grass05_19)

const grass03_20 = new Entity()
grass03_20.setParent(scene)
grass03_20.addComponentOrReplace(gltfShape_34)
const transform_245 = new Transform({
  position: new Vector3(10.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass03_20.addComponentOrReplace(transform_245)
engine.addEntity(grass03_20)

const junglePlant_06_2 = new Entity()
junglePlant_06_2.setParent(scene)
junglePlant_06_2.addComponentOrReplace(gltfShape_31)
const transform_246 = new Transform({
  position: new Vector3(10, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_2.addComponentOrReplace(transform_246)
engine.addEntity(junglePlant_06_2)

const junglePlant_06_3 = new Entity()
junglePlant_06_3.setParent(scene)
junglePlant_06_3.addComponentOrReplace(gltfShape_31)
const transform_247 = new Transform({
  position: new Vector3(14, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_3.addComponentOrReplace(transform_247)
engine.addEntity(junglePlant_06_3)

const junglePlant_06_4 = new Entity()
junglePlant_06_4.setParent(scene)
junglePlant_06_4.addComponentOrReplace(gltfShape_31)
const transform_248 = new Transform({
  position: new Vector3(14, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_4.addComponentOrReplace(transform_248)
engine.addEntity(junglePlant_06_4)

const junglePlant_06_5 = new Entity()
junglePlant_06_5.setParent(scene)
junglePlant_06_5.addComponentOrReplace(gltfShape_31)
const transform_249 = new Transform({
  position: new Vector3(3, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_5.addComponentOrReplace(transform_249)
engine.addEntity(junglePlant_06_5)

const junglePlant_06_6 = new Entity()
junglePlant_06_6.setParent(scene)
junglePlant_06_6.addComponentOrReplace(gltfShape_31)
const transform_250 = new Transform({
  position: new Vector3(3, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_6.addComponentOrReplace(transform_250)
engine.addEntity(junglePlant_06_6)

const junglePlant_06_7 = new Entity()
junglePlant_06_7.setParent(scene)
junglePlant_06_7.addComponentOrReplace(gltfShape_31)
const transform_251 = new Transform({
  position: new Vector3(6, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_7.addComponentOrReplace(transform_251)
engine.addEntity(junglePlant_06_7)

const grass05_20 = new Entity()
grass05_20.setParent(scene)
grass05_20.addComponentOrReplace(gltfShape_33)
const transform_252 = new Transform({
  position: new Vector3(16.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_20.addComponentOrReplace(transform_252)
engine.addEntity(grass05_20)

const grass04_14 = new Entity()
grass04_14.setParent(scene)
grass04_14.addComponentOrReplace(gltfShape_32)
const transform_253 = new Transform({
  position: new Vector3(16.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_14.addComponentOrReplace(transform_253)
engine.addEntity(grass04_14)

const grass04_15 = new Entity()
grass04_15.setParent(scene)
grass04_15.addComponentOrReplace(gltfShape_32)
const transform_254 = new Transform({
  position: new Vector3(16.5, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_15.addComponentOrReplace(transform_254)
engine.addEntity(grass04_15)

const grass05_21 = new Entity()
grass05_21.setParent(scene)
grass05_21.addComponentOrReplace(gltfShape_33)
const transform_255 = new Transform({
  position: new Vector3(16.5, 0, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_21.addComponentOrReplace(transform_255)
engine.addEntity(grass05_21)

const grass04_16 = new Entity()
grass04_16.setParent(scene)
grass04_16.addComponentOrReplace(gltfShape_32)
const transform_256 = new Transform({
  position: new Vector3(16.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_16.addComponentOrReplace(transform_256)
engine.addEntity(grass04_16)

const grass05_22 = new Entity()
grass05_22.setParent(scene)
grass05_22.addComponentOrReplace(gltfShape_33)
const transform_257 = new Transform({
  position: new Vector3(16.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_22.addComponentOrReplace(transform_257)
engine.addEntity(grass05_22)

const grass04_17 = new Entity()
grass04_17.setParent(scene)
grass04_17.addComponentOrReplace(gltfShape_32)
const transform_258 = new Transform({
  position: new Vector3(16.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_17.addComponentOrReplace(transform_258)
engine.addEntity(grass04_17)

const grass05_23 = new Entity()
grass05_23.setParent(scene)
grass05_23.addComponentOrReplace(gltfShape_33)
const transform_259 = new Transform({
  position: new Vector3(16.5, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_23.addComponentOrReplace(transform_259)
engine.addEntity(grass05_23)

const grass05_24 = new Entity()
grass05_24.setParent(scene)
grass05_24.addComponentOrReplace(gltfShape_33)
const transform_260 = new Transform({
  position: new Vector3(16.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_24.addComponentOrReplace(transform_260)
engine.addEntity(grass05_24)

const grass05_25 = new Entity()
grass05_25.setParent(scene)
grass05_25.addComponentOrReplace(gltfShape_33)
const transform_261 = new Transform({
  position: new Vector3(2, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_25.addComponentOrReplace(transform_261)
engine.addEntity(grass05_25)

const grass05_26 = new Entity()
grass05_26.setParent(scene)
grass05_26.addComponentOrReplace(gltfShape_33)
const transform_262 = new Transform({
  position: new Vector3(2, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_26.addComponentOrReplace(transform_262)
engine.addEntity(grass05_26)

const grass05_27 = new Entity()
grass05_27.setParent(scene)
grass05_27.addComponentOrReplace(gltfShape_33)
const transform_263 = new Transform({
  position: new Vector3(2, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_27.addComponentOrReplace(transform_263)
engine.addEntity(grass05_27)

const grass05_28 = new Entity()
grass05_28.setParent(scene)
grass05_28.addComponentOrReplace(gltfShape_33)
const transform_264 = new Transform({
  position: new Vector3(2, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_28.addComponentOrReplace(transform_264)
engine.addEntity(grass05_28)

const grass04_18 = new Entity()
grass04_18.setParent(scene)
grass04_18.addComponentOrReplace(gltfShape_32)
const transform_265 = new Transform({
  position: new Vector3(2, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_18.addComponentOrReplace(transform_265)
engine.addEntity(grass04_18)

const grass05_29 = new Entity()
grass05_29.setParent(scene)
grass05_29.addComponentOrReplace(gltfShape_33)
const transform_266 = new Transform({
  position: new Vector3(2.0000000000000004, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_29.addComponentOrReplace(transform_266)
engine.addEntity(grass05_29)

const grass04_19 = new Entity()
grass04_19.setParent(scene)
grass04_19.addComponentOrReplace(gltfShape_32)
const transform_267 = new Transform({
  position: new Vector3(2, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_19.addComponentOrReplace(transform_267)
engine.addEntity(grass04_19)

const grass05_30 = new Entity()
grass05_30.setParent(scene)
grass05_30.addComponentOrReplace(gltfShape_33)
const transform_268 = new Transform({
  position: new Vector3(2.0000000000000004, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_30.addComponentOrReplace(transform_268)
engine.addEntity(grass05_30)

const grass04_20 = new Entity()
grass04_20.setParent(scene)
grass04_20.addComponentOrReplace(gltfShape_32)
const transform_269 = new Transform({
  position: new Vector3(2, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_20.addComponentOrReplace(transform_269)
engine.addEntity(grass04_20)

const grass05_31 = new Entity()
grass05_31.setParent(scene)
grass05_31.addComponentOrReplace(gltfShape_33)
const transform_270 = new Transform({
  position: new Vector3(2.0000000000000004, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_31.addComponentOrReplace(transform_270)
engine.addEntity(grass05_31)

const grass04_21 = new Entity()
grass04_21.setParent(scene)
grass04_21.addComponentOrReplace(gltfShape_32)
const transform_271 = new Transform({
  position: new Vector3(2, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_21.addComponentOrReplace(transform_271)
engine.addEntity(grass04_21)

const grass05_32 = new Entity()
grass05_32.setParent(scene)
grass05_32.addComponentOrReplace(gltfShape_33)
const transform_272 = new Transform({
  position: new Vector3(2, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_32.addComponentOrReplace(transform_272)
engine.addEntity(grass05_32)

const grass04_22 = new Entity()
grass04_22.setParent(scene)
grass04_22.addComponentOrReplace(gltfShape_32)
const transform_273 = new Transform({
  position: new Vector3(2, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_22.addComponentOrReplace(transform_273)
engine.addEntity(grass04_22)

const grass05_33 = new Entity()
grass05_33.setParent(scene)
grass05_33.addComponentOrReplace(gltfShape_33)
const transform_274 = new Transform({
  position: new Vector3(2, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_33.addComponentOrReplace(transform_274)
engine.addEntity(grass05_33)

const grass04_23 = new Entity()
grass04_23.setParent(scene)
grass04_23.addComponentOrReplace(gltfShape_32)
const transform_275 = new Transform({
  position: new Vector3(2, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_23.addComponentOrReplace(transform_275)
engine.addEntity(grass04_23)

const grass05_34 = new Entity()
grass05_34.setParent(scene)
grass05_34.addComponentOrReplace(gltfShape_33)
const transform_276 = new Transform({
  position: new Vector3(2, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_34.addComponentOrReplace(transform_276)
engine.addEntity(grass05_34)

const grass04_24 = new Entity()
grass04_24.setParent(scene)
grass04_24.addComponentOrReplace(gltfShape_32)
const transform_277 = new Transform({
  position: new Vector3(2, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_24.addComponentOrReplace(transform_277)
engine.addEntity(grass04_24)

const grass05_35 = new Entity()
grass05_35.setParent(scene)
grass05_35.addComponentOrReplace(gltfShape_33)
const transform_278 = new Transform({
  position: new Vector3(2, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_35.addComponentOrReplace(transform_278)
engine.addEntity(grass05_35)

const grass04_25 = new Entity()
grass04_25.setParent(scene)
grass04_25.addComponentOrReplace(gltfShape_32)
const transform_279 = new Transform({
  position: new Vector3(2, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_25.addComponentOrReplace(transform_279)
engine.addEntity(grass04_25)

const grass04_26 = new Entity()
grass04_26.setParent(scene)
grass04_26.addComponentOrReplace(gltfShape_32)
const transform_280 = new Transform({
  position: new Vector3(2, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_26.addComponentOrReplace(transform_280)
engine.addEntity(grass04_26)

const grass04_27 = new Entity()
grass04_27.setParent(scene)
grass04_27.addComponentOrReplace(gltfShape_32)
const transform_281 = new Transform({
  position: new Vector3(2, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_27.addComponentOrReplace(transform_281)
engine.addEntity(grass04_27)

const grass04_28 = new Entity()
grass04_28.setParent(scene)
grass04_28.addComponentOrReplace(gltfShape_32)
const transform_282 = new Transform({
  position: new Vector3(2, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_28.addComponentOrReplace(transform_282)
engine.addEntity(grass04_28)

const grass04_29 = new Entity()
grass04_29.setParent(scene)
grass04_29.addComponentOrReplace(gltfShape_32)
const transform_283 = new Transform({
  position: new Vector3(2, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_29.addComponentOrReplace(transform_283)
engine.addEntity(grass04_29)

const grass04_30 = new Entity()
grass04_30.setParent(scene)
grass04_30.addComponentOrReplace(gltfShape_32)
const transform_284 = new Transform({
  position: new Vector3(2, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_30.addComponentOrReplace(transform_284)
engine.addEntity(grass04_30)

const grass04_31 = new Entity()
grass04_31.setParent(scene)
grass04_31.addComponentOrReplace(gltfShape_32)
const transform_285 = new Transform({
  position: new Vector3(2, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_31.addComponentOrReplace(transform_285)
engine.addEntity(grass04_31)

const grass04_32 = new Entity()
grass04_32.setParent(scene)
grass04_32.addComponentOrReplace(gltfShape_32)
const transform_286 = new Transform({
  position: new Vector3(2, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_32.addComponentOrReplace(transform_286)
engine.addEntity(grass04_32)

const grass04_33 = new Entity()
grass04_33.setParent(scene)
grass04_33.addComponentOrReplace(gltfShape_32)
const transform_287 = new Transform({
  position: new Vector3(2, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_33.addComponentOrReplace(transform_287)
engine.addEntity(grass04_33)

const grass04_34 = new Entity()
grass04_34.setParent(scene)
grass04_34.addComponentOrReplace(gltfShape_32)
const transform_288 = new Transform({
  position: new Vector3(2, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_34.addComponentOrReplace(transform_288)
engine.addEntity(grass04_34)

const grass04_35 = new Entity()
grass04_35.setParent(scene)
grass04_35.addComponentOrReplace(gltfShape_32)
const transform_289 = new Transform({
  position: new Vector3(2, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_35.addComponentOrReplace(transform_289)
engine.addEntity(grass04_35)

const grass04_36 = new Entity()
grass04_36.setParent(scene)
grass04_36.addComponentOrReplace(gltfShape_32)
const transform_290 = new Transform({
  position: new Vector3(2, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_36.addComponentOrReplace(transform_290)
engine.addEntity(grass04_36)

const grass05_36 = new Entity()
grass05_36.setParent(scene)
grass05_36.addComponentOrReplace(gltfShape_33)
const transform_291 = new Transform({
  position: new Vector3(2, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_36.addComponentOrReplace(transform_291)
engine.addEntity(grass05_36)

const grass04_37 = new Entity()
grass04_37.setParent(scene)
grass04_37.addComponentOrReplace(gltfShape_32)
const transform_292 = new Transform({
  position: new Vector3(2, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_37.addComponentOrReplace(transform_292)
engine.addEntity(grass04_37)

const grass05_37 = new Entity()
grass05_37.setParent(scene)
grass05_37.addComponentOrReplace(gltfShape_33)
const transform_293 = new Transform({
  position: new Vector3(2, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_37.addComponentOrReplace(transform_293)
engine.addEntity(grass05_37)

const grass04_38 = new Entity()
grass04_38.setParent(scene)
grass04_38.addComponentOrReplace(gltfShape_32)
const transform_294 = new Transform({
  position: new Vector3(2, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_38.addComponentOrReplace(transform_294)
engine.addEntity(grass04_38)

const grass05_38 = new Entity()
grass05_38.setParent(scene)
grass05_38.addComponentOrReplace(gltfShape_33)
const transform_295 = new Transform({
  position: new Vector3(2, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_38.addComponentOrReplace(transform_295)
engine.addEntity(grass05_38)

const grass05_39 = new Entity()
grass05_39.setParent(scene)
grass05_39.addComponentOrReplace(gltfShape_33)
const transform_296 = new Transform({
  position: new Vector3(2, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_39.addComponentOrReplace(transform_296)
engine.addEntity(grass05_39)

const grass04_39 = new Entity()
grass04_39.setParent(scene)
grass04_39.addComponentOrReplace(gltfShape_32)
const transform_297 = new Transform({
  position: new Vector3(2, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_39.addComponentOrReplace(transform_297)
engine.addEntity(grass04_39)

const grass05_40 = new Entity()
grass05_40.setParent(scene)
grass05_40.addComponentOrReplace(gltfShape_33)
const transform_298 = new Transform({
  position: new Vector3(2, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_40.addComponentOrReplace(transform_298)
engine.addEntity(grass05_40)

const grass05_41 = new Entity()
grass05_41.setParent(scene)
grass05_41.addComponentOrReplace(gltfShape_33)
const transform_299 = new Transform({
  position: new Vector3(2, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_41.addComponentOrReplace(transform_299)
engine.addEntity(grass05_41)

const grass04_40 = new Entity()
grass04_40.setParent(scene)
grass04_40.addComponentOrReplace(gltfShape_32)
const transform_300 = new Transform({
  position: new Vector3(2, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_40.addComponentOrReplace(transform_300)
engine.addEntity(grass04_40)

const grass05_42 = new Entity()
grass05_42.setParent(scene)
grass05_42.addComponentOrReplace(gltfShape_33)
const transform_301 = new Transform({
  position: new Vector3(2, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_42.addComponentOrReplace(transform_301)
engine.addEntity(grass05_42)

const grass04_41 = new Entity()
grass04_41.setParent(scene)
grass04_41.addComponentOrReplace(gltfShape_32)
const transform_302 = new Transform({
  position: new Vector3(2, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_41.addComponentOrReplace(transform_302)
engine.addEntity(grass04_41)

const grass04_42 = new Entity()
grass04_42.setParent(scene)
grass04_42.addComponentOrReplace(gltfShape_32)
const transform_303 = new Transform({
  position: new Vector3(2, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_42.addComponentOrReplace(transform_303)
engine.addEntity(grass04_42)

const grass05_43 = new Entity()
grass05_43.setParent(scene)
grass05_43.addComponentOrReplace(gltfShape_33)
const transform_304 = new Transform({
  position: new Vector3(2, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_43.addComponentOrReplace(transform_304)
engine.addEntity(grass05_43)

const grass04_43 = new Entity()
grass04_43.setParent(scene)
grass04_43.addComponentOrReplace(gltfShape_32)
const transform_305 = new Transform({
  position: new Vector3(2, 0, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_43.addComponentOrReplace(transform_305)
engine.addEntity(grass04_43)

const grass05_44 = new Entity()
grass05_44.setParent(scene)
grass05_44.addComponentOrReplace(gltfShape_33)
const transform_306 = new Transform({
  position: new Vector3(2, 0, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_44.addComponentOrReplace(transform_306)
engine.addEntity(grass05_44)

const grass05_45 = new Entity()
grass05_45.setParent(scene)
grass05_45.addComponentOrReplace(gltfShape_33)
const transform_307 = new Transform({
  position: new Vector3(2, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_45.addComponentOrReplace(transform_307)
engine.addEntity(grass05_45)

const grass05_46 = new Entity()
grass05_46.setParent(scene)
grass05_46.addComponentOrReplace(gltfShape_33)
const transform_308 = new Transform({
  position: new Vector3(2, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_46.addComponentOrReplace(transform_308)
engine.addEntity(grass05_46)

const grass05_47 = new Entity()
grass05_47.setParent(scene)
grass05_47.addComponentOrReplace(gltfShape_33)
const transform_309 = new Transform({
  position: new Vector3(2, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_47.addComponentOrReplace(transform_309)
engine.addEntity(grass05_47)

const grass05_48 = new Entity()
grass05_48.setParent(scene)
grass05_48.addComponentOrReplace(gltfShape_33)
const transform_310 = new Transform({
  position: new Vector3(2, 0, 45.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_48.addComponentOrReplace(transform_310)
engine.addEntity(grass05_48)

const grass05_49 = new Entity()
grass05_49.setParent(scene)
grass05_49.addComponentOrReplace(gltfShape_33)
const transform_311 = new Transform({
  position: new Vector3(2, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_49.addComponentOrReplace(transform_311)
engine.addEntity(grass05_49)

const grass04_44 = new Entity()
grass04_44.setParent(scene)
grass04_44.addComponentOrReplace(gltfShape_32)
const transform_312 = new Transform({
  position: new Vector3(2, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_44.addComponentOrReplace(transform_312)
engine.addEntity(grass04_44)

const grass05_50 = new Entity()
grass05_50.setParent(scene)
grass05_50.addComponentOrReplace(gltfShape_33)
const transform_313 = new Transform({
  position: new Vector3(2, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_50.addComponentOrReplace(transform_313)
engine.addEntity(grass05_50)

const grass04_45 = new Entity()
grass04_45.setParent(scene)
grass04_45.addComponentOrReplace(gltfShape_32)
const transform_314 = new Transform({
  position: new Vector3(2, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_45.addComponentOrReplace(transform_314)
engine.addEntity(grass04_45)

const grass05_51 = new Entity()
grass05_51.setParent(scene)
grass05_51.addComponentOrReplace(gltfShape_33)
const transform_315 = new Transform({
  position: new Vector3(2, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_51.addComponentOrReplace(transform_315)
engine.addEntity(grass05_51)

const grass05_52 = new Entity()
grass05_52.setParent(scene)
grass05_52.addComponentOrReplace(gltfShape_33)
const transform_316 = new Transform({
  position: new Vector3(2, 0, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_52.addComponentOrReplace(transform_316)
engine.addEntity(grass05_52)

const grass04_46 = new Entity()
grass04_46.setParent(scene)
grass04_46.addComponentOrReplace(gltfShape_32)
const transform_317 = new Transform({
  position: new Vector3(2, 0, 50),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_46.addComponentOrReplace(transform_317)
engine.addEntity(grass04_46)

const grass05_53 = new Entity()
grass05_53.setParent(scene)
grass05_53.addComponentOrReplace(gltfShape_33)
const transform_318 = new Transform({
  position: new Vector3(2, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_53.addComponentOrReplace(transform_318)
engine.addEntity(grass05_53)

const grass04_47 = new Entity()
grass04_47.setParent(scene)
grass04_47.addComponentOrReplace(gltfShape_32)
const transform_319 = new Transform({
  position: new Vector3(2, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_47.addComponentOrReplace(transform_319)
engine.addEntity(grass04_47)

const grass05_54 = new Entity()
grass05_54.setParent(scene)
grass05_54.addComponentOrReplace(gltfShape_33)
const transform_320 = new Transform({
  position: new Vector3(2, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_54.addComponentOrReplace(transform_320)
engine.addEntity(grass05_54)

const grass05_55 = new Entity()
grass05_55.setParent(scene)
grass05_55.addComponentOrReplace(gltfShape_33)
const transform_321 = new Transform({
  position: new Vector3(2, 0, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_55.addComponentOrReplace(transform_321)
engine.addEntity(grass05_55)

const grass05_56 = new Entity()
grass05_56.setParent(scene)
grass05_56.addComponentOrReplace(gltfShape_33)
const transform_322 = new Transform({
  position: new Vector3(2, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_56.addComponentOrReplace(transform_322)
engine.addEntity(grass05_56)

const grass04_48 = new Entity()
grass04_48.setParent(scene)
grass04_48.addComponentOrReplace(gltfShape_32)
const transform_323 = new Transform({
  position: new Vector3(2, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_48.addComponentOrReplace(transform_323)
engine.addEntity(grass04_48)

const grass04_49 = new Entity()
grass04_49.setParent(scene)
grass04_49.addComponentOrReplace(gltfShape_32)
const transform_324 = new Transform({
  position: new Vector3(2, 0, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_49.addComponentOrReplace(transform_324)
engine.addEntity(grass04_49)

const grass05_57 = new Entity()
grass05_57.setParent(scene)
grass05_57.addComponentOrReplace(gltfShape_33)
const transform_325 = new Transform({
  position: new Vector3(2, 0, 55),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_57.addComponentOrReplace(transform_325)
engine.addEntity(grass05_57)

const grass04_50 = new Entity()
grass04_50.setParent(scene)
grass04_50.addComponentOrReplace(gltfShape_32)
const transform_326 = new Transform({
  position: new Vector3(2, 0, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_50.addComponentOrReplace(transform_326)
engine.addEntity(grass04_50)

const grass04_51 = new Entity()
grass04_51.setParent(scene)
grass04_51.addComponentOrReplace(gltfShape_32)
const transform_327 = new Transform({
  position: new Vector3(2, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_51.addComponentOrReplace(transform_327)
engine.addEntity(grass04_51)

const grass04_52 = new Entity()
grass04_52.setParent(scene)
grass04_52.addComponentOrReplace(gltfShape_32)
const transform_328 = new Transform({
  position: new Vector3(2, 0, 55.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_52.addComponentOrReplace(transform_328)
engine.addEntity(grass04_52)

const grass05_58 = new Entity()
grass05_58.setParent(scene)
grass05_58.addComponentOrReplace(gltfShape_33)
const transform_329 = new Transform({
  position: new Vector3(2, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_58.addComponentOrReplace(transform_329)
engine.addEntity(grass05_58)

const grass04_53 = new Entity()
grass04_53.setParent(scene)
grass04_53.addComponentOrReplace(gltfShape_32)
const transform_330 = new Transform({
  position: new Vector3(2, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_53.addComponentOrReplace(transform_330)
engine.addEntity(grass04_53)

const grass05_59 = new Entity()
grass05_59.setParent(scene)
grass05_59.addComponentOrReplace(gltfShape_33)
const transform_331 = new Transform({
  position: new Vector3(2, 0, 57.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_59.addComponentOrReplace(transform_331)
engine.addEntity(grass05_59)

const grass04_54 = new Entity()
grass04_54.setParent(scene)
grass04_54.addComponentOrReplace(gltfShape_32)
const transform_332 = new Transform({
  position: new Vector3(2, 0, 58),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_54.addComponentOrReplace(transform_332)
engine.addEntity(grass04_54)

const grass05_60 = new Entity()
grass05_60.setParent(scene)
grass05_60.addComponentOrReplace(gltfShape_33)
const transform_333 = new Transform({
  position: new Vector3(2, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_60.addComponentOrReplace(transform_333)
engine.addEntity(grass05_60)

const grass04_55 = new Entity()
grass04_55.setParent(scene)
grass04_55.addComponentOrReplace(gltfShape_32)
const transform_334 = new Transform({
  position: new Vector3(2, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_55.addComponentOrReplace(transform_334)
engine.addEntity(grass04_55)

const grass05_61 = new Entity()
grass05_61.setParent(scene)
grass05_61.addComponentOrReplace(gltfShape_33)
const transform_335 = new Transform({
  position: new Vector3(2, 0, 61),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_61.addComponentOrReplace(transform_335)
engine.addEntity(grass05_61)

const grass05_62 = new Entity()
grass05_62.setParent(scene)
grass05_62.addComponentOrReplace(gltfShape_33)
const transform_336 = new Transform({
  position: new Vector3(3, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_62.addComponentOrReplace(transform_336)
engine.addEntity(grass05_62)

const grass05_63 = new Entity()
grass05_63.setParent(scene)
grass05_63.addComponentOrReplace(gltfShape_33)
const transform_337 = new Transform({
  position: new Vector3(3.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_63.addComponentOrReplace(transform_337)
engine.addEntity(grass05_63)

const grass05_64 = new Entity()
grass05_64.setParent(scene)
grass05_64.addComponentOrReplace(gltfShape_33)
const transform_338 = new Transform({
  position: new Vector3(4, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_64.addComponentOrReplace(transform_338)
engine.addEntity(grass05_64)

const grass05_65 = new Entity()
grass05_65.setParent(scene)
grass05_65.addComponentOrReplace(gltfShape_33)
const transform_339 = new Transform({
  position: new Vector3(4.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_65.addComponentOrReplace(transform_339)
engine.addEntity(grass05_65)

const grass05_66 = new Entity()
grass05_66.setParent(scene)
grass05_66.addComponentOrReplace(gltfShape_33)
const transform_340 = new Transform({
  position: new Vector3(6.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_66.addComponentOrReplace(transform_340)
engine.addEntity(grass05_66)

const junglePlant_06_8 = new Entity()
junglePlant_06_8.setParent(scene)
junglePlant_06_8.addComponentOrReplace(gltfShape_31)
const transform_341 = new Transform({
  position: new Vector3(8, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_8.addComponentOrReplace(transform_341)
engine.addEntity(junglePlant_06_8)

const grass05_67 = new Entity()
grass05_67.setParent(scene)
grass05_67.addComponentOrReplace(gltfShape_33)
const transform_342 = new Transform({
  position: new Vector3(7.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_67.addComponentOrReplace(transform_342)
engine.addEntity(grass05_67)

const junglePlant_06_9 = new Entity()
junglePlant_06_9.setParent(scene)
junglePlant_06_9.addComponentOrReplace(gltfShape_31)
const transform_343 = new Transform({
  position: new Vector3(7, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_9.addComponentOrReplace(transform_343)
engine.addEntity(junglePlant_06_9)

const grass05_68 = new Entity()
grass05_68.setParent(scene)
grass05_68.addComponentOrReplace(gltfShape_33)
const transform_344 = new Transform({
  position: new Vector3(8.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_68.addComponentOrReplace(transform_344)
engine.addEntity(grass05_68)

const junglePlant_06_10 = new Entity()
junglePlant_06_10.setParent(scene)
junglePlant_06_10.addComponentOrReplace(gltfShape_31)
const transform_345 = new Transform({
  position: new Vector3(9.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_10.addComponentOrReplace(transform_345)
engine.addEntity(junglePlant_06_10)

const grass05_69 = new Entity()
grass05_69.setParent(scene)
grass05_69.addComponentOrReplace(gltfShape_33)
const transform_346 = new Transform({
  position: new Vector3(10, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_69.addComponentOrReplace(transform_346)
engine.addEntity(grass05_69)

const junglePlant_06_11 = new Entity()
junglePlant_06_11.setParent(scene)
junglePlant_06_11.addComponentOrReplace(gltfShape_31)
const transform_347 = new Transform({
  position: new Vector3(29.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_11.addComponentOrReplace(transform_347)
engine.addEntity(junglePlant_06_11)

const junglePlant_06_12 = new Entity()
junglePlant_06_12.setParent(scene)
junglePlant_06_12.addComponentOrReplace(gltfShape_31)
const transform_348 = new Transform({
  position: new Vector3(11.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_12.addComponentOrReplace(transform_348)
engine.addEntity(junglePlant_06_12)

const grass05_70 = new Entity()
grass05_70.setParent(scene)
grass05_70.addComponentOrReplace(gltfShape_33)
const transform_349 = new Transform({
  position: new Vector3(11, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_70.addComponentOrReplace(transform_349)
engine.addEntity(grass05_70)

const junglePlant_06_13 = new Entity()
junglePlant_06_13.setParent(scene)
junglePlant_06_13.addComponentOrReplace(gltfShape_31)
const transform_350 = new Transform({
  position: new Vector3(12.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_13.addComponentOrReplace(transform_350)
engine.addEntity(junglePlant_06_13)

const grass05_71 = new Entity()
grass05_71.setParent(scene)
grass05_71.addComponentOrReplace(gltfShape_33)
const transform_351 = new Transform({
  position: new Vector3(12, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_71.addComponentOrReplace(transform_351)
engine.addEntity(grass05_71)

const grass05_72 = new Entity()
grass05_72.setParent(scene)
grass05_72.addComponentOrReplace(gltfShape_33)
const transform_352 = new Transform({
  position: new Vector3(13, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_72.addComponentOrReplace(transform_352)
engine.addEntity(grass05_72)

const grass04_56 = new Entity()
grass04_56.setParent(scene)
grass04_56.addComponentOrReplace(gltfShape_32)
const transform_353 = new Transform({
  position: new Vector3(14, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_56.addComponentOrReplace(transform_353)
engine.addEntity(grass04_56)

const grass05_73 = new Entity()
grass05_73.setParent(scene)
grass05_73.addComponentOrReplace(gltfShape_33)
const transform_354 = new Transform({
  position: new Vector3(14.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_73.addComponentOrReplace(transform_354)
engine.addEntity(grass05_73)

const grass04_57 = new Entity()
grass04_57.setParent(scene)
grass04_57.addComponentOrReplace(gltfShape_32)
const transform_355 = new Transform({
  position: new Vector3(15, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_57.addComponentOrReplace(transform_355)
engine.addEntity(grass04_57)

const grass05_74 = new Entity()
grass05_74.setParent(scene)
grass05_74.addComponentOrReplace(gltfShape_33)
const transform_356 = new Transform({
  position: new Vector3(15.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_74.addComponentOrReplace(transform_356)
engine.addEntity(grass05_74)

const grass04_58 = new Entity()
grass04_58.setParent(scene)
grass04_58.addComponentOrReplace(gltfShape_32)
const transform_357 = new Transform({
  position: new Vector3(16, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_58.addComponentOrReplace(transform_357)
engine.addEntity(grass04_58)

const grass05_75 = new Entity()
grass05_75.setParent(scene)
grass05_75.addComponentOrReplace(gltfShape_33)
const transform_358 = new Transform({
  position: new Vector3(16.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_75.addComponentOrReplace(transform_358)
engine.addEntity(grass05_75)

const grass04_59 = new Entity()
grass04_59.setParent(scene)
grass04_59.addComponentOrReplace(gltfShape_32)
const transform_359 = new Transform({
  position: new Vector3(27, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_59.addComponentOrReplace(transform_359)
engine.addEntity(grass04_59)

const grass_02_13 = new Entity()
grass_02_13.setParent(scene)
grass_02_13.addComponentOrReplace(gltfShape_35)
const transform_360 = new Transform({
  position: new Vector3(19, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
grass_02_13.addComponentOrReplace(transform_360)
engine.addEntity(grass_02_13)

const grass05_76 = new Entity()
grass05_76.setParent(scene)
grass05_76.addComponentOrReplace(gltfShape_33)
const transform_361 = new Transform({
  position: new Vector3(19.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_76.addComponentOrReplace(transform_361)
engine.addEntity(grass05_76)

const grass_02_14 = new Entity()
grass_02_14.setParent(scene)
grass_02_14.addComponentOrReplace(gltfShape_35)
const transform_362 = new Transform({
  position: new Vector3(20, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
grass_02_14.addComponentOrReplace(transform_362)
engine.addEntity(grass_02_14)

const grass05_77 = new Entity()
grass05_77.setParent(scene)
grass05_77.addComponentOrReplace(gltfShape_33)
const transform_363 = new Transform({
  position: new Vector3(20.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_77.addComponentOrReplace(transform_363)
engine.addEntity(grass05_77)

const grass_02_15 = new Entity()
grass_02_15.setParent(scene)
grass_02_15.addComponentOrReplace(gltfShape_35)
const transform_364 = new Transform({
  position: new Vector3(21, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
grass_02_15.addComponentOrReplace(transform_364)
engine.addEntity(grass_02_15)

const grass05_78 = new Entity()
grass05_78.setParent(scene)
grass05_78.addComponentOrReplace(gltfShape_33)
const transform_365 = new Transform({
  position: new Vector3(23, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_78.addComponentOrReplace(transform_365)
engine.addEntity(grass05_78)

const grass04_60 = new Entity()
grass04_60.setParent(scene)
grass04_60.addComponentOrReplace(gltfShape_32)
const transform_366 = new Transform({
  position: new Vector3(23.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_60.addComponentOrReplace(transform_366)
engine.addEntity(grass04_60)

const grass04_61 = new Entity()
grass04_61.setParent(scene)
grass04_61.addComponentOrReplace(gltfShape_32)
const transform_367 = new Transform({
  position: new Vector3(24.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_61.addComponentOrReplace(transform_367)
engine.addEntity(grass04_61)

const grass05_79 = new Entity()
grass05_79.setParent(scene)
grass05_79.addComponentOrReplace(gltfShape_33)
const transform_368 = new Transform({
  position: new Vector3(24, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_79.addComponentOrReplace(transform_368)
engine.addEntity(grass05_79)

const grass05_80 = new Entity()
grass05_80.setParent(scene)
grass05_80.addComponentOrReplace(gltfShape_33)
const transform_369 = new Transform({
  position: new Vector3(25, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_80.addComponentOrReplace(transform_369)
engine.addEntity(grass05_80)

const grass04_62 = new Entity()
grass04_62.setParent(scene)
grass04_62.addComponentOrReplace(gltfShape_32)
const transform_370 = new Transform({
  position: new Vector3(25.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_62.addComponentOrReplace(transform_370)
engine.addEntity(grass04_62)

const grass05_81 = new Entity()
grass05_81.setParent(scene)
grass05_81.addComponentOrReplace(gltfShape_33)
const transform_371 = new Transform({
  position: new Vector3(26, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_81.addComponentOrReplace(transform_371)
engine.addEntity(grass05_81)

const grass04_63 = new Entity()
grass04_63.setParent(scene)
grass04_63.addComponentOrReplace(gltfShape_32)
const transform_372 = new Transform({
  position: new Vector3(28, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_63.addComponentOrReplace(transform_372)
engine.addEntity(grass04_63)

const junglePlant_06_14 = new Entity()
junglePlant_06_14.setParent(scene)
junglePlant_06_14.addComponentOrReplace(gltfShape_31)
const transform_373 = new Transform({
  position: new Vector3(27.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_14.addComponentOrReplace(transform_373)
engine.addEntity(junglePlant_06_14)

const grass04_64 = new Entity()
grass04_64.setParent(scene)
grass04_64.addComponentOrReplace(gltfShape_32)
const transform_374 = new Transform({
  position: new Vector3(29, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_64.addComponentOrReplace(transform_374)
engine.addEntity(grass04_64)

const junglePlant_06_15 = new Entity()
junglePlant_06_15.setParent(scene)
junglePlant_06_15.addComponentOrReplace(gltfShape_31)
const transform_375 = new Transform({
  position: new Vector3(28.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_15.addComponentOrReplace(transform_375)
engine.addEntity(junglePlant_06_15)

const grass04_65 = new Entity()
grass04_65.setParent(scene)
grass04_65.addComponentOrReplace(gltfShape_32)
const transform_376 = new Transform({
  position: new Vector3(30, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_65.addComponentOrReplace(transform_376)
engine.addEntity(grass04_65)

const grass05_82 = new Entity()
grass05_82.setParent(scene)
grass05_82.addComponentOrReplace(gltfShape_33)
const transform_377 = new Transform({
  position: new Vector3(31, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_82.addComponentOrReplace(transform_377)
engine.addEntity(grass05_82)

const grass04_66 = new Entity()
grass04_66.setParent(scene)
grass04_66.addComponentOrReplace(gltfShape_32)
const transform_378 = new Transform({
  position: new Vector3(31.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_66.addComponentOrReplace(transform_378)
engine.addEntity(grass04_66)

const grass05_83 = new Entity()
grass05_83.setParent(scene)
grass05_83.addComponentOrReplace(gltfShape_33)
const transform_379 = new Transform({
  position: new Vector3(32, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_83.addComponentOrReplace(transform_379)
engine.addEntity(grass05_83)

const grass04_67 = new Entity()
grass04_67.setParent(scene)
grass04_67.addComponentOrReplace(gltfShape_32)
const transform_380 = new Transform({
  position: new Vector3(32.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_67.addComponentOrReplace(transform_380)
engine.addEntity(grass04_67)

const grass04_68 = new Entity()
grass04_68.setParent(scene)
grass04_68.addComponentOrReplace(gltfShape_32)
const transform_381 = new Transform({
  position: new Vector3(34.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_68.addComponentOrReplace(transform_381)
engine.addEntity(grass04_68)

const grass05_84 = new Entity()
grass05_84.setParent(scene)
grass05_84.addComponentOrReplace(gltfShape_33)
const transform_382 = new Transform({
  position: new Vector3(35, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_84.addComponentOrReplace(transform_382)
engine.addEntity(grass05_84)

const grass04_69 = new Entity()
grass04_69.setParent(scene)
grass04_69.addComponentOrReplace(gltfShape_32)
const transform_383 = new Transform({
  position: new Vector3(35.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_69.addComponentOrReplace(transform_383)
engine.addEntity(grass04_69)

const grass05_85 = new Entity()
grass05_85.setParent(scene)
grass05_85.addComponentOrReplace(gltfShape_33)
const transform_384 = new Transform({
  position: new Vector3(36, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_85.addComponentOrReplace(transform_384)
engine.addEntity(grass05_85)

const grass04_70 = new Entity()
grass04_70.setParent(scene)
grass04_70.addComponentOrReplace(gltfShape_32)
const transform_385 = new Transform({
  position: new Vector3(36.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_70.addComponentOrReplace(transform_385)
engine.addEntity(grass04_70)

const grass05_86 = new Entity()
grass05_86.setParent(scene)
grass05_86.addComponentOrReplace(gltfShape_33)
const transform_386 = new Transform({
  position: new Vector3(37, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_86.addComponentOrReplace(transform_386)
engine.addEntity(grass05_86)

const junglePlant_06_16 = new Entity()
junglePlant_06_16.setParent(scene)
junglePlant_06_16.addComponentOrReplace(gltfShape_31)
const transform_387 = new Transform({
  position: new Vector3(38, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_16.addComponentOrReplace(transform_387)
engine.addEntity(junglePlant_06_16)

const grass05_87 = new Entity()
grass05_87.setParent(scene)
grass05_87.addComponentOrReplace(gltfShape_33)
const transform_388 = new Transform({
  position: new Vector3(39.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_87.addComponentOrReplace(transform_388)
engine.addEntity(grass05_87)

const junglePlant_06_17 = new Entity()
junglePlant_06_17.setParent(scene)
junglePlant_06_17.addComponentOrReplace(gltfShape_31)
const transform_389 = new Transform({
  position: new Vector3(39, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_17.addComponentOrReplace(transform_389)
engine.addEntity(junglePlant_06_17)

const grass05_88 = new Entity()
grass05_88.setParent(scene)
grass05_88.addComponentOrReplace(gltfShape_33)
const transform_390 = new Transform({
  position: new Vector3(38.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_88.addComponentOrReplace(transform_390)
engine.addEntity(grass05_88)

const junglePlant_06_18 = new Entity()
junglePlant_06_18.setParent(scene)
junglePlant_06_18.addComponentOrReplace(gltfShape_31)
const transform_391 = new Transform({
  position: new Vector3(40, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_18.addComponentOrReplace(transform_391)
engine.addEntity(junglePlant_06_18)

const grass05_89 = new Entity()
grass05_89.setParent(scene)
grass05_89.addComponentOrReplace(gltfShape_33)
const transform_392 = new Transform({
  position: new Vector3(40.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_89.addComponentOrReplace(transform_392)
engine.addEntity(grass05_89)

const junglePlant_06_19 = new Entity()
junglePlant_06_19.setParent(scene)
junglePlant_06_19.addComponentOrReplace(gltfShape_31)
const transform_393 = new Transform({
  position: new Vector3(41, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
junglePlant_06_19.addComponentOrReplace(transform_393)
engine.addEntity(junglePlant_06_19)

const grass04_71 = new Entity()
grass04_71.setParent(scene)
grass04_71.addComponentOrReplace(gltfShape_32)
const transform_394 = new Transform({
  position: new Vector3(42.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_71.addComponentOrReplace(transform_394)
engine.addEntity(grass04_71)

const grass05_90 = new Entity()
grass05_90.setParent(scene)
grass05_90.addComponentOrReplace(gltfShape_33)
const transform_395 = new Transform({
  position: new Vector3(42, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_90.addComponentOrReplace(transform_395)
engine.addEntity(grass05_90)

const grass05_91 = new Entity()
grass05_91.setParent(scene)
grass05_91.addComponentOrReplace(gltfShape_33)
const transform_396 = new Transform({
  position: new Vector3(43, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_91.addComponentOrReplace(transform_396)
engine.addEntity(grass05_91)

const grass04_72 = new Entity()
grass04_72.setParent(scene)
grass04_72.addComponentOrReplace(gltfShape_32)
const transform_397 = new Transform({
  position: new Vector3(43.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_72.addComponentOrReplace(transform_397)
engine.addEntity(grass04_72)

const grass05_92 = new Entity()
grass05_92.setParent(scene)
grass05_92.addComponentOrReplace(gltfShape_33)
const transform_398 = new Transform({
  position: new Vector3(44, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_92.addComponentOrReplace(transform_398)
engine.addEntity(grass05_92)

const grass04_73 = new Entity()
grass04_73.setParent(scene)
grass04_73.addComponentOrReplace(gltfShape_32)
const transform_399 = new Transform({
  position: new Vector3(44.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_73.addComponentOrReplace(transform_399)
engine.addEntity(grass04_73)

const grass05_93 = new Entity()
grass05_93.setParent(scene)
grass05_93.addComponentOrReplace(gltfShape_33)
const transform_400 = new Transform({
  position: new Vector3(46.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_93.addComponentOrReplace(transform_400)
engine.addEntity(grass05_93)

const grass05_94 = new Entity()
grass05_94.setParent(scene)
grass05_94.addComponentOrReplace(gltfShape_33)
const transform_401 = new Transform({
  position: new Vector3(47, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_94.addComponentOrReplace(transform_401)
engine.addEntity(grass05_94)

const grass05_95 = new Entity()
grass05_95.setParent(scene)
grass05_95.addComponentOrReplace(gltfShape_33)
const transform_402 = new Transform({
  position: new Vector3(47.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_95.addComponentOrReplace(transform_402)
engine.addEntity(grass05_95)

const grass05_96 = new Entity()
grass05_96.setParent(scene)
grass05_96.addComponentOrReplace(gltfShape_33)
const transform_403 = new Transform({
  position: new Vector3(48, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_96.addComponentOrReplace(transform_403)
engine.addEntity(grass05_96)

const grass04_74 = new Entity()
grass04_74.setParent(scene)
grass04_74.addComponentOrReplace(gltfShape_32)
const transform_404 = new Transform({
  position: new Vector3(50, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_74.addComponentOrReplace(transform_404)
engine.addEntity(grass04_74)

const grass05_97 = new Entity()
grass05_97.setParent(scene)
grass05_97.addComponentOrReplace(gltfShape_33)
const transform_405 = new Transform({
  position: new Vector3(50.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_97.addComponentOrReplace(transform_405)
engine.addEntity(grass05_97)

const grass04_75 = new Entity()
grass04_75.setParent(scene)
grass04_75.addComponentOrReplace(gltfShape_32)
const transform_406 = new Transform({
  position: new Vector3(51, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_75.addComponentOrReplace(transform_406)
engine.addEntity(grass04_75)

const grass05_98 = new Entity()
grass05_98.setParent(scene)
grass05_98.addComponentOrReplace(gltfShape_33)
const transform_407 = new Transform({
  position: new Vector3(51.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_98.addComponentOrReplace(transform_407)
engine.addEntity(grass05_98)

const grass04_76 = new Entity()
grass04_76.setParent(scene)
grass04_76.addComponentOrReplace(gltfShape_32)
const transform_408 = new Transform({
  position: new Vector3(52, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_76.addComponentOrReplace(transform_408)
engine.addEntity(grass04_76)

const grass05_99 = new Entity()
grass05_99.setParent(scene)
grass05_99.addComponentOrReplace(gltfShape_33)
const transform_409 = new Transform({
  position: new Vector3(52.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_99.addComponentOrReplace(transform_409)
engine.addEntity(grass05_99)

const grass04_77 = new Entity()
grass04_77.setParent(scene)
grass04_77.addComponentOrReplace(gltfShape_32)
const transform_410 = new Transform({
  position: new Vector3(53, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_77.addComponentOrReplace(transform_410)
engine.addEntity(grass04_77)

const grass05_100 = new Entity()
grass05_100.setParent(scene)
grass05_100.addComponentOrReplace(gltfShape_33)
const transform_411 = new Transform({
  position: new Vector3(53.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_100.addComponentOrReplace(transform_411)
engine.addEntity(grass05_100)

const grass05_101 = new Entity()
grass05_101.setParent(scene)
grass05_101.addComponentOrReplace(gltfShape_33)
const transform_412 = new Transform({
  position: new Vector3(19, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_101.addComponentOrReplace(transform_412)
engine.addEntity(grass05_101)

const grass05_102 = new Entity()
grass05_102.setParent(scene)
grass05_102.addComponentOrReplace(gltfShape_33)
const transform_413 = new Transform({
  position: new Vector3(19.5, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_102.addComponentOrReplace(transform_413)
engine.addEntity(grass05_102)

const grass05_103 = new Entity()
grass05_103.setParent(scene)
grass05_103.addComponentOrReplace(gltfShape_33)
const transform_414 = new Transform({
  position: new Vector3(20, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_103.addComponentOrReplace(transform_414)
engine.addEntity(grass05_103)

const grass05_104 = new Entity()
grass05_104.setParent(scene)
grass05_104.addComponentOrReplace(gltfShape_33)
const transform_415 = new Transform({
  position: new Vector3(20.5, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_104.addComponentOrReplace(transform_415)
engine.addEntity(grass05_104)

const grass05_105 = new Entity()
grass05_105.setParent(scene)
grass05_105.addComponentOrReplace(gltfShape_33)
const transform_416 = new Transform({
  position: new Vector3(21, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_105.addComponentOrReplace(transform_416)
engine.addEntity(grass05_105)

const grass05_106 = new Entity()
grass05_106.setParent(scene)
grass05_106.addComponentOrReplace(gltfShape_33)
const transform_417 = new Transform({
  position: new Vector3(18.5, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_106.addComponentOrReplace(transform_417)
engine.addEntity(grass05_106)

const grass04_78 = new Entity()
grass04_78.setParent(scene)
grass04_78.addComponentOrReplace(gltfShape_32)
const transform_418 = new Transform({
  position: new Vector3(23, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_78.addComponentOrReplace(transform_418)
engine.addEntity(grass04_78)

const grass05_107 = new Entity()
grass05_107.setParent(scene)
grass05_107.addComponentOrReplace(gltfShape_33)
const transform_419 = new Transform({
  position: new Vector3(23.5, 0, 46.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_107.addComponentOrReplace(transform_419)
engine.addEntity(grass05_107)

const grass04_79 = new Entity()
grass04_79.setParent(scene)
grass04_79.addComponentOrReplace(gltfShape_32)
const transform_420 = new Transform({
  position: new Vector3(24, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_79.addComponentOrReplace(transform_420)
engine.addEntity(grass04_79)

const grass05_108 = new Entity()
grass05_108.setParent(scene)
grass05_108.addComponentOrReplace(gltfShape_33)
const transform_421 = new Transform({
  position: new Vector3(24.5, 0, 46.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_108.addComponentOrReplace(transform_421)
engine.addEntity(grass05_108)

const grass04_80 = new Entity()
grass04_80.setParent(scene)
grass04_80.addComponentOrReplace(gltfShape_32)
const transform_422 = new Transform({
  position: new Vector3(25, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_80.addComponentOrReplace(transform_422)
engine.addEntity(grass04_80)

const grass05_109 = new Entity()
grass05_109.setParent(scene)
grass05_109.addComponentOrReplace(gltfShape_33)
const transform_423 = new Transform({
  position: new Vector3(25.5, 0, 46.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_109.addComponentOrReplace(transform_423)
engine.addEntity(grass05_109)

const grass04_81 = new Entity()
grass04_81.setParent(scene)
grass04_81.addComponentOrReplace(gltfShape_32)
const transform_424 = new Transform({
  position: new Vector3(26, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_81.addComponentOrReplace(transform_424)
engine.addEntity(grass04_81)

const grass04_82 = new Entity()
grass04_82.setParent(scene)
grass04_82.addComponentOrReplace(gltfShape_32)
const transform_425 = new Transform({
  position: new Vector3(27, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_82.addComponentOrReplace(transform_425)
engine.addEntity(grass04_82)

const grass05_110 = new Entity()
grass05_110.setParent(scene)
grass05_110.addComponentOrReplace(gltfShape_33)
const transform_426 = new Transform({
  position: new Vector3(27.5, 0, 46.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_110.addComponentOrReplace(transform_426)
engine.addEntity(grass05_110)

const grass04_83 = new Entity()
grass04_83.setParent(scene)
grass04_83.addComponentOrReplace(gltfShape_32)
const transform_427 = new Transform({
  position: new Vector3(28, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_83.addComponentOrReplace(transform_427)
engine.addEntity(grass04_83)

const grass05_111 = new Entity()
grass05_111.setParent(scene)
grass05_111.addComponentOrReplace(gltfShape_33)
const transform_428 = new Transform({
  position: new Vector3(28.5, 0, 46.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_111.addComponentOrReplace(transform_428)
engine.addEntity(grass05_111)

const grass04_84 = new Entity()
grass04_84.setParent(scene)
grass04_84.addComponentOrReplace(gltfShape_32)
const transform_429 = new Transform({
  position: new Vector3(29, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_84.addComponentOrReplace(transform_429)
engine.addEntity(grass04_84)

const grass05_112 = new Entity()
grass05_112.setParent(scene)
grass05_112.addComponentOrReplace(gltfShape_33)
const transform_430 = new Transform({
  position: new Vector3(29.5, 0, 46.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_112.addComponentOrReplace(transform_430)
engine.addEntity(grass05_112)

const grass05_113 = new Entity()
grass05_113.setParent(scene)
grass05_113.addComponentOrReplace(gltfShape_33)
const transform_431 = new Transform({
  position: new Vector3(40, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_113.addComponentOrReplace(transform_431)
engine.addEntity(grass05_113)

const grass04_85 = new Entity()
grass04_85.setParent(scene)
grass04_85.addComponentOrReplace(gltfShape_32)
const transform_432 = new Transform({
  position: new Vector3(40.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_85.addComponentOrReplace(transform_432)
engine.addEntity(grass04_85)

const grass05_114 = new Entity()
grass05_114.setParent(scene)
grass05_114.addComponentOrReplace(gltfShape_33)
const transform_433 = new Transform({
  position: new Vector3(44, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_114.addComponentOrReplace(transform_433)
engine.addEntity(grass05_114)

const grass04_86 = new Entity()
grass04_86.setParent(scene)
grass04_86.addComponentOrReplace(gltfShape_32)
const transform_434 = new Transform({
  position: new Vector3(43.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_86.addComponentOrReplace(transform_434)
engine.addEntity(grass04_86)

const grass05_115 = new Entity()
grass05_115.setParent(scene)
grass05_115.addComponentOrReplace(gltfShape_33)
const transform_435 = new Transform({
  position: new Vector3(50, 0, 43.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_115.addComponentOrReplace(transform_435)
engine.addEntity(grass05_115)

const grass04_87 = new Entity()
grass04_87.setParent(scene)
grass04_87.addComponentOrReplace(gltfShape_32)
const transform_436 = new Transform({
  position: new Vector3(50, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_87.addComponentOrReplace(transform_436)
engine.addEntity(grass04_87)

const grass05_116 = new Entity()
grass05_116.setParent(scene)
grass05_116.addComponentOrReplace(gltfShape_33)
const transform_437 = new Transform({
  position: new Vector3(50, 0, 42.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_116.addComponentOrReplace(transform_437)
engine.addEntity(grass05_116)

const grass04_88 = new Entity()
grass04_88.setParent(scene)
grass04_88.addComponentOrReplace(gltfShape_32)
const transform_438 = new Transform({
  position: new Vector3(50, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_88.addComponentOrReplace(transform_438)
engine.addEntity(grass04_88)

const grass05_117 = new Entity()
grass05_117.setParent(scene)
grass05_117.addComponentOrReplace(gltfShape_33)
const transform_439 = new Transform({
  position: new Vector3(50, 0, 41.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_117.addComponentOrReplace(transform_439)
engine.addEntity(grass05_117)

const grass04_89 = new Entity()
grass04_89.setParent(scene)
grass04_89.addComponentOrReplace(gltfShape_32)
const transform_440 = new Transform({
  position: new Vector3(50, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_89.addComponentOrReplace(transform_440)
engine.addEntity(grass04_89)

const grass05_118 = new Entity()
grass05_118.setParent(scene)
grass05_118.addComponentOrReplace(gltfShape_33)
const transform_441 = new Transform({
  position: new Vector3(50, 0, 37),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_118.addComponentOrReplace(transform_441)
engine.addEntity(grass05_118)

const grass05_119 = new Entity()
grass05_119.setParent(scene)
grass05_119.addComponentOrReplace(gltfShape_33)
const transform_442 = new Transform({
  position: new Vector3(50, 0, 32.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_119.addComponentOrReplace(transform_442)
engine.addEntity(grass05_119)

const grass04_90 = new Entity()
grass04_90.setParent(scene)
grass04_90.addComponentOrReplace(gltfShape_32)
const transform_443 = new Transform({
  position: new Vector3(50, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_90.addComponentOrReplace(transform_443)
engine.addEntity(grass04_90)

const grass04_91 = new Entity()
grass04_91.setParent(scene)
grass04_91.addComponentOrReplace(gltfShape_32)
const transform_444 = new Transform({
  position: new Vector3(50, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_91.addComponentOrReplace(transform_444)
engine.addEntity(grass04_91)

const grass04_92 = new Entity()
grass04_92.setParent(scene)
grass04_92.addComponentOrReplace(gltfShape_32)
const transform_445 = new Transform({
  position: new Vector3(48.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_92.addComponentOrReplace(transform_445)
engine.addEntity(grass04_92)

const grass05_120 = new Entity()
grass05_120.setParent(scene)
grass05_120.addComponentOrReplace(gltfShape_33)
const transform_446 = new Transform({
  position: new Vector3(50, 0, 18),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_120.addComponentOrReplace(transform_446)
engine.addEntity(grass05_120)

const grass04_93 = new Entity()
grass04_93.setParent(scene)
grass04_93.addComponentOrReplace(gltfShape_32)
const transform_447 = new Transform({
  position: new Vector3(50, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_93.addComponentOrReplace(transform_447)
engine.addEntity(grass04_93)

const grass05_121 = new Entity()
grass05_121.setParent(scene)
grass05_121.addComponentOrReplace(gltfShape_33)
const transform_448 = new Transform({
  position: new Vector3(50, 0, 8.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_121.addComponentOrReplace(transform_448)
engine.addEntity(grass05_121)

const grass05_122 = new Entity()
grass05_122.setParent(scene)
grass05_122.addComponentOrReplace(gltfShape_33)
const transform_449 = new Transform({
  position: new Vector3(49, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_122.addComponentOrReplace(transform_449)
engine.addEntity(grass05_122)

const grass04_94 = new Entity()
grass04_94.setParent(scene)
grass04_94.addComponentOrReplace(gltfShape_32)
const transform_450 = new Transform({
  position: new Vector3(62, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_94.addComponentOrReplace(transform_450)
engine.addEntity(grass04_94)

const grass04_95 = new Entity()
grass04_95.setParent(scene)
grass04_95.addComponentOrReplace(gltfShape_32)
const transform_451 = new Transform({
  position: new Vector3(18, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_95.addComponentOrReplace(transform_451)
engine.addEntity(grass04_95)

const grass05_123 = new Entity()
grass05_123.setParent(scene)
grass05_123.addComponentOrReplace(gltfShape_33)
const transform_452 = new Transform({
  position: new Vector3(17.5, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_123.addComponentOrReplace(transform_452)
engine.addEntity(grass05_123)

const grass05_124 = new Entity()
grass05_124.setParent(scene)
grass05_124.addComponentOrReplace(gltfShape_33)
const transform_453 = new Transform({
  position: new Vector3(62, 0, 13),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_124.addComponentOrReplace(transform_453)
engine.addEntity(grass05_124)

const grass05_125 = new Entity()
grass05_125.setParent(scene)
grass05_125.addComponentOrReplace(gltfShape_33)
const transform_454 = new Transform({
  position: new Vector3(62, 0, 14),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_125.addComponentOrReplace(transform_454)
engine.addEntity(grass05_125)

const grass04_96 = new Entity()
grass04_96.setParent(scene)
grass04_96.addComponentOrReplace(gltfShape_32)
const transform_455 = new Transform({
  position: new Vector3(62, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_96.addComponentOrReplace(transform_455)
engine.addEntity(grass04_96)

const grass05_126 = new Entity()
grass05_126.setParent(scene)
grass05_126.addComponentOrReplace(gltfShape_33)
const transform_456 = new Transform({
  position: new Vector3(62, 0, 15),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_126.addComponentOrReplace(transform_456)
engine.addEntity(grass05_126)

const grass05_127 = new Entity()
grass05_127.setParent(scene)
grass05_127.addComponentOrReplace(gltfShape_33)
const transform_457 = new Transform({
  position: new Vector3(62, 0, 17),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_127.addComponentOrReplace(transform_457)
engine.addEntity(grass05_127)

const grass04_97 = new Entity()
grass04_97.setParent(scene)
grass04_97.addComponentOrReplace(gltfShape_32)
const transform_458 = new Transform({
  position: new Vector3(62, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_97.addComponentOrReplace(transform_458)
engine.addEntity(grass04_97)

const grass05_128 = new Entity()
grass05_128.setParent(scene)
grass05_128.addComponentOrReplace(gltfShape_33)
const transform_459 = new Transform({
  position: new Vector3(62, 0, 18),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_128.addComponentOrReplace(transform_459)
engine.addEntity(grass05_128)

const grass04_98 = new Entity()
grass04_98.setParent(scene)
grass04_98.addComponentOrReplace(gltfShape_32)
const transform_460 = new Transform({
  position: new Vector3(62, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_98.addComponentOrReplace(transform_460)
engine.addEntity(grass04_98)

const grass05_129 = new Entity()
grass05_129.setParent(scene)
grass05_129.addComponentOrReplace(gltfShape_33)
const transform_461 = new Transform({
  position: new Vector3(62, 0, 19),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_129.addComponentOrReplace(transform_461)
engine.addEntity(grass05_129)

const grass04_99 = new Entity()
grass04_99.setParent(scene)
grass04_99.addComponentOrReplace(gltfShape_32)
const transform_462 = new Transform({
  position: new Vector3(62, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_99.addComponentOrReplace(transform_462)
engine.addEntity(grass04_99)

const grass05_130 = new Entity()
grass05_130.setParent(scene)
grass05_130.addComponentOrReplace(gltfShape_33)
const transform_463 = new Transform({
  position: new Vector3(62, 0, 20),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_130.addComponentOrReplace(transform_463)
engine.addEntity(grass05_130)

const grass04_100 = new Entity()
grass04_100.setParent(scene)
grass04_100.addComponentOrReplace(gltfShape_32)
const transform_464 = new Transform({
  position: new Vector3(62, 0, 21),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_100.addComponentOrReplace(transform_464)
engine.addEntity(grass04_100)

const grass05_131 = new Entity()
grass05_131.setParent(scene)
grass05_131.addComponentOrReplace(gltfShape_33)
const transform_465 = new Transform({
  position: new Vector3(62, 0, 21.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_131.addComponentOrReplace(transform_465)
engine.addEntity(grass05_131)

const grass04_101 = new Entity()
grass04_101.setParent(scene)
grass04_101.addComponentOrReplace(gltfShape_32)
const transform_466 = new Transform({
  position: new Vector3(62, 0, 22),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_101.addComponentOrReplace(transform_466)
engine.addEntity(grass04_101)

const grass05_132 = new Entity()
grass05_132.setParent(scene)
grass05_132.addComponentOrReplace(gltfShape_33)
const transform_467 = new Transform({
  position: new Vector3(62, 0, 22.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_132.addComponentOrReplace(transform_467)
engine.addEntity(grass05_132)

const grass04_102 = new Entity()
grass04_102.setParent(scene)
grass04_102.addComponentOrReplace(gltfShape_32)
const transform_468 = new Transform({
  position: new Vector3(62, 0, 23),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_102.addComponentOrReplace(transform_468)
engine.addEntity(grass04_102)

const grass05_133 = new Entity()
grass05_133.setParent(scene)
grass05_133.addComponentOrReplace(gltfShape_33)
const transform_469 = new Transform({
  position: new Vector3(62, 0, 23.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_133.addComponentOrReplace(transform_469)
engine.addEntity(grass05_133)

const grass04_103 = new Entity()
grass04_103.setParent(scene)
grass04_103.addComponentOrReplace(gltfShape_32)
const transform_470 = new Transform({
  position: new Vector3(62, 0, 24),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_103.addComponentOrReplace(transform_470)
engine.addEntity(grass04_103)

const grass05_134 = new Entity()
grass05_134.setParent(scene)
grass05_134.addComponentOrReplace(gltfShape_33)
const transform_471 = new Transform({
  position: new Vector3(62, 0, 25.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_134.addComponentOrReplace(transform_471)
engine.addEntity(grass05_134)

const grass04_104 = new Entity()
grass04_104.setParent(scene)
grass04_104.addComponentOrReplace(gltfShape_32)
const transform_472 = new Transform({
  position: new Vector3(62, 0, 26),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_104.addComponentOrReplace(transform_472)
engine.addEntity(grass04_104)

const grass05_135 = new Entity()
grass05_135.setParent(scene)
grass05_135.addComponentOrReplace(gltfShape_33)
const transform_473 = new Transform({
  position: new Vector3(62, 0, 26.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_135.addComponentOrReplace(transform_473)
engine.addEntity(grass05_135)

const grass04_105 = new Entity()
grass04_105.setParent(scene)
grass04_105.addComponentOrReplace(gltfShape_32)
const transform_474 = new Transform({
  position: new Vector3(62, 0, 27),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_105.addComponentOrReplace(transform_474)
engine.addEntity(grass04_105)

const grass05_136 = new Entity()
grass05_136.setParent(scene)
grass05_136.addComponentOrReplace(gltfShape_33)
const transform_475 = new Transform({
  position: new Vector3(62, 0, 27.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_136.addComponentOrReplace(transform_475)
engine.addEntity(grass05_136)

const grass05_137 = new Entity()
grass05_137.setParent(scene)
grass05_137.addComponentOrReplace(gltfShape_33)
const transform_476 = new Transform({
  position: new Vector3(62, 0, 29.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_137.addComponentOrReplace(transform_476)
engine.addEntity(grass05_137)

const grass05_138 = new Entity()
grass05_138.setParent(scene)
grass05_138.addComponentOrReplace(gltfShape_33)
const transform_477 = new Transform({
  position: new Vector3(62, 0, 30),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_138.addComponentOrReplace(transform_477)
engine.addEntity(grass05_138)

const grass05_139 = new Entity()
grass05_139.setParent(scene)
grass05_139.addComponentOrReplace(gltfShape_33)
const transform_478 = new Transform({
  position: new Vector3(62, 0, 30.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_139.addComponentOrReplace(transform_478)
engine.addEntity(grass05_139)

const grass05_140 = new Entity()
grass05_140.setParent(scene)
grass05_140.addComponentOrReplace(gltfShape_33)
const transform_479 = new Transform({
  position: new Vector3(62, 0, 31),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_140.addComponentOrReplace(transform_479)
engine.addEntity(grass05_140)

const grass05_141 = new Entity()
grass05_141.setParent(scene)
grass05_141.addComponentOrReplace(gltfShape_33)
const transform_480 = new Transform({
  position: new Vector3(62, 0, 31.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_141.addComponentOrReplace(transform_480)
engine.addEntity(grass05_141)

const grass05_142 = new Entity()
grass05_142.setParent(scene)
grass05_142.addComponentOrReplace(gltfShape_33)
const transform_481 = new Transform({
  position: new Vector3(62, 0, 32),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_142.addComponentOrReplace(transform_481)
engine.addEntity(grass05_142)

const grass05_143 = new Entity()
grass05_143.setParent(scene)
grass05_143.addComponentOrReplace(gltfShape_33)
const transform_482 = new Transform({
  position: new Vector3(62, 0, 33.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_143.addComponentOrReplace(transform_482)
engine.addEntity(grass05_143)

const grass04_106 = new Entity()
grass04_106.setParent(scene)
grass04_106.addComponentOrReplace(gltfShape_32)
const transform_483 = new Transform({
  position: new Vector3(62, 0, 34),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_106.addComponentOrReplace(transform_483)
engine.addEntity(grass04_106)

const grass05_144 = new Entity()
grass05_144.setParent(scene)
grass05_144.addComponentOrReplace(gltfShape_33)
const transform_484 = new Transform({
  position: new Vector3(62, 0, 34.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_144.addComponentOrReplace(transform_484)
engine.addEntity(grass05_144)

const grass04_107 = new Entity()
grass04_107.setParent(scene)
grass04_107.addComponentOrReplace(gltfShape_32)
const transform_485 = new Transform({
  position: new Vector3(62, 0, 35),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_107.addComponentOrReplace(transform_485)
engine.addEntity(grass04_107)

const grass05_145 = new Entity()
grass05_145.setParent(scene)
grass05_145.addComponentOrReplace(gltfShape_33)
const transform_486 = new Transform({
  position: new Vector3(62, 0, 35.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_145.addComponentOrReplace(transform_486)
engine.addEntity(grass05_145)

const grass04_108 = new Entity()
grass04_108.setParent(scene)
grass04_108.addComponentOrReplace(gltfShape_32)
const transform_487 = new Transform({
  position: new Vector3(62, 0, 36),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_108.addComponentOrReplace(transform_487)
engine.addEntity(grass04_108)

const grass04_109 = new Entity()
grass04_109.setParent(scene)
grass04_109.addComponentOrReplace(gltfShape_32)
const transform_488 = new Transform({
  position: new Vector3(62, 0, 37),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_109.addComponentOrReplace(transform_488)
engine.addEntity(grass04_109)

const grass05_146 = new Entity()
grass05_146.setParent(scene)
grass05_146.addComponentOrReplace(gltfShape_33)
const transform_489 = new Transform({
  position: new Vector3(62, 0, 37.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_146.addComponentOrReplace(transform_489)
engine.addEntity(grass05_146)

const grass04_110 = new Entity()
grass04_110.setParent(scene)
grass04_110.addComponentOrReplace(gltfShape_32)
const transform_490 = new Transform({
  position: new Vector3(62, 0, 38),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_110.addComponentOrReplace(transform_490)
engine.addEntity(grass04_110)

const grass05_147 = new Entity()
grass05_147.setParent(scene)
grass05_147.addComponentOrReplace(gltfShape_33)
const transform_491 = new Transform({
  position: new Vector3(62, 0, 38.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_147.addComponentOrReplace(transform_491)
engine.addEntity(grass05_147)

const grass04_111 = new Entity()
grass04_111.setParent(scene)
grass04_111.addComponentOrReplace(gltfShape_32)
const transform_492 = new Transform({
  position: new Vector3(62, 0, 39),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_111.addComponentOrReplace(transform_492)
engine.addEntity(grass04_111)

const grass05_148 = new Entity()
grass05_148.setParent(scene)
grass05_148.addComponentOrReplace(gltfShape_33)
const transform_493 = new Transform({
  position: new Vector3(62, 0, 39.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_148.addComponentOrReplace(transform_493)
engine.addEntity(grass05_148)

const grass05_149 = new Entity()
grass05_149.setParent(scene)
grass05_149.addComponentOrReplace(gltfShape_33)
const transform_494 = new Transform({
  position: new Vector3(62, 0, 41.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_149.addComponentOrReplace(transform_494)
engine.addEntity(grass05_149)

const grass04_112 = new Entity()
grass04_112.setParent(scene)
grass04_112.addComponentOrReplace(gltfShape_32)
const transform_495 = new Transform({
  position: new Vector3(62, 0, 42),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_112.addComponentOrReplace(transform_495)
engine.addEntity(grass04_112)

const grass05_150 = new Entity()
grass05_150.setParent(scene)
grass05_150.addComponentOrReplace(gltfShape_33)
const transform_496 = new Transform({
  position: new Vector3(62, 0, 42.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_150.addComponentOrReplace(transform_496)
engine.addEntity(grass05_150)

const grass04_113 = new Entity()
grass04_113.setParent(scene)
grass04_113.addComponentOrReplace(gltfShape_32)
const transform_497 = new Transform({
  position: new Vector3(62, 0, 43),
  rotation: new Quaternion(0, 0.4713967368259977, 0, 0.881921264348355),
  scale: new Vector3(1, 1, 1)
})
grass04_113.addComponentOrReplace(transform_497)
engine.addEntity(grass04_113)

const grass05_151 = new Entity()
grass05_151.setParent(scene)
grass05_151.addComponentOrReplace(gltfShape_33)
const transform_498 = new Transform({
  position: new Vector3(62, 0, 43.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_151.addComponentOrReplace(transform_498)
engine.addEntity(grass05_151)

const grass05_152 = new Entity()
grass05_152.setParent(scene)
grass05_152.addComponentOrReplace(gltfShape_33)
const transform_499 = new Transform({
  position: new Vector3(48, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_152.addComponentOrReplace(transform_499)
engine.addEntity(grass05_152)

const grass05_153 = new Entity()
grass05_153.setParent(scene)
grass05_153.addComponentOrReplace(gltfShape_33)
const transform_500 = new Transform({
  position: new Vector3(47, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_153.addComponentOrReplace(transform_500)
engine.addEntity(grass05_153)

const grass05_154 = new Entity()
grass05_154.setParent(scene)
grass05_154.addComponentOrReplace(gltfShape_33)
const transform_501 = new Transform({
  position: new Vector3(46, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_154.addComponentOrReplace(transform_501)
engine.addEntity(grass05_154)

const grass05_155 = new Entity()
grass05_155.setParent(scene)
grass05_155.addComponentOrReplace(gltfShape_33)
const transform_502 = new Transform({
  position: new Vector3(43.5, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_155.addComponentOrReplace(transform_502)
engine.addEntity(grass05_155)

const grass05_156 = new Entity()
grass05_156.setParent(scene)
grass05_156.addComponentOrReplace(gltfShape_33)
const transform_503 = new Transform({
  position: new Vector3(42.5, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_156.addComponentOrReplace(transform_503)
engine.addEntity(grass05_156)

const grass05_157 = new Entity()
grass05_157.setParent(scene)
grass05_157.addComponentOrReplace(gltfShape_33)
const transform_504 = new Transform({
  position: new Vector3(41.5, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_157.addComponentOrReplace(transform_504)
engine.addEntity(grass05_157)

const grass04_114 = new Entity()
grass04_114.setParent(scene)
grass04_114.addComponentOrReplace(gltfShape_32)
const transform_505 = new Transform({
  position: new Vector3(47.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_114.addComponentOrReplace(transform_505)
engine.addEntity(grass04_114)

const grass04_115 = new Entity()
grass04_115.setParent(scene)
grass04_115.addComponentOrReplace(gltfShape_32)
const transform_506 = new Transform({
  position: new Vector3(46.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_115.addComponentOrReplace(transform_506)
engine.addEntity(grass04_115)

const grass04_116 = new Entity()
grass04_116.setParent(scene)
grass04_116.addComponentOrReplace(gltfShape_32)
const transform_507 = new Transform({
  position: new Vector3(43, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_116.addComponentOrReplace(transform_507)
engine.addEntity(grass04_116)

const grass04_117 = new Entity()
grass04_117.setParent(scene)
grass04_117.addComponentOrReplace(gltfShape_32)
const transform_508 = new Transform({
  position: new Vector3(42, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_117.addComponentOrReplace(transform_508)
engine.addEntity(grass04_117)

const grass05_158 = new Entity()
grass05_158.setParent(scene)
grass05_158.addComponentOrReplace(gltfShape_33)
const transform_509 = new Transform({
  position: new Vector3(50, 0, 9),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_158.addComponentOrReplace(transform_509)
engine.addEntity(grass05_158)

const grass05_159 = new Entity()
grass05_159.setParent(scene)
grass05_159.addComponentOrReplace(gltfShape_33)
const transform_510 = new Transform({
  position: new Vector3(50, 0, 9.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_159.addComponentOrReplace(transform_510)
engine.addEntity(grass05_159)

const grass05_160 = new Entity()
grass05_160.setParent(scene)
grass05_160.addComponentOrReplace(gltfShape_33)
const transform_511 = new Transform({
  position: new Vector3(50, 0, 10),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_160.addComponentOrReplace(transform_511)
engine.addEntity(grass05_160)

const grass05_161 = new Entity()
grass05_161.setParent(scene)
grass05_161.addComponentOrReplace(gltfShape_33)
const transform_512 = new Transform({
  position: new Vector3(50, 0, 10.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_161.addComponentOrReplace(transform_512)
engine.addEntity(grass05_161)

const grass05_162 = new Entity()
grass05_162.setParent(scene)
grass05_162.addComponentOrReplace(gltfShape_33)
const transform_513 = new Transform({
  position: new Vector3(50, 0, 11),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_162.addComponentOrReplace(transform_513)
engine.addEntity(grass05_162)

const grass05_163 = new Entity()
grass05_163.setParent(scene)
grass05_163.addComponentOrReplace(gltfShape_33)
const transform_514 = new Transform({
  position: new Vector3(50, 0, 11.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_163.addComponentOrReplace(transform_514)
engine.addEntity(grass05_163)

const grass05_164 = new Entity()
grass05_164.setParent(scene)
grass05_164.addComponentOrReplace(gltfShape_33)
const transform_515 = new Transform({
  position: new Vector3(50, 0, 12),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_164.addComponentOrReplace(transform_515)
engine.addEntity(grass05_164)

const grass05_165 = new Entity()
grass05_165.setParent(scene)
grass05_165.addComponentOrReplace(gltfShape_33)
const transform_516 = new Transform({
  position: new Vector3(50, 0, 12.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_165.addComponentOrReplace(transform_516)
engine.addEntity(grass05_165)

const grass05_166 = new Entity()
grass05_166.setParent(scene)
grass05_166.addComponentOrReplace(gltfShape_33)
const transform_517 = new Transform({
  position: new Vector3(50, 0, 13),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_166.addComponentOrReplace(transform_517)
engine.addEntity(grass05_166)

const grass05_167 = new Entity()
grass05_167.setParent(scene)
grass05_167.addComponentOrReplace(gltfShape_33)
const transform_518 = new Transform({
  position: new Vector3(50, 0, 13.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_167.addComponentOrReplace(transform_518)
engine.addEntity(grass05_167)

const grass05_168 = new Entity()
grass05_168.setParent(scene)
grass05_168.addComponentOrReplace(gltfShape_33)
const transform_519 = new Transform({
  position: new Vector3(50, 0, 14),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_168.addComponentOrReplace(transform_519)
engine.addEntity(grass05_168)

const grass05_169 = new Entity()
grass05_169.setParent(scene)
grass05_169.addComponentOrReplace(gltfShape_33)
const transform_520 = new Transform({
  position: new Vector3(50, 0, 14.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_169.addComponentOrReplace(transform_520)
engine.addEntity(grass05_169)

const grass05_170 = new Entity()
grass05_170.setParent(scene)
grass05_170.addComponentOrReplace(gltfShape_33)
const transform_521 = new Transform({
  position: new Vector3(50, 0, 15),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_170.addComponentOrReplace(transform_521)
engine.addEntity(grass05_170)

const grass05_171 = new Entity()
grass05_171.setParent(scene)
grass05_171.addComponentOrReplace(gltfShape_33)
const transform_522 = new Transform({
  position: new Vector3(50, 0, 15.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_171.addComponentOrReplace(transform_522)
engine.addEntity(grass05_171)

const grass04_118 = new Entity()
grass04_118.setParent(scene)
grass04_118.addComponentOrReplace(gltfShape_32)
const transform_523 = new Transform({
  position: new Vector3(50, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_118.addComponentOrReplace(transform_523)
engine.addEntity(grass04_118)

const grass04_119 = new Entity()
grass04_119.setParent(scene)
grass04_119.addComponentOrReplace(gltfShape_32)
const transform_524 = new Transform({
  position: new Vector3(50, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_119.addComponentOrReplace(transform_524)
engine.addEntity(grass04_119)

const grass04_120 = new Entity()
grass04_120.setParent(scene)
grass04_120.addComponentOrReplace(gltfShape_32)
const transform_525 = new Transform({
  position: new Vector3(50, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_120.addComponentOrReplace(transform_525)
engine.addEntity(grass04_120)

const grass05_172 = new Entity()
grass05_172.setParent(scene)
grass05_172.addComponentOrReplace(gltfShape_33)
const transform_526 = new Transform({
  position: new Vector3(50, 0, 19),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_172.addComponentOrReplace(transform_526)
engine.addEntity(grass05_172)

const grass05_173 = new Entity()
grass05_173.setParent(scene)
grass05_173.addComponentOrReplace(gltfShape_33)
const transform_527 = new Transform({
  position: new Vector3(50, 0, 20),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_173.addComponentOrReplace(transform_527)
engine.addEntity(grass05_173)

const grass05_174 = new Entity()
grass05_174.setParent(scene)
grass05_174.addComponentOrReplace(gltfShape_33)
const transform_528 = new Transform({
  position: new Vector3(50, 0, 21),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_174.addComponentOrReplace(transform_528)
engine.addEntity(grass05_174)

const grass05_175 = new Entity()
grass05_175.setParent(scene)
grass05_175.addComponentOrReplace(gltfShape_33)
const transform_529 = new Transform({
  position: new Vector3(50, 0, 23),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_175.addComponentOrReplace(transform_529)
engine.addEntity(grass05_175)

const grass05_176 = new Entity()
grass05_176.setParent(scene)
grass05_176.addComponentOrReplace(gltfShape_33)
const transform_530 = new Transform({
  position: new Vector3(50, 0, 22),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_176.addComponentOrReplace(transform_530)
engine.addEntity(grass05_176)

const grass05_177 = new Entity()
grass05_177.setParent(scene)
grass05_177.addComponentOrReplace(gltfShape_33)
const transform_531 = new Transform({
  position: new Vector3(50, 0, 24),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_177.addComponentOrReplace(transform_531)
engine.addEntity(grass05_177)

const grass04_121 = new Entity()
grass04_121.setParent(scene)
grass04_121.addComponentOrReplace(gltfShape_32)
const transform_532 = new Transform({
  position: new Vector3(50, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_121.addComponentOrReplace(transform_532)
engine.addEntity(grass04_121)

const grass04_122 = new Entity()
grass04_122.setParent(scene)
grass04_122.addComponentOrReplace(gltfShape_32)
const transform_533 = new Transform({
  position: new Vector3(50, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_122.addComponentOrReplace(transform_533)
engine.addEntity(grass04_122)

const grass04_123 = new Entity()
grass04_123.setParent(scene)
grass04_123.addComponentOrReplace(gltfShape_32)
const transform_534 = new Transform({
  position: new Vector3(50, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_123.addComponentOrReplace(transform_534)
engine.addEntity(grass04_123)

const grass04_124 = new Entity()
grass04_124.setParent(scene)
grass04_124.addComponentOrReplace(gltfShape_32)
const transform_535 = new Transform({
  position: new Vector3(50, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_124.addComponentOrReplace(transform_535)
engine.addEntity(grass04_124)

const grass05_178 = new Entity()
grass05_178.setParent(scene)
grass05_178.addComponentOrReplace(gltfShape_33)
const transform_536 = new Transform({
  position: new Vector3(50, 0, 33.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_178.addComponentOrReplace(transform_536)
engine.addEntity(grass05_178)

const grass05_179 = new Entity()
grass05_179.setParent(scene)
grass05_179.addComponentOrReplace(gltfShape_33)
const transform_537 = new Transform({
  position: new Vector3(50, 0, 34.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_179.addComponentOrReplace(transform_537)
engine.addEntity(grass05_179)

const grass05_180 = new Entity()
grass05_180.setParent(scene)
grass05_180.addComponentOrReplace(gltfShape_33)
const transform_538 = new Transform({
  position: new Vector3(50, 0, 35.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_180.addComponentOrReplace(transform_538)
engine.addEntity(grass05_180)

const grass04_125 = new Entity()
grass04_125.setParent(scene)
grass04_125.addComponentOrReplace(gltfShape_32)
const transform_539 = new Transform({
  position: new Vector3(50, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_125.addComponentOrReplace(transform_539)
engine.addEntity(grass04_125)

const grass04_126 = new Entity()
grass04_126.setParent(scene)
grass04_126.addComponentOrReplace(gltfShape_32)
const transform_540 = new Transform({
  position: new Vector3(50, 0, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_126.addComponentOrReplace(transform_540)
engine.addEntity(grass04_126)

const grass05_181 = new Entity()
grass05_181.setParent(scene)
grass05_181.addComponentOrReplace(gltfShape_33)
const transform_541 = new Transform({
  position: new Vector3(50, 0, 38),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_181.addComponentOrReplace(transform_541)
engine.addEntity(grass05_181)

const grass05_182 = new Entity()
grass05_182.setParent(scene)
grass05_182.addComponentOrReplace(gltfShape_33)
const transform_542 = new Transform({
  position: new Vector3(50, 0, 39),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_182.addComponentOrReplace(transform_542)
engine.addEntity(grass05_182)

const grass05_183 = new Entity()
grass05_183.setParent(scene)
grass05_183.addComponentOrReplace(gltfShape_33)
const transform_543 = new Transform({
  position: new Vector3(50, 0, 40),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_183.addComponentOrReplace(transform_543)
engine.addEntity(grass05_183)

const grass05_184 = new Entity()
grass05_184.setParent(scene)
grass05_184.addComponentOrReplace(gltfShape_33)
const transform_544 = new Transform({
  position: new Vector3(50, 0, 44.5),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_184.addComponentOrReplace(transform_544)
engine.addEntity(grass05_184)

const grass04_127 = new Entity()
grass04_127.setParent(scene)
grass04_127.addComponentOrReplace(gltfShape_32)
const transform_545 = new Transform({
  position: new Vector3(50, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_127.addComponentOrReplace(transform_545)
engine.addEntity(grass04_127)

const grass05_185 = new Entity()
grass05_185.setParent(scene)
grass05_185.addComponentOrReplace(gltfShape_33)
const transform_546 = new Transform({
  position: new Vector3(49.5, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_185.addComponentOrReplace(transform_546)
engine.addEntity(grass05_185)

const grass04_128 = new Entity()
grass04_128.setParent(scene)
grass04_128.addComponentOrReplace(gltfShape_32)
const transform_547 = new Transform({
  position: new Vector3(49, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_128.addComponentOrReplace(transform_547)
engine.addEntity(grass04_128)

const grass05_186 = new Entity()
grass05_186.setParent(scene)
grass05_186.addComponentOrReplace(gltfShape_33)
const transform_548 = new Transform({
  position: new Vector3(48.5, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_186.addComponentOrReplace(transform_548)
engine.addEntity(grass05_186)

const grass04_129 = new Entity()
grass04_129.setParent(scene)
grass04_129.addComponentOrReplace(gltfShape_32)
const transform_549 = new Transform({
  position: new Vector3(48, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_129.addComponentOrReplace(transform_549)
engine.addEntity(grass04_129)

const grass04_130 = new Entity()
grass04_130.setParent(scene)
grass04_130.addComponentOrReplace(gltfShape_32)
const transform_550 = new Transform({
  position: new Vector3(47, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_130.addComponentOrReplace(transform_550)
engine.addEntity(grass04_130)

const grass04_131 = new Entity()
grass04_131.setParent(scene)
grass04_131.addComponentOrReplace(gltfShape_32)
const transform_551 = new Transform({
  position: new Vector3(46, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_131.addComponentOrReplace(transform_551)
engine.addEntity(grass04_131)

const grass05_187 = new Entity()
grass05_187.setParent(scene)
grass05_187.addComponentOrReplace(gltfShape_33)
const transform_552 = new Transform({
  position: new Vector3(47.5, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_187.addComponentOrReplace(transform_552)
engine.addEntity(grass05_187)

const grass05_188 = new Entity()
grass05_188.setParent(scene)
grass05_188.addComponentOrReplace(gltfShape_33)
const transform_553 = new Transform({
  position: new Vector3(46.5, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_188.addComponentOrReplace(transform_553)
engine.addEntity(grass05_188)

const grass05_189 = new Entity()
grass05_189.setParent(scene)
grass05_189.addComponentOrReplace(gltfShape_33)
const transform_554 = new Transform({
  position: new Vector3(43, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_189.addComponentOrReplace(transform_554)
engine.addEntity(grass05_189)

const grass05_190 = new Entity()
grass05_190.setParent(scene)
grass05_190.addComponentOrReplace(gltfShape_33)
const transform_555 = new Transform({
  position: new Vector3(42, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_190.addComponentOrReplace(transform_555)
engine.addEntity(grass05_190)

const grass04_132 = new Entity()
grass04_132.setParent(scene)
grass04_132.addComponentOrReplace(gltfShape_32)
const transform_556 = new Transform({
  position: new Vector3(42.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_132.addComponentOrReplace(transform_556)
engine.addEntity(grass04_132)

const grass04_133 = new Entity()
grass04_133.setParent(scene)
grass04_133.addComponentOrReplace(gltfShape_32)
const transform_557 = new Transform({
  position: new Vector3(41.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_133.addComponentOrReplace(transform_557)
engine.addEntity(grass04_133)

const grass04_134 = new Entity()
grass04_134.setParent(scene)
grass04_134.addComponentOrReplace(gltfShape_32)
const transform_558 = new Transform({
  position: new Vector3(39.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_134.addComponentOrReplace(transform_558)
engine.addEntity(grass04_134)

const grass05_191 = new Entity()
grass05_191.setParent(scene)
grass05_191.addComponentOrReplace(gltfShape_33)
const transform_559 = new Transform({
  position: new Vector3(39, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_191.addComponentOrReplace(transform_559)
engine.addEntity(grass05_191)

const grass04_135 = new Entity()
grass04_135.setParent(scene)
grass04_135.addComponentOrReplace(gltfShape_32)
const transform_560 = new Transform({
  position: new Vector3(38.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_135.addComponentOrReplace(transform_560)
engine.addEntity(grass04_135)

const grass05_192 = new Entity()
grass05_192.setParent(scene)
grass05_192.addComponentOrReplace(gltfShape_33)
const transform_561 = new Transform({
  position: new Vector3(38, 0, 46),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_192.addComponentOrReplace(transform_561)
engine.addEntity(grass05_192)

const grass04_136 = new Entity()
grass04_136.setParent(scene)
grass04_136.addComponentOrReplace(gltfShape_32)
const transform_562 = new Transform({
  position: new Vector3(37.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_136.addComponentOrReplace(transform_562)
engine.addEntity(grass04_136)

const grass05_193 = new Entity()
grass05_193.setParent(scene)
grass05_193.addComponentOrReplace(gltfShape_33)
const transform_563 = new Transform({
  position: new Vector3(18, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_193.addComponentOrReplace(transform_563)
engine.addEntity(grass05_193)

const grass05_194 = new Entity()
grass05_194.setParent(scene)
grass05_194.addComponentOrReplace(gltfShape_33)
const transform_564 = new Transform({
  position: new Vector3(17.5, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_194.addComponentOrReplace(transform_564)
engine.addEntity(grass05_194)

const grass05_195 = new Entity()
grass05_195.setParent(scene)
grass05_195.addComponentOrReplace(gltfShape_33)
const transform_565 = new Transform({
  position: new Vector3(17, 0, 47),
  rotation: new Quaternion(0, -0.773010453362737, 0, 0.6343932841636456),
  scale: new Vector3(1, 1, 1)
})
grass05_195.addComponentOrReplace(transform_565)
engine.addEntity(grass05_195)

const treePine_01_16 = new Entity()
treePine_01_16.setParent(scene)
treePine_01_16.addComponentOrReplace(gltfShape_8)
const transform_566 = new Transform({
  position: new Vector3(16.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_16.addComponentOrReplace(transform_566)
engine.addEntity(treePine_01_16)

const treePine_01_17 = new Entity()
treePine_01_17.setParent(scene)
treePine_01_17.addComponentOrReplace(gltfShape_8)
const transform_567 = new Transform({
  position: new Vector3(61.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_17.addComponentOrReplace(transform_567)
engine.addEntity(treePine_01_17)

const grass05_196 = new Entity()
grass05_196.setParent(scene)
grass05_196.addComponentOrReplace(gltfShape_33)
const transform_568 = new Transform({
  position: new Vector3(18.5, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_196.addComponentOrReplace(transform_568)
engine.addEntity(grass05_196)

const grass05_197 = new Entity()
grass05_197.setParent(scene)
grass05_197.addComponentOrReplace(gltfShape_33)
const transform_569 = new Transform({
  position: new Vector3(21, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_197.addComponentOrReplace(transform_569)
engine.addEntity(grass05_197)

const grass05_198 = new Entity()
grass05_198.setParent(scene)
grass05_198.addComponentOrReplace(gltfShape_33)
const transform_570 = new Transform({
  position: new Vector3(22, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_198.addComponentOrReplace(transform_570)
engine.addEntity(grass05_198)

const grass05_199 = new Entity()
grass05_199.setParent(scene)
grass05_199.addComponentOrReplace(gltfShape_33)
const transform_571 = new Transform({
  position: new Vector3(23, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_199.addComponentOrReplace(transform_571)
engine.addEntity(grass05_199)

const grass05_200 = new Entity()
grass05_200.setParent(scene)
grass05_200.addComponentOrReplace(gltfShape_33)
const transform_572 = new Transform({
  position: new Vector3(24, 0, 7.5),
  rotation: new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612805),
  scale: new Vector3(1, 1, 1)
})
grass05_200.addComponentOrReplace(transform_572)
engine.addEntity(grass05_200)

const grass04_137 = new Entity()
grass04_137.setParent(scene)
grass04_137.addComponentOrReplace(gltfShape_32)
const transform_573 = new Transform({
  position: new Vector3(19, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_137.addComponentOrReplace(transform_573)
engine.addEntity(grass04_137)

const grass04_138 = new Entity()
grass04_138.setParent(scene)
grass04_138.addComponentOrReplace(gltfShape_32)
const transform_574 = new Transform({
  position: new Vector3(21.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_138.addComponentOrReplace(transform_574)
engine.addEntity(grass04_138)

const grass04_139 = new Entity()
grass04_139.setParent(scene)
grass04_139.addComponentOrReplace(gltfShape_32)
const transform_575 = new Transform({
  position: new Vector3(22.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_139.addComponentOrReplace(transform_575)
engine.addEntity(grass04_139)

const grass04_140 = new Entity()
grass04_140.setParent(scene)
grass04_140.addComponentOrReplace(gltfShape_32)
const transform_576 = new Transform({
  position: new Vector3(23.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_140.addComponentOrReplace(transform_576)
engine.addEntity(grass04_140)

const grass05_201 = new Entity()
grass05_201.setParent(scene)
grass05_201.addComponentOrReplace(gltfShape_33)
const transform_577 = new Transform({
  position: new Vector3(16.5, 0, 45.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_201.addComponentOrReplace(transform_577)
engine.addEntity(grass05_201)

const grass05_202 = new Entity()
grass05_202.setParent(scene)
grass05_202.addComponentOrReplace(gltfShape_33)
const transform_578 = new Transform({
  position: new Vector3(16.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_202.addComponentOrReplace(transform_578)
engine.addEntity(grass05_202)

const grass05_203 = new Entity()
grass05_203.setParent(scene)
grass05_203.addComponentOrReplace(gltfShape_33)
const transform_579 = new Transform({
  position: new Vector3(16.5, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_203.addComponentOrReplace(transform_579)
engine.addEntity(grass05_203)

const grass05_204 = new Entity()
grass05_204.setParent(scene)
grass05_204.addComponentOrReplace(gltfShape_33)
const transform_580 = new Transform({
  position: new Vector3(16.5, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_204.addComponentOrReplace(transform_580)
engine.addEntity(grass05_204)

const grass05_205 = new Entity()
grass05_205.setParent(scene)
grass05_205.addComponentOrReplace(gltfShape_33)
const transform_581 = new Transform({
  position: new Vector3(16.5, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_205.addComponentOrReplace(transform_581)
engine.addEntity(grass05_205)

const grass05_206 = new Entity()
grass05_206.setParent(scene)
grass05_206.addComponentOrReplace(gltfShape_33)
const transform_582 = new Transform({
  position: new Vector3(16.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_206.addComponentOrReplace(transform_582)
engine.addEntity(grass05_206)

const grass05_207 = new Entity()
grass05_207.setParent(scene)
grass05_207.addComponentOrReplace(gltfShape_33)
const transform_583 = new Transform({
  position: new Vector3(16.5, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_207.addComponentOrReplace(transform_583)
engine.addEntity(grass05_207)

const grass05_208 = new Entity()
grass05_208.setParent(scene)
grass05_208.addComponentOrReplace(gltfShape_33)
const transform_584 = new Transform({
  position: new Vector3(16.5, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_208.addComponentOrReplace(transform_584)
engine.addEntity(grass05_208)

const grass05_209 = new Entity()
grass05_209.setParent(scene)
grass05_209.addComponentOrReplace(gltfShape_33)
const transform_585 = new Transform({
  position: new Vector3(16.5, 0, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_209.addComponentOrReplace(transform_585)
engine.addEntity(grass05_209)

const grass05_210 = new Entity()
grass05_210.setParent(scene)
grass05_210.addComponentOrReplace(gltfShape_33)
const transform_586 = new Transform({
  position: new Vector3(16.5, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_210.addComponentOrReplace(transform_586)
engine.addEntity(grass05_210)

const grass05_211 = new Entity()
grass05_211.setParent(scene)
grass05_211.addComponentOrReplace(gltfShape_33)
const transform_587 = new Transform({
  position: new Vector3(16.5, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_211.addComponentOrReplace(transform_587)
engine.addEntity(grass05_211)

const grass05_212 = new Entity()
grass05_212.setParent(scene)
grass05_212.addComponentOrReplace(gltfShape_33)
const transform_588 = new Transform({
  position: new Vector3(16.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_212.addComponentOrReplace(transform_588)
engine.addEntity(grass05_212)

const grass05_213 = new Entity()
grass05_213.setParent(scene)
grass05_213.addComponentOrReplace(gltfShape_33)
const transform_589 = new Transform({
  position: new Vector3(16.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_213.addComponentOrReplace(transform_589)
engine.addEntity(grass05_213)

const grass05_214 = new Entity()
grass05_214.setParent(scene)
grass05_214.addComponentOrReplace(gltfShape_33)
const transform_590 = new Transform({
  position: new Vector3(16.5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_214.addComponentOrReplace(transform_590)
engine.addEntity(grass05_214)

const grass05_215 = new Entity()
grass05_215.setParent(scene)
grass05_215.addComponentOrReplace(gltfShape_33)
const transform_591 = new Transform({
  position: new Vector3(16.5, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_215.addComponentOrReplace(transform_591)
engine.addEntity(grass05_215)

const grass05_216 = new Entity()
grass05_216.setParent(scene)
grass05_216.addComponentOrReplace(gltfShape_33)
const transform_592 = new Transform({
  position: new Vector3(16.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_216.addComponentOrReplace(transform_592)
engine.addEntity(grass05_216)

const grass04_141 = new Entity()
grass04_141.setParent(scene)
grass04_141.addComponentOrReplace(gltfShape_32)
const transform_593 = new Transform({
  position: new Vector3(16.5, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_141.addComponentOrReplace(transform_593)
engine.addEntity(grass04_141)

const grass04_142 = new Entity()
grass04_142.setParent(scene)
grass04_142.addComponentOrReplace(gltfShape_32)
const transform_594 = new Transform({
  position: new Vector3(16.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_142.addComponentOrReplace(transform_594)
engine.addEntity(grass04_142)

const grass04_143 = new Entity()
grass04_143.setParent(scene)
grass04_143.addComponentOrReplace(gltfShape_32)
const transform_595 = new Transform({
  position: new Vector3(16.5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_143.addComponentOrReplace(transform_595)
engine.addEntity(grass04_143)

const grass04_144 = new Entity()
grass04_144.setParent(scene)
grass04_144.addComponentOrReplace(gltfShape_32)
const transform_596 = new Transform({
  position: new Vector3(16.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_144.addComponentOrReplace(transform_596)
engine.addEntity(grass04_144)

const grass04_145 = new Entity()
grass04_145.setParent(scene)
grass04_145.addComponentOrReplace(gltfShape_32)
const transform_597 = new Transform({
  position: new Vector3(16.5, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_145.addComponentOrReplace(transform_597)
engine.addEntity(grass04_145)

const grass05_217 = new Entity()
grass05_217.setParent(scene)
grass05_217.addComponentOrReplace(gltfShape_33)
const transform_598 = new Transform({
  position: new Vector3(16.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_217.addComponentOrReplace(transform_598)
engine.addEntity(grass05_217)

const grass04_146 = new Entity()
grass04_146.setParent(scene)
grass04_146.addComponentOrReplace(gltfShape_32)
const transform_599 = new Transform({
  position: new Vector3(16.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_146.addComponentOrReplace(transform_599)
engine.addEntity(grass04_146)

const grass05_218 = new Entity()
grass05_218.setParent(scene)
grass05_218.addComponentOrReplace(gltfShape_33)
const transform_600 = new Transform({
  position: new Vector3(16.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_218.addComponentOrReplace(transform_600)
engine.addEntity(grass05_218)

const grass04_147 = new Entity()
grass04_147.setParent(scene)
grass04_147.addComponentOrReplace(gltfShape_32)
const transform_601 = new Transform({
  position: new Vector3(16.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_147.addComponentOrReplace(transform_601)
engine.addEntity(grass04_147)

const grass05_219 = new Entity()
grass05_219.setParent(scene)
grass05_219.addComponentOrReplace(gltfShape_33)
const transform_602 = new Transform({
  position: new Vector3(16.5, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_219.addComponentOrReplace(transform_602)
engine.addEntity(grass05_219)

const grass04_148 = new Entity()
grass04_148.setParent(scene)
grass04_148.addComponentOrReplace(gltfShape_32)
const transform_603 = new Transform({
  position: new Vector3(16.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_148.addComponentOrReplace(transform_603)
engine.addEntity(grass04_148)

const grass04_149 = new Entity()
grass04_149.setParent(scene)
grass04_149.addComponentOrReplace(gltfShape_32)
const transform_604 = new Transform({
  position: new Vector3(16.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_149.addComponentOrReplace(transform_604)
engine.addEntity(grass04_149)

const grass05_220 = new Entity()
grass05_220.setParent(scene)
grass05_220.addComponentOrReplace(gltfShape_33)
const transform_605 = new Transform({
  position: new Vector3(16.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_220.addComponentOrReplace(transform_605)
engine.addEntity(grass05_220)

const grass05_221 = new Entity()
grass05_221.setParent(scene)
grass05_221.addComponentOrReplace(gltfShape_33)
const transform_606 = new Transform({
  position: new Vector3(16.5, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_221.addComponentOrReplace(transform_606)
engine.addEntity(grass05_221)

const grass05_222 = new Entity()
grass05_222.setParent(scene)
grass05_222.addComponentOrReplace(gltfShape_33)
const transform_607 = new Transform({
  position: new Vector3(16.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_222.addComponentOrReplace(transform_607)
engine.addEntity(grass05_222)

const grass04_150 = new Entity()
grass04_150.setParent(scene)
grass04_150.addComponentOrReplace(gltfShape_32)
const transform_608 = new Transform({
  position: new Vector3(16.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_150.addComponentOrReplace(transform_608)
engine.addEntity(grass04_150)

const grass04_151 = new Entity()
grass04_151.setParent(scene)
grass04_151.addComponentOrReplace(gltfShape_32)
const transform_609 = new Transform({
  position: new Vector3(16.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass04_151.addComponentOrReplace(transform_609)
engine.addEntity(grass04_151)

const grass05_223 = new Entity()
grass05_223.setParent(scene)
grass05_223.addComponentOrReplace(gltfShape_33)
const transform_610 = new Transform({
  position: new Vector3(16.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_223.addComponentOrReplace(transform_610)
engine.addEntity(grass05_223)

const grass05_224 = new Entity()
grass05_224.setParent(scene)
grass05_224.addComponentOrReplace(gltfShape_33)
const transform_611 = new Transform({
  position: new Vector3(16.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_224.addComponentOrReplace(transform_611)
engine.addEntity(grass05_224)

const grass05_225 = new Entity()
grass05_225.setParent(scene)
grass05_225.addComponentOrReplace(gltfShape_33)
const transform_612 = new Transform({
  position: new Vector3(16.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_225.addComponentOrReplace(transform_612)
engine.addEntity(grass05_225)

const grass05_226 = new Entity()
grass05_226.setParent(scene)
grass05_226.addComponentOrReplace(gltfShape_33)
const transform_613 = new Transform({
  position: new Vector3(16.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_226.addComponentOrReplace(transform_613)
engine.addEntity(grass05_226)

const grass05_227 = new Entity()
grass05_227.setParent(scene)
grass05_227.addComponentOrReplace(gltfShape_33)
const transform_614 = new Transform({
  position: new Vector3(16.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_227.addComponentOrReplace(transform_614)
engine.addEntity(grass05_227)

const grass05_228 = new Entity()
grass05_228.setParent(scene)
grass05_228.addComponentOrReplace(gltfShape_33)
const transform_615 = new Transform({
  position: new Vector3(16.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_228.addComponentOrReplace(transform_615)
engine.addEntity(grass05_228)

const grass05_229 = new Entity()
grass05_229.setParent(scene)
grass05_229.addComponentOrReplace(gltfShape_33)
const transform_616 = new Transform({
  position: new Vector3(16.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_229.addComponentOrReplace(transform_616)
engine.addEntity(grass05_229)

const grass05_230 = new Entity()
grass05_230.setParent(scene)
grass05_230.addComponentOrReplace(gltfShape_33)
const transform_617 = new Transform({
  position: new Vector3(16.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_230.addComponentOrReplace(transform_617)
engine.addEntity(grass05_230)

const grass05_231 = new Entity()
grass05_231.setParent(scene)
grass05_231.addComponentOrReplace(gltfShape_33)
const transform_618 = new Transform({
  position: new Vector3(16.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_231.addComponentOrReplace(transform_618)
engine.addEntity(grass05_231)

const grass05_232 = new Entity()
grass05_232.setParent(scene)
grass05_232.addComponentOrReplace(gltfShape_33)
const transform_619 = new Transform({
  position: new Vector3(16.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_232.addComponentOrReplace(transform_619)
engine.addEntity(grass05_232)

const grass05_233 = new Entity()
grass05_233.setParent(scene)
grass05_233.addComponentOrReplace(gltfShape_33)
const transform_620 = new Transform({
  position: new Vector3(16.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_233.addComponentOrReplace(transform_620)
engine.addEntity(grass05_233)

const grass05_234 = new Entity()
grass05_234.setParent(scene)
grass05_234.addComponentOrReplace(gltfShape_33)
const transform_621 = new Transform({
  position: new Vector3(16.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_234.addComponentOrReplace(transform_621)
engine.addEntity(grass05_234)

const grass05_235 = new Entity()
grass05_235.setParent(scene)
grass05_235.addComponentOrReplace(gltfShape_33)
const transform_622 = new Transform({
  position: new Vector3(16.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grass05_235.addComponentOrReplace(transform_622)
engine.addEntity(grass05_235)

const treePine_03_14 = new Entity()
treePine_03_14.setParent(scene)
treePine_03_14.addComponentOrReplace(gltfShape_10)
const transform_623 = new Transform({
  position: new Vector3(2, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_14.addComponentOrReplace(transform_623)
engine.addEntity(treePine_03_14)

const treePine_03_15 = new Entity()
treePine_03_15.setParent(scene)
treePine_03_15.addComponentOrReplace(gltfShape_10)
const transform_624 = new Transform({
  position: new Vector3(5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_15.addComponentOrReplace(transform_624)
engine.addEntity(treePine_03_15)

const treeFir_02_4 = new Entity()
treeFir_02_4.setParent(scene)
treeFir_02_4.addComponentOrReplace(gltfShape_15)
const transform_625 = new Transform({
  position: new Vector3(8.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
})
treeFir_02_4.addComponentOrReplace(transform_625)
engine.addEntity(treeFir_02_4)

const treePine_03_16 = new Entity()
treePine_03_16.setParent(scene)
treePine_03_16.addComponentOrReplace(gltfShape_10)
const transform_626 = new Transform({
  position: new Vector3(12.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_16.addComponentOrReplace(transform_626)
engine.addEntity(treePine_03_16)

const treePine_03_17 = new Entity()
treePine_03_17.setParent(scene)
treePine_03_17.addComponentOrReplace(gltfShape_10)
const transform_627 = new Transform({
  position: new Vector3(53, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_17.addComponentOrReplace(transform_627)
engine.addEntity(treePine_03_17)

const treeFir_02_5 = new Entity()
treeFir_02_5.setParent(scene)
treeFir_02_5.addComponentOrReplace(gltfShape_15)
const transform_628 = new Transform({
  position: new Vector3(56, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
})
treeFir_02_5.addComponentOrReplace(transform_628)
engine.addEntity(treeFir_02_5)

const treePine_03_18 = new Entity()
treePine_03_18.setParent(scene)
treePine_03_18.addComponentOrReplace(gltfShape_10)
const transform_629 = new Transform({
  position: new Vector3(59, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_03_18.addComponentOrReplace(transform_629)
engine.addEntity(treePine_03_18)

const grassPatchSmall_01_12 = new Entity()
grassPatchSmall_01_12.setParent(scene)
grassPatchSmall_01_12.addComponentOrReplace(gltfShape_4)
const transform_630 = new Transform({
  position: new Vector3(26.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchSmall_01_12.addComponentOrReplace(transform_630)
engine.addEntity(grassPatchSmall_01_12)

const grassPatchLarge_01_2 = new Entity()
grassPatchLarge_01_2.setParent(scene)
grassPatchLarge_01_2.addComponentOrReplace(gltfShape_3)
const transform_631 = new Transform({
  position: new Vector3(23, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_01_2.addComponentOrReplace(transform_631)
engine.addEntity(grassPatchLarge_01_2)

const tableRock_01_3 = new Entity()
tableRock_01_3.setParent(scene)
tableRock_01_3.addComponentOrReplace(gltfShape_18)
const transform_632 = new Transform({
  position: new Vector3(19.5, 0, 19),
  rotation: new Quaternion(0, -0.3826834323650899, 0, 0.9238795325112871),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_3.addComponentOrReplace(transform_632)
engine.addEntity(tableRock_01_3)

const tableRock_01_4 = new Entity()
tableRock_01_4.setParent(scene)
tableRock_01_4.addComponentOrReplace(gltfShape_18)
const transform_633 = new Transform({
  position: new Vector3(19, 0, 12.5),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_4.addComponentOrReplace(transform_633)
engine.addEntity(tableRock_01_4)

const spiralStone_01_8 = new Entity()
spiralStone_01_8.setParent(scene)
spiralStone_01_8.addComponentOrReplace(gltfShape_17)
const transform_634 = new Transform({
  position: new Vector3(46.5, 0, 26),
  rotation: new Quaternion(0, -0.9951847266721975, 0, 0.09801714032956076),
  scale: new Vector3(1, 1, 1)
})
spiralStone_01_8.addComponentOrReplace(transform_634)
engine.addEntity(spiralStone_01_8)

const fish_03 = new Entity()
fish_03.setParent(scene)
const gltfShape_36 = new GLTFShape('models/Fish_03/Fish_03.glb')
fish_03.addComponentOrReplace(gltfShape_36)
const transform_635 = new Transform({
  position: new Vector3(44.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fish_03.addComponentOrReplace(transform_635)
engine.addEntity(fish_03)

const fish_03_2 = new Entity()
fish_03_2.setParent(scene)
fish_03_2.addComponentOrReplace(gltfShape_36)
const transform_636 = new Transform({
  position: new Vector3(44.5, 0.49999999999999994, 38.5),
  rotation: new Quaternion(-0.4485837931713182, 0.5466009335008786, 0.5466009335008788, 0.4485837931713184),
  scale: new Vector3(1, 1, 1)
})
fish_03_2.addComponentOrReplace(transform_636)
engine.addEntity(fish_03_2)

const starfish_01 = new Entity()
starfish_01.setParent(scene)
const gltfShape_37 = new GLTFShape('models/Starfish_01/Starfish_01.glb')
starfish_01.addComponentOrReplace(gltfShape_37)
const transform_637 = new Transform({
  position: new Vector3(44.5, 0.5, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
starfish_01.addComponentOrReplace(transform_637)
engine.addEntity(starfish_01)

const fish_04 = new Entity()
fish_04.setParent(scene)
const gltfShape_38 = new GLTFShape('models/Fish_04/Fish_04.glb')
fish_04.addComponentOrReplace(gltfShape_38)
const transform_638 = new Transform({
  position: new Vector3(43, 0.5, 41.5),
  rotation: new Quaternion(0.6343932841636457, 0, 0, 0.7730104533627369),
  scale: new Vector3(1, 1, 1)
})
fish_04.addComponentOrReplace(transform_638)
engine.addEntity(fish_04)

const fish_01 = new Entity()
fish_01.setParent(scene)
const gltfShape_39 = new GLTFShape('models/Fish_01/Fish_01.glb')
fish_01.addComponentOrReplace(gltfShape_39)
const transform_639 = new Transform({
  position: new Vector3(43, 0.5, 40),
  rotation: new Quaternion(-0.7730104533627367, 0, 0, 0.6343932841636457),
  scale: new Vector3(1, 1, 1)
})
fish_01.addComponentOrReplace(transform_639)
engine.addEntity(fish_01)

const fish_01_2 = new Entity()
fish_01_2.setParent(scene)
fish_01_2.addComponentOrReplace(gltfShape_39)
const transform_640 = new Transform({
  position: new Vector3(44, 0.5, 40),
  rotation: new Quaternion(-0.7730104533627367, 0, 0, 0.6343932841636457),
  scale: new Vector3(1, 1, 1)
})
fish_01_2.addComponentOrReplace(transform_640)
engine.addEntity(fish_01_2)

const starfish_01_2 = new Entity()
starfish_01_2.setParent(scene)
starfish_01_2.addComponentOrReplace(gltfShape_37)
const transform_641 = new Transform({
  position: new Vector3(23, 0.5, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
starfish_01_2.addComponentOrReplace(transform_641)
engine.addEntity(starfish_01_2)

const fish_04_2 = new Entity()
fish_04_2.setParent(scene)
fish_04_2.addComponentOrReplace(gltfShape_38)
const transform_642 = new Transform({
  position: new Vector3(22, 0.5, 41.5),
  rotation: new Quaternion(0.6343932841636457, 0, 0, 0.7730104533627369),
  scale: new Vector3(1, 1, 1)
})
fish_04_2.addComponentOrReplace(transform_642)
engine.addEntity(fish_04_2)

const fish_03_3 = new Entity()
fish_03_3.setParent(scene)
fish_03_3.addComponentOrReplace(gltfShape_36)
const transform_643 = new Transform({
  position: new Vector3(22, 0.5, 38.5),
  rotation: new Quaternion(-0.4485837931713182, 0.5466009335008786, 0.5466009335008788, 0.4485837931713184),
  scale: new Vector3(1, 1, 1)
})
fish_03_3.addComponentOrReplace(transform_643)
engine.addEntity(fish_03_3)

const fish_01_3 = new Entity()
fish_01_3.setParent(scene)
fish_01_3.addComponentOrReplace(gltfShape_39)
const transform_644 = new Transform({
  position: new Vector3(23, 0.5, 42),
  rotation: new Quaternion(-0.7730104533627367, 0, 0, 0.6343932841636457),
  scale: new Vector3(1, 1, 1)
})
fish_01_3.addComponentOrReplace(transform_644)
engine.addEntity(fish_01_3)

const bush_02 = new Entity()
bush_02.setParent(scene)
const gltfShape_40 = new GLTFShape('models/Bush_02/Bush_02.glb')
bush_02.addComponentOrReplace(gltfShape_40)
const transform_645 = new Transform({
  position: new Vector3(45.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush_02.addComponentOrReplace(transform_645)
engine.addEntity(bush_02)

const bush_02_2 = new Entity()
bush_02_2.setParent(scene)
bush_02_2.addComponentOrReplace(gltfShape_40)
const transform_646 = new Transform({
  position: new Vector3(20.5, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush_02_2.addComponentOrReplace(transform_646)
engine.addEntity(bush_02_2)

const bush_03 = new Entity()
bush_03.setParent(scene)
const gltfShape_41 = new GLTFShape('models/Bush_03/Bush_03.glb')
bush_03.addComponentOrReplace(gltfShape_41)
const transform_647 = new Transform({
  position: new Vector3(41.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7113248654051859, 0.7113248654051859, 0.7113248654051859)
})
bush_03.addComponentOrReplace(transform_647)
engine.addEntity(bush_03)

const bush_03_2 = new Entity()
bush_03_2.setParent(scene)
bush_03_2.addComponentOrReplace(gltfShape_41)
const transform_648 = new Transform({
  position: new Vector3(24.5, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7113248654051871, 0.7113248654051871, 0.7113248654051871)
})
bush_03_2.addComponentOrReplace(transform_648)
engine.addEntity(bush_03_2)

const plant_05 = new Entity()
plant_05.setParent(scene)
const gltfShape_42 = new GLTFShape('models/Plant_05/Plant_05.glb')
plant_05.addComponentOrReplace(gltfShape_42)
const transform_649 = new Transform({
  position: new Vector3(42.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05.addComponentOrReplace(transform_649)
engine.addEntity(plant_05)

const flower_04 = new Entity()
flower_04.setParent(scene)
const gltfShape_43 = new GLTFShape('models/Flower_04/Flower_04.glb')
flower_04.addComponentOrReplace(gltfShape_43)
const transform_650 = new Transform({
  position: new Vector3(42, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04.addComponentOrReplace(transform_650)
engine.addEntity(flower_04)

const flower_03 = new Entity()
flower_03.setParent(scene)
const gltfShape_44 = new GLTFShape('models/Flower_03/Flower_03.glb')
flower_03.addComponentOrReplace(gltfShape_44)
const transform_651 = new Transform({
  position: new Vector3(42.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03.addComponentOrReplace(transform_651)
engine.addEntity(flower_03)

const flower_03_2 = new Entity()
flower_03_2.setParent(scene)
flower_03_2.addComponentOrReplace(gltfShape_44)
const transform_652 = new Transform({
  position: new Vector3(42.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_2.addComponentOrReplace(transform_652)
engine.addEntity(flower_03_2)

const flower_03_3 = new Entity()
flower_03_3.setParent(scene)
flower_03_3.addComponentOrReplace(gltfShape_44)
const transform_653 = new Transform({
  position: new Vector3(43, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_3.addComponentOrReplace(transform_653)
engine.addEntity(flower_03_3)

const plant_05_2 = new Entity()
plant_05_2.setParent(scene)
plant_05_2.addComponentOrReplace(gltfShape_42)
const transform_654 = new Transform({
  position: new Vector3(43.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_2.addComponentOrReplace(transform_654)
engine.addEntity(plant_05_2)

const flower_03_4 = new Entity()
flower_03_4.setParent(scene)
flower_03_4.addComponentOrReplace(gltfShape_44)
const transform_655 = new Transform({
  position: new Vector3(44, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_4.addComponentOrReplace(transform_655)
engine.addEntity(flower_03_4)

const flower_04_2 = new Entity()
flower_04_2.setParent(scene)
flower_04_2.addComponentOrReplace(gltfShape_43)
const transform_656 = new Transform({
  position: new Vector3(44.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_2.addComponentOrReplace(transform_656)
engine.addEntity(flower_04_2)

const flower_03_5 = new Entity()
flower_03_5.setParent(scene)
flower_03_5.addComponentOrReplace(gltfShape_44)
const transform_657 = new Transform({
  position: new Vector3(42.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_5.addComponentOrReplace(transform_657)
engine.addEntity(flower_03_5)

const flower_03_6 = new Entity()
flower_03_6.setParent(scene)
flower_03_6.addComponentOrReplace(gltfShape_44)
const transform_658 = new Transform({
  position: new Vector3(44, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_6.addComponentOrReplace(transform_658)
engine.addEntity(flower_03_6)

const grassPatchLarge_01_3 = new Entity()
grassPatchLarge_01_3.setParent(scene)
grassPatchLarge_01_3.addComponentOrReplace(gltfShape_3)
const transform_659 = new Transform({
  position: new Vector3(43.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_01_3.addComponentOrReplace(transform_659)
engine.addEntity(grassPatchLarge_01_3)

const plant_05_3 = new Entity()
plant_05_3.setParent(scene)
plant_05_3.addComponentOrReplace(gltfShape_42)
const transform_660 = new Transform({
  position: new Vector3(43.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_3.addComponentOrReplace(transform_660)
engine.addEntity(plant_05_3)

const flower_03_7 = new Entity()
flower_03_7.setParent(scene)
flower_03_7.addComponentOrReplace(gltfShape_44)
const transform_661 = new Transform({
  position: new Vector3(43, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_7.addComponentOrReplace(transform_661)
engine.addEntity(flower_03_7)

const plant_05_4 = new Entity()
plant_05_4.setParent(scene)
plant_05_4.addComponentOrReplace(gltfShape_42)
const transform_662 = new Transform({
  position: new Vector3(42.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_4.addComponentOrReplace(transform_662)
engine.addEntity(plant_05_4)

const plant_05_5 = new Entity()
plant_05_5.setParent(scene)
plant_05_5.addComponentOrReplace(gltfShape_42)
const transform_663 = new Transform({
  position: new Vector3(44.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_5.addComponentOrReplace(transform_663)
engine.addEntity(plant_05_5)

const flower_03_8 = new Entity()
flower_03_8.setParent(scene)
flower_03_8.addComponentOrReplace(gltfShape_44)
const transform_664 = new Transform({
  position: new Vector3(40, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_8.addComponentOrReplace(transform_664)
engine.addEntity(flower_03_8)

const plant_05_6 = new Entity()
plant_05_6.setParent(scene)
plant_05_6.addComponentOrReplace(gltfShape_42)
const transform_665 = new Transform({
  position: new Vector3(39, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_6.addComponentOrReplace(transform_665)
engine.addEntity(plant_05_6)

const flower_04_3 = new Entity()
flower_04_3.setParent(scene)
flower_04_3.addComponentOrReplace(gltfShape_43)
const transform_666 = new Transform({
  position: new Vector3(39, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_3.addComponentOrReplace(transform_666)
engine.addEntity(flower_04_3)

const flower_03_9 = new Entity()
flower_03_9.setParent(scene)
flower_03_9.addComponentOrReplace(gltfShape_44)
const transform_667 = new Transform({
  position: new Vector3(40, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_9.addComponentOrReplace(transform_667)
engine.addEntity(flower_03_9)

const flower_04_4 = new Entity()
flower_04_4.setParent(scene)
flower_04_4.addComponentOrReplace(gltfShape_43)
const transform_668 = new Transform({
  position: new Vector3(40, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_4.addComponentOrReplace(transform_668)
engine.addEntity(flower_04_4)

const plant_05_7 = new Entity()
plant_05_7.setParent(scene)
plant_05_7.addComponentOrReplace(gltfShape_42)
const transform_669 = new Transform({
  position: new Vector3(39.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_7.addComponentOrReplace(transform_669)
engine.addEntity(plant_05_7)

const plant_05_8 = new Entity()
plant_05_8.setParent(scene)
plant_05_8.addComponentOrReplace(gltfShape_42)
const transform_670 = new Transform({
  position: new Vector3(39.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_8.addComponentOrReplace(transform_670)
engine.addEntity(plant_05_8)

const flower_03_10 = new Entity()
flower_03_10.setParent(scene)
flower_03_10.addComponentOrReplace(gltfShape_44)
const transform_671 = new Transform({
  position: new Vector3(26, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_10.addComponentOrReplace(transform_671)
engine.addEntity(flower_03_10)

const flower_04_5 = new Entity()
flower_04_5.setParent(scene)
flower_04_5.addComponentOrReplace(gltfShape_43)
const transform_672 = new Transform({
  position: new Vector3(26, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_5.addComponentOrReplace(transform_672)
engine.addEntity(flower_04_5)

const flower_03_11 = new Entity()
flower_03_11.setParent(scene)
flower_03_11.addComponentOrReplace(gltfShape_44)
const transform_673 = new Transform({
  position: new Vector3(26, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_11.addComponentOrReplace(transform_673)
engine.addEntity(flower_03_11)

const plant_05_9 = new Entity()
plant_05_9.setParent(scene)
plant_05_9.addComponentOrReplace(gltfShape_42)
const transform_674 = new Transform({
  position: new Vector3(26.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_9.addComponentOrReplace(transform_674)
engine.addEntity(plant_05_9)

const plant_05_10 = new Entity()
plant_05_10.setParent(scene)
plant_05_10.addComponentOrReplace(gltfShape_42)
const transform_675 = new Transform({
  position: new Vector3(26.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_10.addComponentOrReplace(transform_675)
engine.addEntity(plant_05_10)

const plant_05_11 = new Entity()
plant_05_11.setParent(scene)
plant_05_11.addComponentOrReplace(gltfShape_42)
const transform_676 = new Transform({
  position: new Vector3(27, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_11.addComponentOrReplace(transform_676)
engine.addEntity(plant_05_11)

const flower_03_12 = new Entity()
flower_03_12.setParent(scene)
flower_03_12.addComponentOrReplace(gltfShape_44)
const transform_677 = new Transform({
  position: new Vector3(27, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_12.addComponentOrReplace(transform_677)
engine.addEntity(flower_03_12)

const flower_03_13 = new Entity()
flower_03_13.setParent(scene)
flower_03_13.addComponentOrReplace(gltfShape_44)
const transform_678 = new Transform({
  position: new Vector3(27, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_13.addComponentOrReplace(transform_678)
engine.addEntity(flower_03_13)

const flower_04_6 = new Entity()
flower_04_6.setParent(scene)
flower_04_6.addComponentOrReplace(gltfShape_43)
const transform_679 = new Transform({
  position: new Vector3(26.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_6.addComponentOrReplace(transform_679)
engine.addEntity(flower_04_6)

const flower_04_7 = new Entity()
flower_04_7.setParent(scene)
flower_04_7.addComponentOrReplace(gltfShape_43)
const transform_680 = new Transform({
  position: new Vector3(21.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_7.addComponentOrReplace(transform_680)
engine.addEntity(flower_04_7)

const plant_05_12 = new Entity()
plant_05_12.setParent(scene)
plant_05_12.addComponentOrReplace(gltfShape_42)
const transform_681 = new Transform({
  position: new Vector3(22.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_12.addComponentOrReplace(transform_681)
engine.addEntity(plant_05_12)

const flower_03_14 = new Entity()
flower_03_14.setParent(scene)
flower_03_14.addComponentOrReplace(gltfShape_44)
const transform_682 = new Transform({
  position: new Vector3(21.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_14.addComponentOrReplace(transform_682)
engine.addEntity(flower_03_14)

const flower_03_15 = new Entity()
flower_03_15.setParent(scene)
flower_03_15.addComponentOrReplace(gltfShape_44)
const transform_683 = new Transform({
  position: new Vector3(22, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_15.addComponentOrReplace(transform_683)
engine.addEntity(flower_03_15)

const flower_03_16 = new Entity()
flower_03_16.setParent(scene)
flower_03_16.addComponentOrReplace(gltfShape_44)
const transform_684 = new Transform({
  position: new Vector3(24, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_16.addComponentOrReplace(transform_684)
engine.addEntity(flower_03_16)

const plant_05_13 = new Entity()
plant_05_13.setParent(scene)
plant_05_13.addComponentOrReplace(gltfShape_42)
const transform_685 = new Transform({
  position: new Vector3(23.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_13.addComponentOrReplace(transform_685)
engine.addEntity(plant_05_13)

const plant_05_14 = new Entity()
plant_05_14.setParent(scene)
plant_05_14.addComponentOrReplace(gltfShape_42)
const transform_686 = new Transform({
  position: new Vector3(23.5, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_14.addComponentOrReplace(transform_686)
engine.addEntity(plant_05_14)

const flower_04_8 = new Entity()
flower_04_8.setParent(scene)
flower_04_8.addComponentOrReplace(gltfShape_43)
const transform_687 = new Transform({
  position: new Vector3(23, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_8.addComponentOrReplace(transform_687)
engine.addEntity(flower_04_8)

const flower_04_9 = new Entity()
flower_04_9.setParent(scene)
flower_04_9.addComponentOrReplace(gltfShape_43)
const transform_688 = new Transform({
  position: new Vector3(23, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_9.addComponentOrReplace(transform_688)
engine.addEntity(flower_04_9)

const flower_04_10 = new Entity()
flower_04_10.setParent(scene)
flower_04_10.addComponentOrReplace(gltfShape_43)
const transform_689 = new Transform({
  position: new Vector3(22.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_10.addComponentOrReplace(transform_689)
engine.addEntity(flower_04_10)

const flower_03_17 = new Entity()
flower_03_17.setParent(scene)
flower_03_17.addComponentOrReplace(gltfShape_44)
const transform_690 = new Transform({
  position: new Vector3(23.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_17.addComponentOrReplace(transform_690)
engine.addEntity(flower_03_17)

const flower_03_18 = new Entity()
flower_03_18.setParent(scene)
flower_03_18.addComponentOrReplace(gltfShape_44)
const transform_691 = new Transform({
  position: new Vector3(24, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_03_18.addComponentOrReplace(transform_691)
engine.addEntity(flower_03_18)

const flower_04_11 = new Entity()
flower_04_11.setParent(scene)
flower_04_11.addComponentOrReplace(gltfShape_43)
const transform_692 = new Transform({
  position: new Vector3(24.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flower_04_11.addComponentOrReplace(transform_692)
engine.addEntity(flower_04_11)

const plant_05_15 = new Entity()
plant_05_15.setParent(scene)
plant_05_15.addComponentOrReplace(gltfShape_42)
const transform_693 = new Transform({
  position: new Vector3(21.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_05_15.addComponentOrReplace(transform_693)
engine.addEntity(plant_05_15)

const first_form = new Entity()
first_form.setParent(scene)
const gltfShape_45 = new GLTFShape('models/1_form.glb')
first_form.addComponentOrReplace(gltfShape_45)
const transform_694 = new Transform({
  position: new Vector3(20.5, 2, 11.5),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
const first_form_animation = new AnimationState("Natraj|first_form_main_ismain")
sceneAnimator_1.addClip(first_form_animation)
first_form.addComponentOrReplace(sceneAnimator_1)
first_form.addComponent(new OnClick(() => {
  if(forms_unlocked[0])
  {
    first_form_animation.play()
    message.value = 'Sandhya Tandava'
  }
  else
    message.value = 'There is far away place, That has both light and dark side, its gravity pulls earth oceans'
  clearText()
  }))
first_form.addComponentOrReplace(transform_694)
engine.addEntity(first_form)

const second = new Entity()
second.setParent(scene)
const gltfShape_46 = new GLTFShape('models/Second.glb')
second.addComponentOrReplace(gltfShape_46)
const transform_695 = new Transform({
  position: new Vector3(17, -7, 14),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1.5773502691896255, 1.5773502691896255, 1.5773502691896255)
})
second.addComponentOrReplace(transform_695)
second.addComponentOrReplace(sceneAnimator_1)
const second_form_animation = new AnimationState("Natraj|Second")
sceneAnimator_1.addClip(second_form_animation)
second.addComponent(new OnClick(() => {
  if(forms_unlocked[1])
  {
    second_form_animation.play()
    message.value = ' Ananda Tandava'
  }
  else
    message.value = "I am here waiting for, all who are wise, But you need to find the first to win any prize..."
  clearText()
  }))
engine.addEntity(second)

const third_form = new Entity()
third_form.setParent(scene)
const gltfShape_47 = new GLTFShape('models/3_form.glb')
third_form.addComponentOrReplace(gltfShape_47)
const transform_696 = new Transform({
  position: new Vector3(12, 1.7, 24),
  rotation: new Quaternion(0, 0.6343932841636455, 0, 0.773010453362737),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
third_form.addComponentOrReplace(transform_696)
third_form.addComponentOrReplace(sceneAnimator_1)
const third_form_animation = new AnimationState("Natraj|Third_form")
// third_form_animation.looping = false
sceneAnimator_1.addClip(third_form_animation)
third_form.addComponent(new OnClick(() => {
  if(forms_unlocked[2])
  {
    third_form_animation.play()
    message.value = ' Shakti Tandava'
  }
  else
    message.value = "I all about life since I was first alive....I can rush like a river I can rool like a wave..."
  clearText()
}))
engine.addEntity(third_form)

const fourth_form = new Entity()
fourth_form.setParent(scene)
const gltfShape_48 = new GLTFShape('models/4_form.glb')
fourth_form.addComponentOrReplace(gltfShape_48)
const transform_697 = new Transform({
  position: new Vector3(12.5, 2.4, 32),
  rotation: new Quaternion(0, 0.7730104533627369, 0, 0.6343932841636456),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fourth_form.addComponentOrReplace(transform_697)
fourth_form.addComponentOrReplace(sceneAnimator_1)
const fourth_form_animation = new AnimationState("Natraj|Fourth")
// fourth_form_animation.looping = false
sceneAnimator_1.addClip(fourth_form_animation)
fourth_form.addComponent(new OnClick(() => {
  fourth_form_animation.play()
  message.value = ' Tripura Tandava'
  clearText()
}))
engine.addEntity(fourth_form)

const fifth_form = new Entity()
fifth_form.setParent(scene)
const gltfShape_49 = new GLTFShape('models/5_form.glb')
fifth_form.addComponentOrReplace(gltfShape_49)
const transform_698 = new Transform({
  position: new Vector3(18, -4, 42),
  rotation: new Quaternion(0, 0.9238795325112866, 0, 0.38268343236508984),
  scale: new Vector3(1.577350269189626, 1.577350269189626, 1.577350269189626)
})
fifth_form.addComponentOrReplace(transform_698)
fifth_form.addComponentOrReplace(sceneAnimator_1)
const fifth_form_animation = new AnimationState("Natraj|NatrajAction_fifth")
// fifth_form_animation.looping = false
sceneAnimator_1.addClip(fifth_form_animation)
fifth_form.addComponent(new OnClick(() => {
  fifth_form_animation.play()
  message.value = ' Sati and Shiva Tandava'
  clearText()
}))
engine.addEntity(fifth_form)

const sixth_form = new Entity()
sixth_form.setParent(scene)
const gltfShape_50 = new GLTFShape('models/6_form.glb')
sixth_form.addComponentOrReplace(gltfShape_50)
const transform_699 = new Transform({
  position: new Vector3(27, -4, 47.5),
  rotation: new Quaternion(0, 0.9807852804032304, 0, 0.19509032201612833),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
sixth_form.addComponentOrReplace(transform_699)
sixth_form.addComponentOrReplace(sceneAnimator_1)
const sixth_form_animation = new AnimationState("Natraj|Sixth_main")
// sixth_form_animation.looping = false
sceneAnimator_1.addClip(sixth_form_animation)
sixth_form.addComponent(new OnClick(() => {
  sixth_form_animation.play()
  message.value = ' Ardhanaari Tandava'
  clearText()
}))
engine.addEntity(sixth_form)

const first_form_2 = new Entity()
first_form_2.setParent(scene)
first_form_2.addComponentOrReplace(gltfShape_45)
const transform_700 = new Transform({
  position: new Vector3(42, 2, 9),
  rotation: new Quaternion(0, -0.19509032201612828, 0, 0.9807852804032305),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
first_form_2.addComponentOrReplace(transform_700)
first_form_2.addComponentOrReplace(sceneAnimator_2)
const first_form_animation_2 = new AnimationState("Natraj|first_form_main_ismain")
// first_form_animation_2.looping = false
sceneAnimator_2.addClip(first_form_animation_2)
first_form_2.addComponent(new OnClick(() => {
  if(forms_unlocked[0])
  {
    first_form_animation_2.play()
    message.value = 'Sandhya Tandava'
  }
  else
    message.value = 'There is far away place, That has both light and dark side, its gravity pulls earth oceans'  
  clearText()
}))

engine.addEntity(first_form_2)

const second_2 = new Entity()
second_2.setParent(scene)
second_2.addComponentOrReplace(gltfShape_46)
const transform_701 = new Transform({
  position: new Vector3(48, -8.7, 11.5),
  rotation: new Quaternion(0, -0.29028467725446233, 0, 0.9569403357322088),
  scale: new Vector3(1.8660254037844384, 1.8660254037844384, 1.8660254037844384)
})
second_2.addComponentOrReplace(transform_701)
second_2.addComponentOrReplace(sceneAnimator_2)
const second_form_animation_2 = new AnimationState("Natraj|Second")
// second_form_animation_2.looping = false
sceneAnimator_2.addClip(second_form_animation_2)
second_2.addComponent(new OnClick(() => {
  if(forms_unlocked[1])
  {
    second_form_animation_2.play()
    message.value = ' Ananda Tandava'
  }
  else
    message.value = "I am here waiting for, all who are wise, But you need to find the first to win any prize..."
  clearText()
}))
engine.addEntity(second_2)

const third_form_2 = new Entity()
third_form_2.setParent(scene)
third_form_2.addComponentOrReplace(gltfShape_47)
const transform_702 = new Transform({
  position: new Vector3(52.5, 1.8, 21.5),
  rotation: new Quaternion(0, -0.5555702330196023, 0, 0.8314696123025452),
  scale: new Vector3(1.5773502691896255, 1.5773502691896255, 1.5773502691896255)
})
third_form_2.addComponentOrReplace(transform_702)
third_form_2.addComponentOrReplace(sceneAnimator_2)
const third_form_animation_2 = new AnimationState("Natraj|Third_form")
// third_form_animation_2.looping = false
sceneAnimator_2.addClip(third_form_animation_2)
third_form_2.addComponent(new OnClick(() => {
  if(forms_unlocked[2])
  {
    third_form_animation_2.play()
    message.value = ' Shakti Tandava'
  }
  else
    message.value = "I all about life since I was first alive....I can rush like a river I can rool like a wave..."
  clearText()
}))
engine.addEntity(third_form_2)

const fourth_form_2 = new Entity()
fourth_form_2.setParent(scene)
fourth_form_2.addComponentOrReplace(gltfShape_48)
const transform_703 = new Transform({
  position: new Vector3(55.5, 2.2, 31),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: new Vector3(1.8660254037844386, 1.8660254037844386, 1.8660254037844386)
})
fourth_form_2.addComponentOrReplace(transform_703)
fourth_form_2.addComponentOrReplace(sceneAnimator_2)
const fourth_form_animation_2 = new AnimationState("Natraj|Fourth")
// fourth_form_animation_2.looping = false
sceneAnimator_2.addClip(fourth_form_animation_2)
fourth_form_2.addComponent(new OnClick(() => {
  fourth_form_animation_2.play()
  message.value = ' Tripura Tandava'
  clearText()
}))
engine.addEntity(fourth_form_2)

const fifth_form_2 = new Entity()
fifth_form_2.setParent(scene)
fifth_form_2.addComponentOrReplace(gltfShape_49)
const transform_704 = new Transform({
  position: new Vector3(49.5, -4, 41),
  rotation: new Quaternion(0, -0.881921264348355, 0, 0.4713967368259978),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fifth_form_2.addComponentOrReplace(transform_704)
fifth_form_2.addComponentOrReplace(sceneAnimator_2)
const fifth_form_animation_2 = new AnimationState("Natraj|NatrajAction_fifth")
// fifth_form_animation_2.looping = false
sceneAnimator_2.addClip(fifth_form_animation_2)
fifth_form_2.addComponent(new OnClick(() => {
  fifth_form_animation_2.play()
  message.value = ' Sati and Shiva Tandava'
  clearText()
}))
engine.addEntity(fifth_form_2)

const six_form_2 = new Entity()
six_form_2.setParent(scene)
six_form_2.addComponentOrReplace(gltfShape_50)
const transform_705 = new Transform({
  position: new Vector3(42, -4, 47),
  rotation: new Quaternion(0, -0.9807852804032308, 0, 0.19509032201612864),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
six_form_2.addComponentOrReplace(transform_705)

six_form_2.addComponentOrReplace(sceneAnimator_2)
const sixth_form_animation_2 = new AnimationState("Natraj|Sixth_main")
// sixth_form_animation_2.looping = false
sceneAnimator_2.addClip(sixth_form_animation_2)

six_form_2.addComponent(new OnClick(() => {
  sixth_form_animation_2.play()
  message.value = ' Ardhanaari Tandava'
  clearText()
}))

engine.addEntity(six_form_2)

//----------------------------------------
// uI work

// Create screenspace component
const canvas = new UICanvas()

const message = new UIText(canvas)
message.value = 'Explore the shivalay and achive nirvana...'
message.fontSize = 30
message.width = 400
message.height = 50
message.vAlign = 'bottom'
message.color = new Color4(255,215,0,1)
message.textWrapping = true

function clearText() {
  let timeRemaning = 6
  let entitty = new Entity()
  engine.addEntity(entitty)
  entitty.addComponentOrReplace(new utils.Interval(1000, (): void => {
    timeRemaning--
    if(timeRemaning < 0)
    {
      message.value = ''
      engine.removeEntity(entitty)
      return
    }
  }))
}

// Shop Work

const shivling_for_sale = new Entity()
shivling_for_sale.setParent(scene)
const shivling_for_sale_shape = new GLTFShape("models/For_Sale/small_shiv.glb")
shivling_for_sale.addComponentOrReplace(shivling_for_sale_shape)
const shivling_for_sale_transform = new Transform({
  position: new Vector3(57, 1.5, 22.8),
  scale: new Vector3(5,5,5),
  rotation: Quaternion.Euler(0,270,0)
})
shivling_for_sale.addComponentOrReplace(shivling_for_sale_transform)
engine.addEntity(shivling_for_sale)