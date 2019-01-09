---
templateKey: article-template
title: What is Android Jetpack?
date: 2018-10-05T07:53:12.063Z
description: >-
  Android Jetpack is a set of components, tools and guidance to make great
  Android apps. 
tags:
  - hospital
  - cancer
coverImage: /assets/im-not-doing-shit-today-600x337-1-.jpg
---
Android Jetpack is a set of components, tools and guidance to make great Android apps. The Android Jetpack components bring together the existing Support Library and Architecture Components and arranges them into four categories:

<INsert Image here>



Android Jetpack components are provided as “unbundled” libraries that are not part of the underlying Android platform. This means that you can adopt each component at your own speed, at your own time. When new Android Jetpack functionality is available, you can add it to your app, deploy your app to the Play Store and give users the new features all in a single day (if you’re quick)! The unbundled Android Jetpack libraries have all been moved into the new androidx.* namespace.



In addition, your app can run on various versions of the platform because Android Jetpack components are built to provide their functionality independent of any specific version, providing backwards compatibility.



Further, Android Jetpack is built around modern design practices like separation of concerns and testability as well as productivity features like Kotlin integration. This makes it far easier for you to build robust, high quality apps with less code. While the components of Android Jetpack are built to work together, e.g. lifecycle awareness and live data, you don’t have to use all of them — you can integrate the parts of Android Jetpack that solve your problems while keeping the parts of your app that are already working great.



## What’s New

Android Jetpack comes with five new components:

* WorkManager alpha release
* Navigation alpha release
* Paging stable release
* Slices alpha release
* Android KTX (Kotlin Extensions) alpha release



## WorkManager

The WorkMananager component is a powerful new library that provides a one-stop solution for constraint-based background jobs that need guaranteed execution, replacing the need to use things like jobs or SyncAdapters. WorkManager provides a simplified, modern API, the ability to work on devices with or without Google Play Services, the ability to create graphs of work, and the ability to query the state of your work. See more on the WorkManager component.



## Navigation

While activities are the system provided entry points into your app’s UI, their inflexibility when it comes to sharing data between each other and transitions has made them a less than ideal architecture for constructing your in-app navigation. So into GoogleIO18 introducing the Navigation component as a framework for structuring your in-app UI, with a focus on making a single-Activity app the preferred architecture. With out of the box support for Fragments, you get all of the Architecture Components benefits such as Lifecycle and ViewModel while allowing Navigation to handle the complexity of FragmentTransactions for you. Further, the Navigation component allows you to declare transitions, automatically builds the correct Up and Back behavior, includes full support for deep links, and provides helpers for connecting Navigation into the appropriate UI widgets, like the navigation drawer and bottom navigation. But that’s not all! The Navigation Editor in Android Studio 3.2 allows you to see and manage your navigation properties visually

## \
Paging

Data presented in an app can be large and costly to load, so it’s important to avoid downloading, creating, or presenting too much at once. The Paging component version 1.0.0 makes it easy to load and present large data sets with fast, infinite scrolling in your RecyclerView. It can load paged data from local storage, the network, or both, and lets you define how your content gets loaded. It works out of the box with Room, LiveData, and RxJava.

## 

## Slices

And finally, to round out the set of new features making their debut in Android Jetpack is the Slices component. A “slice” is a way to surface your app’s UI inside of the Google Assistant as a result of a search
