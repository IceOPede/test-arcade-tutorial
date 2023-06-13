
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Sprites {
    /**
     * TODO: describe your function here
     * @param sprite to add acceleration
     * @param ax 
     * @param ay
     */
    //% block
    export function setAcceleration(sprite: Sprite, ax: number, ay: number): void {
        sprite.ax = ax;
        sprite.ay = ay;
    }
}