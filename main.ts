sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 200)
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    laserBeam = sprites.createProjectileFromSprite(img`
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, lasership, 100, 0)
    animation.runImageAnimation(
    laserBeam,
    [img`
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `,img`
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `,img`
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `,img`
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `],
    200,
    true
    )
    laserBeam.setKind(SpriteKind.Projectile)
})
info.onLifeZero(function () {
    game.splash("I GOT HIT!!", "NOOOO")
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.sayText("NOOOOOO!", 2000, true)
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
    info.changeLifeBy(1)
    lasership.sayText("i got him!", 2000, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        7 7 7 9 9 9 6 6 6 8 8 8 7 7 7 9 
        `, lasership, randint(50, 100), 0)
    laser2 = sprites.createProjectileFromSprite(img`
        2 2 2 3 3 3 b b b a a a c c c d 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, lasership, randint(50, 100), 0)
    laser1.setKind(SpriteKind.Projectile)
    laser2.setKind(SpriteKind.Projectile)
})
let enermy: Sprite = null
let laser2: Sprite = null
let laser1: Sprite = null
let laserBeam: Sprite = null
let lasership: Sprite = null
game.splash("this game is in hyperspace this is not in space", "it might confuse you")
music.playMelody("C5 B C5 A C5 G C5 F ", 300)
music.playMelody("C5 E C5 D C5 C C5 D ", 300)
game.showLongText("hello lasership dystroy about 20 enermys", DialogLayout.Full)
scroller.scrollBackgroundWithSpeed(-500, 0)
scene.setBackgroundImage(assets.image`hyperspace`)
lasership = sprites.create(img`
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 5 2 . . . . . . . 
    . . . . . 2 . 5 . 2 . . . . . . 
    . . . . 2 . . 5 . . 2 . . . . . 
    . . . 2 . . . 5 . . . 2 . . . . 
    . . 2 . . . . 5 . . . . 2 . . . 
    . 2 . . . . . 5 . . . . . 2 . . 
    2 4 4 4 4 4 4 1 4 4 4 4 4 4 2 . 
    . 2 . . . . . 5 . . . . . 2 . . 
    . . 2 . . . . 5 . . . . 2 . . . 
    . . . 2 . . . 5 . . . 2 . . . . 
    . . . . 2 . . 5 . . 2 . . . . . 
    . . . . . 2 . 5 . 2 . . . . . . 
    . . . . . . 2 5 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(lasership, 200, 200)
lasership.setStayInScreen(true)
animation.runImageAnimation(
lasership,
[img`
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 5 2 . . . . . . . 
    . . . . . 2 . 5 . 2 . . . . . . 
    . . . . 2 . . 5 . . 2 . . . . . 
    . . . 2 . . . 5 . . . 2 . . . . 
    . . 2 . . . . 5 . . . . 2 . . . 
    . 2 . . . . . 5 . . . . . 2 . . 
    2 4 4 4 4 4 4 1 4 4 4 4 4 4 2 . 
    . 2 . . . . . 5 . . . . . 2 . . 
    . . 2 . . . . 5 . . . . 2 . . . 
    . . . 2 . . . 5 . . . 2 . . . . 
    . . . . 2 . . 5 . . 2 . . . . . 
    . . . . . 2 . 5 . 2 . . . . . . 
    . . . . . . 2 5 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 a 3 . . . . . . . 
    . . . . . 3 . a . 3 . . . . . . 
    . . . . 3 . . a . . 3 . . . . . 
    . . . 3 . . . a . . . 3 . . . . 
    . . 3 . . . . a . . . . 3 . . . 
    . 3 . . . . . a . . . . . 3 . . 
    3 c c c c c c b c c c c c c 3 . 
    . 3 . . . . . a . . . . . 3 . . 
    . . 3 . . . . a . . . . 3 . . . 
    . . . 3 . . . a . . . 3 . . . . 
    . . . . 3 . . a . . 3 . . . . . 
    . . . . . 3 . a . 3 . . . . . . 
    . . . . . . 3 a 3 . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . 9 . . . . . . . . 
    . . . . . . 9 6 9 . . . . . . . 
    . . . . . 9 . 6 . 9 . . . . . . 
    . . . . 9 . . 6 . . 9 . . . . . 
    . . . 9 . . . 6 . . . 9 . . . . 
    . . 9 . . . . 6 . . . . 9 . . . 
    . 9 . . . . . 6 . . . . . 9 . . 
    9 8 8 8 8 8 8 7 8 8 8 8 8 8 9 . 
    . 9 . . . . . 6 . . . . . 9 . . 
    . . 9 . . . . 6 . . . . 9 . . . 
    . . . 9 . . . 6 . . . 9 . . . . 
    . . . . 9 . . 6 . . 9 . . . . . 
    . . . . . 9 . 6 . 9 . . . . . . 
    . . . . . . 9 6 9 . . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . f . . . . . . . . 
    . . . . . . f 1 f . . . . . . . 
    . . . . . f . 1 . f . . . . . . 
    . . . . f . . 1 . . f . . . . . 
    . . . f . . . 1 . . . f . . . . 
    . . f . . . . 1 . . . . f . . . 
    . f . . . . . 1 . . . . . f . . 
    f 1 1 1 1 1 1 d 1 1 1 1 1 1 f . 
    . f . . . . . 1 . . . . . f . . 
    . . f . . . . 1 . . . . f . . . 
    . . . f . . . 1 . . . f . . . . 
    . . . . f . . 1 . . f . . . . . 
    . . . . . f . 1 . f . . . . . . 
    . . . . . . f 1 f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
1.2,
true
)
info.setLife(5)
info.setScore(0)
game.onUpdateInterval(200, function () {
    enermy = sprites.createProjectileFromSide(img`
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        2 4 5 7 6 8 c a b 3 d 1 e f e 1 
        `, -100, 0)
    enermy.setKind(SpriteKind.Enemy)
    enermy.setPosition(158, randint(1, 150))
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("F A G F B A G A ", 120)
    music.playMelody("E G F E A G F G ", 120)
    music.playMelody("D F E D G F E F ", 120)
    music.playMelody("C E D C F E D E ", 120)
    for (let index = 0; index < 4; index++) {
        music.playMelody("C D E F G A B C5 ", 500)
    }
})
forever(function () {
    if (info.score() == 100) {
        game.splash("I DYSTROYED ALL OF THEM!!!")
        game.over(true, effects.confetti)
    }
})
