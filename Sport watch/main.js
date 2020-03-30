function SportWatch() {
  let duration = 0;
  let startTime;
  let endTime; oop
  let running;

  this.start = function () {
    if (running) console.error('stopwatch deja merge');
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) console.error('stopwatch nu a pornit');
    running = false;
    endTime = new Date();
    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
  };

  Object.defineProperty(this, 'duration', {
    get: function () { return duration; }
  })
}


const sw = new SportWatch();