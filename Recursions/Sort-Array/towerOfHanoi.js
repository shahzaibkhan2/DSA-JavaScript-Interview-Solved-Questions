const towerOfHanoi = (n, src, help, dest) => {
  if (n === 1) {
    console.log(`Transfer disk ${n} from ${src} to ${dest}`);
    return;
  }

  towerOfHanoi(n - 1, src, dest, help);
  console.log(`Transfer disk ${n} from ${src} to ${dest}`);
  towerOfHanoi(n - 1, help, src, dest);
};

towerOfHanoi(5, "Source", "Helper", "Destination");
