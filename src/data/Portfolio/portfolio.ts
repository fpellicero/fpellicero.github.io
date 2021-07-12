import tetrisImage from "./rough-tetris.png";
import reactBottomDrawerImage from "./react-bottom-drawer.png";
import pixelPianoImage from "./pixel-piano.png";
import arkapongImage from "./arkapong.png";
import flappyDragonImage from "./flappy-dragon.png";
import untitledGameImage from "./untitled-arcade-game.png";

export interface IPortfolioItem {
    name: string;
    publicUrl: string;
    repositoryUrl: string;
    description: {
        es: string[];
        en: string[];
    };
    image: string;
}

const portfolioItems: IPortfolioItem[] = [
    {
        "name": "Rough Tetris",
        "image": tetrisImage.src,
        "repositoryUrl": "https://github.com/fpellicero/rough-tetris",
        "publicUrl": "https://fpellicero.github.io/rough-tetris/",
        "description": {
            "en": [
                "A Tetris clone made in vanilla Typescript. The graphics are made with <a href='https://roughjs.com/' target='_blank'>rough.js</a>."
            ],
            "es": [
                "Un clon del tetris hecho en Typescript, sin framework. Los gráficos los he hecho con <a href='https://roughjs.com/' target='_blank'>rough.js</a>."
            ]
        }
    },
    {
        "name": "React Bottom Drawer",
        "image": reactBottomDrawerImage.src,
        "repositoryUrl": "https://github.com/fpellicero/react-bottom-drawer",
        "publicUrl": "https://codesandbox.io/s/blissful-architecture-kuci5",
        "description": {
            "en": [
                "A React component to build friendly mobile dialog interactions"
            ],
            "es": [
                "Un componente React para construir modales para móvil, que aparecen desde abajo."
            ]
        }
    },
    {
        "name": "Pixel Piano",
        "image": pixelPianoImage.src,
        "repositoryUrl": "https://github.com/fpellicero/pixel-piano",
        "publicUrl": "https://fpellicero.github.io/pixel-piano",
        "description": {
            "en": [
                "A piano, implemented with Phaser 3 and Tonejs. Done mainly to practice some pixel art."
            ],
            "es": [
                "¡Un piano! Implementado con Phaser 3 y ToneJS. Lo hice para tener una excusa para dibujar algo de pixel art."
            ]
        },
    },
    {
        "name": "Arkapong",
        "image": arkapongImage.src,
        "repositoryUrl": "https://github.com/fpellicero/arkapong",
        "publicUrl": "https://fpellicero.github.io/arkapong/",
        "description": {
            "en": [
                "Arkanoid and Pong game mashup, built using <a href='https://phaser.io/' target='_blank'>Phaser</a> and Typescript"
            ],
            "es": [
                "Una mezcla entre Pong y Arkanoid. Hecho con Phaser y Typescript."
            ]
        },
    },
    {
        "name": "Flappy Dragon",
        "image": flappyDragonImage.src,
        "repositoryUrl": "https://github.com/fpellicero/flappy_dragon",
        "publicUrl": "https://flappy-dragon.herokuapp.com",
        "description": {
            "en": [
                "The popular Flappy Bird game, just with different sprites. Built with <a href='https://phaser.io/' target='_blank'>Phaser</a> and Javascript"
            ],
            "es": [
                "Un clon del popular Flappy Bird. Hecho con Phaser y Javascript."
            ]
        },
    },
    {
        "name": "Untitled Game",
        "image": untitledGameImage.src,
        "repositoryUrl": "",
        "publicUrl": "https://javascript-arcade-game.herokuapp.com/",
        "description": {
            "en": [
                "A simple top-down shooter built in plain old ES5 and no framework."
            ],
            "es": [
                "Un sencillo juego de disparos con vista vertical. Hecho con Javascript (ES5) y sin frameworks."
            ]
        },
    }
]

export default portfolioItems;