const Flow = require('./flow')

const asyncRun = x => {
  return next => {
    setTimeout(() => {
      console.log(x);
      next();
    }, 1000);
  };
};

const rootFlow = new Flow();
"abcdefg".split("").map(x => asyncRun(x)).forEach(f => {
rootFlow.use(f);
})

rootFlow.run();
