# Game Tutorial

## Intro @showdialog

![test image](https://raw.githubusercontent.com/IceOPede/test-arcade-tutorial/master/docs/static/tutorials/img.png)

Test 2

## Draw background

Open the ``||scene:Scene||`` drawer and use ``||scene:set background image to test||``

Use sprite editor to select a background image

press **next** to continue

## Spawn Player

Open the ``||sprites:Sprites||`` drawer and use ``||sprites: create sprite of kind||`` to create a sprite with name *player*.
Again use the sprite editor to select a Player image

```typescript
scene.setBackgroundImage(img``)
// @highlight
let player = sprites.create(img``, SpriteKind.Player)
```

## Configure Player

Set Vertical acceleration to 300 units ``||variables(player):set player.ay to||``.
Keep player in screen ``||variables(player):set player.setStayInScreen to||``

```typescript
player.ay = 300
player.setStayInScreen(true)
```

## Controll Player

Open the ``||controller:Controller||`` drawer and use ``||controller:run code on anyButton button event||``
In the event we will move the player up ``||variables(player):set player.ay to||``

```typescript
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    player.vy = -100
})
```

## Spawn Obsticals

Spawn Obsticals

## Move Obsticals

Move Obsticals

## Game Over

Game Over

## Bonus

Bonus

## Add Score

Add Score

## Capture Score

Capture Score

## Update Score

Update Score

## Finsihed

Congratulations, you did it!
    