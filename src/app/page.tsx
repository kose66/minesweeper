'use client';

import { useState } from 'react';
import styles from './page.module.css';

const down = (n: number) => {
  console.log(n);
  if (n === 0) {
    return;
  } else {
    return down(n - 1);
  }
};
down(10);

const sum1 = (n: number): number => {
  if (n === 0) {
    return n;
  } else {
    return sum1(n - 1) + n;
  }
};
console.log(sum1(10));

const sum2 = (m: number, n: number): number => {
  if (m === n) {
    return m;
  } else {
    return sum2(m, n - 1) + n;
  }
};
console.log(sum2(3, 10));

const sum3 = (m: number, n: number): number => {
  return ((n - m + 1) / 2) * (m + n);
};
console.log(sum3(4, 10));

export default function Home() {
  const [sampleCounter, setSampleCounter] = useState(0);
  const [numbers, setNu] = useState([0, 0, 0, 0, 0]);

  const clickHandler = () => {
    setSampleCounter((sampleCounter + 1) % 14);
    console.log(sampleCounter);
    console.log(numbers);
    const newNumbers = structuredClone(numbers);
    newNumbers[sampleCounter % 5] += 1;
    setNu(newNumbers);
    const calcTotal = (arr: number[]) => {
      let total = 0;
      for (let i = 0; i <= 4; i++) {
        total += arr[i];
      }
      return total;
    };
    const total = calcTotal(numbers);
    console.log(total);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => clickHandler()}>クリック</button>

      <div
        className={styles.sampleCell}
        style={{ backgroundPosition: `${String(-30 * sampleCounter)}px` }}
      />
    </div>
  );
}
