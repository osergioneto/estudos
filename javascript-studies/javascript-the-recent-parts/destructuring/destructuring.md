# Destructuring

Resumo: TODO

```javascript
function data() {
  return [1, 2, 3, 4, 5]
}

// Without Destructuring
const temp = data();
const first = temp[0] !== undefined ? temp[0] : 10;
const second = temp[1]; 
const third = temp[2]; 
const rest = temp.slic(3)

// With Destructuring
const [
  first = 10,
  second,
  third
  ...rest
] = temp = data() || [];
```

```javascript
// Without Destructuring
let x = 10;
let y = 20;
const temp = x;
x = y;
y = temp;
// With Destructuring
[x, y] = [y, x]

```