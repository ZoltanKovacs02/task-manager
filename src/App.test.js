const puppeteer = require('puppeteer');

//import { render, screen } from '@testing-library/react';
//import App from './App';
//import { useState } from "react";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const DeleteTask=require('./components/DeleteTask');
// test('deleteTask', () => {
//     const [tasks, setTasks] = useState([
//         { desc: "Learn React", id: 1, date: "2021-01-03", status: "Complete" },
//     ]);
//     const id = 1;
//     DeleteTask([id, tasks, setTasks]);
//     expect(tasks).toEqual([{}]);
// });

// import {isEmpty} from './App';
// test ('sdfa',()=>{
//   let result=isEmpty("");
//   expect(result).toBeTruthy();

// })
describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.App-title');

    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('Task manage');

    browser.close();
  }, 16000);
});