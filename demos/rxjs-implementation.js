function map(transformFn) {
  const inputObservable = this;
  const outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function (x) {
        const y = transformFn(x);
        outputObserver.next(y);
      },
      error: (e) => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}
function filter(conditionFn) {
  const inputObservable = this;
  const outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function (x) {
        if (conditionFn(x)) {
          outputObserver.next(x);
        }
      },
      error: (e) => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}
function createObservable(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter,
  };
}
const observable = createObservable(function subscribe(ob) {
  [10, 20, 30].forEach(ob.next);
  ob.complete();
});

const observer = {
  next: function next(data) {
    console.log(data);
  },
  error: function error(err) {
    console.log("error", err);
  },
  complete: function complete() {
    console.log("done");
  },
};

observable
  // .map(x => x / 10)
  // .filter(x => x !== 2)
  .subscribe(observer);
