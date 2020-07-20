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

  // const scores = [10, 3, 9];
  // let sum = 0;
  // scores.forEach((score) => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // console.log(avg); // 7.333333333333333
  // console.log(Math.floor(avg)); // 7
  // console.log(Math.ceil(avg)); // 8
  // console.log(Math.round(avg)); // 7
  // console.log(avg.toFixed(3)); // 7.333
  // console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min

  // console.log(Math.floor(Math.random() * 6) + 1);

  // const d = new Date();
  // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);
  // const d = new Date(2020, 7 - 1, 16);
  // d.setHours(12, 10, 20);
  // // d.setDate(32);
  // d.setDate(d.getDate() + 3);
  // console.log(d);

  // setInterval
  // let i = 0;
  // function showtime() {
  //   console.log(new Date());
  //   i++
  //   if (i > 3) {
  //     clearInterval(setIntervalId);
  //   }
  // }
  // const setIntervalId = setInterval(showtime, 1000);

  // 例外処理
  // const name = 5;
  // try {
  //   console.log(name.toUpperCase());
  // } catch (error) {
  //   console.log(error);
  // }
  // console.log('Finished!');

  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likes = 0;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likes}いいね`);
  //   }

  //   like() {
  //     this.likes++;
  //     this.show();
  //   }
  //   // 静的メソッド
  //   static showInfo() {
  //     console.log('Post class version 1');
  //   }
  // }
  // const posts = [
  //   new Post('JavaScriptを勉強中...'),
  //   new Post('Rubyを勉強中...'),
  // ];
  // posts[0].show();
  // posts[0].like();
  // posts[1].show();
  // Post.showInfo();

  document.getElementById('run0').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.textContent = 'Dotinstall';
    targetNode.textContent = targetNode.dataset.translation;
  });

  document.getElementById('run1').addEventListener('click', () => {
    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);
    // trueにすると、中の要素（text）まで複製できる。
    // falseにすると、からのli要素ができる。

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);
  });

  document.getElementById('submit').addEventListener('click', () => {
    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.textContent = text.value;

    document.getElementById('show-text').appendChild(li);
    text.value = ''
    text.focus();
  });
}
