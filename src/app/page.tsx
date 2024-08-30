'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  
  const [input, setInput] = useState('<p class="foo"></p>');
  const [classNames, setClassNames] = useState([]);

  async function findClassNamesInHTML(event: React.FormEvent) {
    const response = await fetch('/api/html-rewriter');
    const data = await response.json()
    if (data && data.length) {
      setClassNames(await response.json());
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const elements = event.currentTarget.elements as any;
    findClassNamesInHTML(elements.input_html.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>NextJS with HTMLRewriter</h1>
        <p>Enter some HTML, and this app will find all the class names.</p>
        <h2>Input</h2>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
          <input name="input_html" type="text" defaultValue={input} onChange={(event) => setInput(event.currentTarget.value)} />
          <br />
          <button>Submit</button>
        </form>
        <h2>Output</h2>
        <ul>
          {classNames.map((className, c) => {
            return <li key={c}>{className}</li>
          })}
        </ul>
      </div>
    </main>
  );
}
