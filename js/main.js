{
  'use strict';

  // const scores = [70, 80, 75, 95];
  // const allScores = [85, 90, ...scores];
  // console.log(scores);
  // console.log(allScores);

  // unshift, push, shift, pop
  // scores.unshift(10, 20);
  // scores.push(10, 20);
  // scores.shift();
  // scores.pop();
  // console.log(scores);

  // splice
  // scores.splice(1, 2, 10, 30);
  // console.log(scores);

  // 分割代入
  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // forEach
  // scores.forEach((score, index) => {
  //   console.log(`Score[${index}] is ${score}.`);
  // });

  // map
  // const newScores = scores.map((score) => {
  //   return score + 100;
  // });
  // const newScores = scores.map(score => score + 100);
  // console.log(newScores);

  // filter
  // const scoresEvenNumbers = scores.filter((score) => {
  //   if (score % 2 === 0) {
  //     return true
  //   } else {
  //     return false;
  //   }
  // });
  // const scoresEvenNumbers = scores.filter(score => score % 2 === 0);
  // console.log(scoresEvenNumbers);

  // object
  // const point = {
  //   x: 10,
  //   y: 20,
  // };
  // console.log(point);
  // console.log(point.x);
  // console.log(point['x']);
  // point.x = 100;
  // point['x'] = 100;
  // point.z = 100;
  // point['z'] = 100;
  // delete point.y;
  // delete point['y'];
  // console.log(point);

  // const keys = Object.keys(point);
  // keys.forEach((key) => {
  //   console.log(`key is ${key}, value is ${point[key]}`);
  // });
  // const points = [
  //   { x: 10, y: 20 },
  //   { x: 30, y: 40 },
  //   { x: 50, y: 60 },
  // ];
  // console.log(points[1].y);

  // join & split
  // const d = [2020, 7, 15];
  // console.log(d.join('/'));
  // const t = '12:20:27';
  // console.log(t);
  // console.log(t.split(':'));
  // const [hour, min, sec] = t.split(':');
  // console.log(hour);
  // console.log(min);
  // console.log(sec);

  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach((score) => {
    sum += score;
  });
  const avg = sum / scores.length;
  console.log(avg); // 7.333333333333333
  console.log(Math.floor(avg)); // 7
  console.log(Math.ceil(avg)); // 8
  console.log(Math.round(avg)); // 7
  console.log(avg.toFixed(3)); // 7.333
  console.log(Math.random());
}
