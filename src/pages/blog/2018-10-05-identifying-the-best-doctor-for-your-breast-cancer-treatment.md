---
templateKey: article-template
title: ReactJS | Introduction to JSX
date: 2018-10-05T07:50:25.389Z
description: ''
tags:
  - doctor
  - cancer
coverImage: /assets/screen-shot-2018-07-08-at-8.53.52-pm.png
---
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. But instead of using regular JavaScript, React code should be written in something called JSX.

Let us see a sample JSX code:

```
var ele = <h1>This is sample JSX</h1>;
```

The above code snippet somewhat looks like HTML and it also uses a JavaScript-like variable but is neither of HTML or JavaScript, it is JSX. JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. We will learn about rendering and DOM in next article in details.

## Why JSX?

* It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.
* It makes easier for us to create templates.
* Instead of separating the markup and logic in separated files, React uses components for this purpose. We will learn about components in details in further articles.



## Using JavaScript expressions in JSX



In React we are allowed to use normal JavaScript expressions with JSX. To embed any javascript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}. Consider the below program, written in the index.js file:



```
import React from 'react'; import ReactDOM from 'react-dom'; var name = "Learner";   var element = <h1>Hello, { name }.Welcome to GeeksforGeeks.< /h1>; ReactDOM.render(     element,      document.getElementById("root") ); 
```



In the above program we have embeded the javascript expression var name = “Learner”; in our JSX code. There are few lines at the top used to import some React APIs which will be explained in further articles. We embed use any javascript expression in JSX by wrapping them in curly braces excepts if-else statements. But we can use conditional statements instead of if-else statements in JSX. Below is the example where conditional expressing is embedded in JSX:



```
import React from 'react'; 
```

```
import ReactDOM from 'react-dom';   
```

```
var i = 1; 
```

```
  
```

```
const element = <h1>{ (i == 1) ? 'Hello World!' : 'False!' } < /h1>; 
```

```
   
```

```
ReactDOM.render( 
```

```
    element,  
```

```
    document.getElementById("root") 
```

```
); 
```



In the above example, the variable i is checked if for the value 1. As it is equals to 1 so the string ‘Hello World!’ is returned to the JSX code. If we modify the value of the variable i then the string ‘False’ will be returned.



## **Attributes in JSX**

JSX allows us to use attributes with the HTML elements just like we do with normal HTML. But instead of the normal naming convention of HTML, JSX uses camelcase convention for attributes. For example, class in HTML becomes className in JSX. The main reason behind this is that some of the attribute names in HTML like ‘class’ are reserved keywords in JavaScripts. So, in order to avoid this problem, JSX uses the camel case naming convention for attributes. We can also use custom attributes in JSX. For custom attributes, the names of such attributes should be prefixed by data-. In the below example, we have used a custom attribute with name data-sampleAttribute for the <h2> tag.
