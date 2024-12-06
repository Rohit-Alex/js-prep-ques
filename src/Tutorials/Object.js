/*
  <------ Different ways to create objects ------->

  i> object literals.
      e.g. const obj = {key: 'value'}
  
  ii> using new Object.
      e.g. const obj = new Object({ key: 'value' })
  
  iii> using construction function
  iv> using classes
*/

// Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target); // true

// Object.defineProperty
const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

object1.property1 = 77;

// Object.defineProperties
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42

const dummyObj = {
  number: 2,
  string: "Hey there!",
  boolean: true,
  array: [2, 4, 1, "Amane"],
  myName() {
    console.log("Amane here.");
  },
  obj: {
    nestedKey: 1,
  },
};

const obj = {
  name: "Amane",
  surname: "Ubuyashiki",
  address: {
    city: "Vadodara",
  },
};
// When trying to access any non existing property then we get undefined

const fun = () => "surname";
const expensiveCal = "name";
// Dot notation or bracket

// Use bracket notation in case when key is dynamic.
console.log(obj["name"]);
console.log(obj[expensiveCal]);
console.log(obj.surname);
console.log(obj[fun()]);

// Traversal using for in
for (const key in obj) {
  console.log(`Key is ${key} and value is ${obj[key]}`);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Traversal using for each. However, forEach can only be applied with arrays
Object.keys(obj).forEach((key) => {
  console.log(`Key is ${key} and value is ${obj[key]}`);
});

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

/*
    A: mouse.bird.size is not valid => undefined.size => Error (cannot read size of undefined)
    B: mouse[bird.size] is not valid => mouse['small'] => mouse.small => true
    C: mouse[bird["size"]] is not valid => mouse[bird.size] => mouse.small => true
*/

/*
    Format of value returned from Object.entries
    Array of array where each individual item represent key(1st value) and value(2nd value)
*/

/*
  <------- Check if a particulat key/property exists in an object? ----------->
  Available options: "in" / hasOwnProperty / Reflect.has

  Difference b/w "in" operator, hasOwnProperty and Reflect.has

  i> 'age' in obj => checks for specified property existance in an object or its prototype chain. It returns a boolean value (true or false) indicating whether the property is found.
  ii> hasOwnProperty checks for the presence of a property in an object and its prototype chain, i.e. properties defined directly and those inherited from its prototype chain.
      However, if the property is found directly on the object (not inherited), hasOwnProperty returns true; otherwise, it returns false.
  iii> Reflect.has only checks for the property in the object itself and also the prototype chain. Similar to "in" keyword. It's a static method
*/

const checkKeyInObj = {
  Ubuyashiki: "Your Grace",
};
console.log("Ubuyashiki" in checkKeyInObj); // true
console.log(Reflect.has(checkKeyInObj, "Ubuyashiki")); // true
console.log(checkKeyInObj.hasOwnProperty("Ubuyashiki")); // true

console.log("toString" in checkKeyInObj); // true As toString is an inbuilt method present in Object
console.log(Reflect.has(checkKeyInObj, "toString")); // true
console.log(checkKeyInObj.hasOwnProperty("toString")); // false

// _Note_: hasOwn property has been introduced as replacement of hasOwnProperty

const arr1 = [
  ["name", "Amane"],
  ["surname", "Ubuyashiki"],
  ["bf", "xyz"],
];

console.log(Object.fromEntries(arr1));

/*
  <----------- Object using constructor function ----------->

  Mainly used if we want make object with same properties and its repetitive
*/
const pc1 = {
  processor: "Intel Core i9",
  gpu: "RTX 4080",
  ram: 32,
  extendRam: function (extendBy) {
    this.ram += extendBy;
  },
};

const pc2 = {
  processor: "AMD Ryzen 9",
  gpu: "Radeon 890M",
  ram: 32,
  extendRam: function (extendBy) {
    this.ram += extendBy;
  },
};

console.log(pc1.processor);
console.log(pc1.extendRam(16));

console.log(pc2.processor);
console.log(pc2.extendRam(8));

// Object creation using constructor function. (More scalable)

function PC(processor, gpu, ram) {
  this.processor = processor;
  this.gpu = gpu;
  this.ram = ram;
  this.extendRam = function (extendBy) {
    this.ram += extendBy;
  };
}

const pc11 = new PC("Intel Core i9", "RTX 4080", 32);
const pc22 = new Lovers("AMD Ryzen 9", "Radeon 890M", 32);

console.log(pc11.processor);
console.log(pc11.ram);
console.log(pc11.extendRam(16));
console.log(pc11.ram);

console.log(pc22.processor);
console.log(pc22.ram);
console.log(pc22.extendRam(32));
console.log(pc22.ram);

// Ye scalable hai aur utna code bhi nhi likhna padega.

/*
  <-------------- Freeze vs Seal ----------->

    * 1st case:
    Modify existing property, addition or removal dono allowed nhi hai. Think it as of ===
    * Object.freeze is used to prevent the modification of an object’s properties and the addition/removal of new properties. 
    * This means that once an object has been frozen, it becomes completely immutable and cannot be changed in any way.
    *  it’s only doing a shallow freeze, which means that it will only freeze the immediate properties of the object itself.
    
    *2nd
    Modify existing property but can't add or remove any property. Think it as of ==
    * Object.seal() method prevents the addition and deletion of properties from an object, but it does not prevent the modification of the values of existing properties.
    
    Remeber trick: Freeze ka spelling bada hai mtlb jaada kaam kar rha. means add, delete aur modify sab block
                   seal chota word toh kam kaam kar rha. Bus modify kar sakte. add aur delete nhi. 
*/

const frozenObject = Object.freeze(obj);
// Note: If we attempt to modify/delete any of its properties or add new properties will have no effect. It won't throw any error.

frozenObject.married = false; // Property cannnot be altered
frozenObject.age = 25; // No new property can be added
delete frozenObject.name; // Returns false. Property cannot be deleted
frozenObject.address.city = "Las Vagas"; // Successful as it is one level deep
//method to check whether the object is frozen or not. It returns the boolean value and returns true if the object is frozen otherwise false.

Object.isFrozen(frozenObject); // === true

Object.seal(obj);

obj.name = "Prateek"; // allowed
obj.age = 17; // not allowed
delete obj.married; // returns false as it can't be deleted

/*
    Question: If Object.freeze does shallow freeze then how can we make it deep freeze?

    Ans: 
        const deepFreeze = (obj) => {
          for (const key in obj) {
              if (typeof obj[key] === "object") deepFreeze(obj[key]);
          }
          return Object.freeze(obj);
        };
        deepFreeze(obj);
*/
