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
    description: string[];
    image: string;
}

const portfolioItems: IPortfolioItem[] = [
    {
        "name": "Rough Tetris",
        "image": tetrisImage,
        "repositoryUrl": "https://github.com/fpellicero/rough-tetris",
        "publicUrl": "https://fpellicero.github.io/rough-tetris/",
        "description": [
            "A Tetris clone made in vanilla Typescript. The graphics are made with <a href='https://roughjs.com/' target='_blank'>rough.js</a>."
        ]
    },
    {
        "name": "React Bottom Drawer",
        "image": reactBottomDrawerImage,
        "repositoryUrl": "https://github.com/fpellicero/react-bottom-drawer",
        "publicUrl": "https://codesandbox.io/s/blissful-architecture-kuci5",
        "description": [
            "A React component to build friendly mobile dialog interactions"
        ],
    },
    {
        "name": "Pixel Piano",
        "image": pixelPianoImage,
        "repositoryUrl": "https://github.com/fpellicero/pixel-piano",
        "publicUrl": "https://fpellicero.github.io/pixel-piano",
        "description": [
            "A piano, implemented with Phaser 3 and Tonejs. Done mainly to practice some pixel art."
        ],
    },
    {
        "name": "Arkapong",
        "image": arkapongImage,
        "repositoryUrl": "https://github.com/fpellicero/arkapong",
        "publicUrl": "https://fpellicero.github.io/arkapong/",
        "description": [
            "Arkanoid and Pong game mashup, built using <a href='https://phaser.io/' target='_blank'>Phaser</a> and Typescript"
        ],
    },
    {
        "name": "Flappy Dragon",
        "image": flappyDragonImage,
        "repositoryUrl": "https://github.com/fpellicero/flappy_dragon",
        "publicUrl": "https://flappy-dragon.herokuapp.com",
        "description": [
            "The popular Flappy Bird game, just with different sprites. Built with <a href='https://phaser.io/' target='_blank'>Phaser</a> and Javascript"
        ],
    },
    {
        "name": "Untitled Game",
        "image": untitledGameImage,
        "repositoryUrl": "",
        "publicUrl": "https://javascript-arcade-game.herokuapp.com/",
        "description": [
            "A simple top-down shooter built in plain old ES5 and no framework."
        ],
    }
]

export default portfolioItems;