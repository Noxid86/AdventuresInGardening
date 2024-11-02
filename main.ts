namespace SpriteKind {
    export const hoe = SpriteKind.create()
    export const seedBag = SpriteKind.create()
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (equippedTool == "hoe") {
        if (tiles.tileAtLocationEquals(Farmer.tilemapLocation(), sprites.castle.tileGrass1)) {
            tiles.setTileAt(Farmer.tilemapLocation(), assets.tile`myTile2`)
        }
    } else if (equippedTool == "seedBag") {
        if (tiles.tileAtLocationEquals(Farmer.tilemapLocation(), assets.tile`myTile2`)) {
            tiles.setTileAt(Farmer.tilemapLocation(), assets.tile`myTile0`)
        }
    }
})

interface mapSave {
    name: string;
    width: number;
    height: number;
    tiles: Image[];
    saveTiles(): void;
    loadTiles(): void;
}

let gardenSave:mapSave = {
    name: "Garden",
    width: 16,
    height: 16, 
    tiles: [],
    saveTiles: function(){
        console.log('saving');
        for(let x = 0; x < gardenSave.width; x++){
            for (let y = 0; y < gardenSave.width; y++) {
                gardenSave.tiles.push(tiles.getTileAt(x, y))
            }

        }
    },
    loadTiles: function () {
        console.log('saving');
        let tileInc = 0;
        for (let x = 0; x < gardenSave.width; x++) {
            for (let y = 0; y < gardenSave.width; y++) {
                tiles.setTileAt(tiles.getTileLocation(x, y), gardenSave.tiles[tileInc])
                tileInc++
            }
        }
    }
}





sprites.onOverlap(SpriteKind.Player, SpriteKind.seedBag, function (sprite, otherSprite) {
    equippedTool = "seedBag"
    EquippedItem.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 . 6 . 6 . 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hoe, function (sprite, otherSprite) {
    equippedTool = "hoe"
    EquippedItem.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let equippedTool = ""
let EquippedItem: Sprite = null
let Farmer: Sprite = null
Farmer = sprites.create(img`
    ...bbccccccbb...
    ..bdddddddd1db..
    .bddbbbbbbbbddb.
    .cdb11111111bdc.
    .cbcbbbbbbbbcbc.
    .fbbd111111dbbf.
    .fcd11111111dcf.
    f6cdd111111ddc6f
    f66cbbbbbbbbcc6f
    fcbb33333333bbcf
    fbb3333333333bbf
    fbb3d111111d3bbf
    fbd1111111111dbf
    fdd1111111111ddf
    fdd1111111111ddf
    fdd1111111111ddf
    fdd1111111111ddf
    fdd11dbbbbd11ddf
    cdbbddddddddbbdf
    cbddddddddddddbc
    cddddddddddddddc
    .cccccccccccccc.
    .fbbfbbbbbbfbbf.
    ..ff........ff..
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(7)
Farmer = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
EquippedItem = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
EquippedItem.follow(Farmer)
EquippedItem.follow(Farmer)
let Hoe = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . b b b b b . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hoe)
tiles.placeOnTile(Hoe, tiles.getTileLocation(2, 2))
let SeedBagItem = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 . 6 . 6 . 6 . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.seedBag)
tiles.placeOnTile(SeedBagItem, tiles.getTileLocation(4, 2))
scene.cameraFollowSprite(Farmer)
controller.moveSprite(Farmer)
game.onUpdateInterval(5000, function () {

})


