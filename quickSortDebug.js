  const quickSort = (arr) => {
    if (arr.length < 2) { return arr; }
    let pivot = arr[0];
    arr.shift();

    let left = quickSort(arr.filter(el => el <= pivot));
    let right = quickSort(arr.filter(el => el > pivot));
    return [...left, pivot, ...right];
  }

  let t1 = [];

  for (let i = 0; i <= 100; i++) {
    t1.push(Math.floor(Math.random() * 100));
  }

  let t2 = t1.slice();

  let qSort = quickSort(t1);
  let tSort = t2.sort((a,b) => a - b);
  let divergence = false;

  console.log('Quicksort:', qSort);
  console.log('TimSort:', tSort);

  for (let j = 0; j < t1.length; j++) {
    if (qSort[j] !== tSort[j]) {
      divergence = true;
    }
  }

  console.log(divergence);