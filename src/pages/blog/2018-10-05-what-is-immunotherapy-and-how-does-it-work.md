---
templateKey: article-template
title: What is Kotlin? The Java alternative explained
date: 2018-11-10T07:51:48.301Z
description: >-
  Kotlin offers big advantages over Java for JVM and Android development, and
  plays nicely with Java in the same projects. Why not give it a try?
tags:
  - cancer
coverImage: /assets/kotlin.png
---
Kotlin is a general purpose, open source, statically typed “pragmatic” programming language for the JVM and Android that combines object-oriented and functional programming features. It is focused on interoperability, safety, clarity, and tooling support. Versions of Kotlin for JavaScript (ECMAScript 5.1) and native code (using LLVM) are in the works.



Kotlin originated at JetBrains, the company behind IntelliJ IDEA, in 2010, and has been open source since 2012. The Kotlin team currently has more than 20 full-time members from JetBrains, and the Kotlin project on GitHub has about 100 contributors. JetBrains uses Kotlin in many of its products including its flagship IntelliJ IDEA.

```
StringBuilder sb = new StringBuilder();
```

in Kotlin becomes

```
val sb = StringBuilder()
```

You can see that functions are defined with the fun keyword, and that semicolons are now optional when newlines are present. The val keyword declares a read-only property or local variable. Similarly, the var keyword declares a mutable property or local variable.



Nevertheless, Kotlin is strongly typed. The val and var keywords can be used only when the type can be inferred. Otherwise you need to declare the type. Type inference seems to be improving with each release of Kotlin.



Have a look at the function declaration near the top of both panes. The return type in Java precedes the prototype, but in Kotlin it succeeds the prototype, demarcated with a colon as in Pascal.

It is not obvious from this example, but Kotlin has relaxed Java’s requirement that functions be class members. In Kotlin, functions may be declared at top level in a file, locally inside other functions, as a member function inside a class or object, and as an extension function. Extension functions provide the C#-like ability to extend a class with new functionality without having to inherit from the class or use any type of design pattern such as Decorator.
