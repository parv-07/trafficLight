class TrafficLight {
  light;
  start;
  break;
  constructor() {
    this.light = 'off';
    //this.abc = 'kvdjfkld';
    this.start = false;
    this.break = false;
  }

  get getLight() {
    return console.log(`The light is ${this.light.toUpperCase()}`);
  }
  /**
   * @param {string} light
   */
  set setLight(light) {
    this.light = light;
  }
  defaultAnswer() {
    console.log(
      `cannot turn into this because the light is ${this.light.toUpperCase()} now`
    );
  }

  startTrafficLight() {
    if (this.light === 'off') {
      this.start = true;
      // this.light = 'red';
      console.log('The TrafficLight is started.....');
      // this.getLight();
      // console.log(this.light);
    } else {
      this.start = false;
      console.log('The traffic light is running and you have stopped it.');
    }
  }
  stop() {
    if (!this.start) {
      return console.log('please start.....');
    }
    if (this.break) {
      return console.log('The light is under maintaince');
    }
    if (this.start) {
      this.light = 'red';
      // setLight('red');
      this.getLight;
    } else {
      this.defaultAnswer;
    }
  }
  goTl() {
    if (!this.start) {
      return console.log('please start');
    }
    if (this.break) {
      return console.log('The TrafficLIght is under Maintaince');
    }
    if (this.light === 'red') {
      this.light = 'green';
      this.getLight;
    } else {
      console.log(
        `cannot turn into this because the light is ${this.light.toUpperCase()} now`
      );
      //console.log(this.light);
    }
  }
  slowTl() {
    if (!this.start) {
      return console.log('please start....');
    }
    if (this.break) {
      return console.log('The trafficLight is under maintaince ');
    }
    if (this.light === 'green') {
      this.light = 'yellow';
      this.getLight;
    } else {
      console.log(
        `cannot turn into this because the light is ${this.light.toUpperCase()} now`
      );
    }
  }
  tBreak() {
    if (!this.start) {
      return console.log('please start the TrafficLight');
    }
    if (this.break) {
      this.break = false;
    } else {
      this.break = true;
      console.log(this.break);
      console.log('The light is under maintainance');
    }
  }
  tResume() {
    if (this.break) {
      console.log('trafficLight has resume ');
      this.light = 'red';
      this.break = false;
      console.log(this.break);
    } else {
      console.log('TrafficLight is working fine!!');
    }
  }
}

const T = new TrafficLight();
// T.tResume();
// T.startTrafficLight();
// T.goTl();
// T.tBreak();
// T.stop();
// T.stop();
// T.slowTl();
// T.goTl();
function handleTrafficRequest(input) {
  var command = input.trim().toLowerCase();

  switch (command) {
    case 'start':
      T.startTrafficLight();
      break;
    case 'stop':
      T.stop();
      break;
    case 'go':
      T.goTl();
      break;
    case 'slow':
      T.slowTl();
      break;
    case 'break':
      T.tBreak();
      break;
    case 'resume':
      T.tResume();
      break;
    case 'exit':
      console.log('exiting...');
      process.exit(0);
    default:
      console.log(
        'Ivalid command :Available commands are START, STOP , GO, SLOW, BREAK, Resume'
      );
  }
}

const readline = require('readline');
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// read.question('what you want Traffic light to do ');
function parv() {
  read.question('What you want TrafficLight to do? \n', (name) => {
    handleTrafficRequest(name);
    if (name.trim().toLowerCase !== 'exit') {
      parv();
    } else {
      read.close();
    }
  });
}

parv();
