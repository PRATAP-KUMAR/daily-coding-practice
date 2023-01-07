function adding(n) {
    if (n <= 1) {
      return n;
    }
    return n + adding(n - 1);
  }

console.log(adding(10))
