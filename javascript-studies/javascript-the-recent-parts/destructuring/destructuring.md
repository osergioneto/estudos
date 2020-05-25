# Destructuring

Resumo: TODO

## Array Destructuring

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

Reassign without temp variable

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

## Object Destructuring

```javascript
function data() {
  return { a: 1, b: 2, c: 3, d: 4}
}

// Without Destructuring
const tmp = data();
const first = tmp.a !== undefined ? tmp.a : 42;
const second = tmp.b;

// With Destructuring
const { 
  a: first = 42 , 
  b: second,
  ...third 
} = data();
```

### Destructuring Object Parameters

```javascript
// Without Destructuring
function data(tmp = {}) {
  const {
    a,
    b
  } = tmp;
  // ,,,
}

// With Destructuring
function data({
  a,
  b
} = {
  // ...
})

```