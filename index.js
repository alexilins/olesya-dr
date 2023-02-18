// Import stylesheets
import './style.css';
import { Fireworks } from 'fireworks-js';

const canvas = document.getElementById('app');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const fireworks = new Fireworks(canvas, {
  brightness: {
    min: 30,
    max: 70,
  },
  explosion: 10,
  intensity: 10,
  gravity: 2,
  opacity: 0.1,
  particles: 100,
  // traceLength: 2,
  // rocketsPoint: {
  //   min: 33,
  //   max: 66,
  // },
  // lineWidth: {
  //   explosion: {
  //     min: 1,
  //     max: 5
  //   },
  //   trace: {
  //     min: 1,
  //     max: 2
  //   }
  // },
  // boundaries: {
  //   height: 0,
  //   width: 0,
  //   x: 50,
  //   y: 50,
  // },
});
fireworks.start();
