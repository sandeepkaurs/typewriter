const sentence = "hello there from lighthouse labs";

let waitTime = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, waitTime);
  waitTime += 50;
};

