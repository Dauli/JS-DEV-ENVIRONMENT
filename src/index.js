import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

// setting breakpoint for sourcemape to debug
//debugger;

console.log(`I would paye ${courseValue} for this awesame courseValue.`); //eslint-disable-line no-console
