// Убедитесь, что jsdom используется
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const fetchMock = require('jest-fetch-mock');

fetchMock.enableMocks();

const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
const { window } = new JSDOM(html);
global.document = window.document;
global.window = window;

const { appendNumber, setOperation, calculate } = require('./index');

beforeEach(() => {
    fetchMock.resetMocks();
});

test('appendNumber adds number to display', () => {
    document.body.innerHTML = '<input type="text" id="display" />';
    const display = document.getElementById('display');
    appendNumber(1);
    expect(display.value).toBe('1');
});

test('setOperation sets the correct operation', () => {
    document.body.innerHTML = '<input type="text" id="display" />';
    const display = document.getElementById('display');
    display.value = '5';
    setOperation('+');
    expect(display.value).toBe('');
});

test('calculate performs addition correctly', () => {
    document.body.innerHTML = '<input type="text" id="display" />';
    const display = document.getElementById('display');
    display.value = '5';
    setOperation('+');
    display.value = '3';
    
    fetchMock.mockResponseOnce(JSON.stringify('8'));
    
    //await calculate();

    //expect(display.value).toBe('8');
     calculate().then(() => {
         expect(display.value).toBe('8');
     });
});
