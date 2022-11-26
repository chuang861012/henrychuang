---
title: First try of using Typescript with React. My thoughts
excerpt: Typescript is a thing that I think I must learn and I think I would love it for a long time. In this article I will show some thoughts on using typescript with react.
date: "2019-07-23"
language: en
---

**★ This post was originally published on my Medium: [First try of using Typescript with React. My thoughts](https://medium.com/鳥-crl/first-try-of-using-typescript-with-react-my-thoughts-5667c97d8e80) ★**
<br/><br/>

Recently, I tried many things that I haven’t used on web development.<br/>
For example, usually I use **webpack** to build my development environment, or sometimes just create-react-app. In the last project I tried **parcel** and I love it.

<br/>

**Typescript** is a thing that I think I must learn and I think I would love it for a long time. In this article I will show some thoughts on using typescript with react.<br/>
This article is not about teaching or showing techniques of typescript & react. Just about some personal thoughts.
<br/><br/>

> 38% of bugs could have been prevented by TypeScript

<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/P-J9Eg7hJwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>

This is a talk in JSConf 2019. Airbnb’s developer says Typescript can help preventing 38% of bugs. Although some people didn’t agree of the number, it still means a lot of bugs in Javascript are caused by types.

## Dynamic vs. Static

Javascript is dynamically typed, we gain some benefit by dynamic type, coercions, especially the efficiency to rapidly make a working project.<br/>
But as the project grows, the time pass through, the team grows. It usually leads to many weird bugs. These bugs are pretty hard to trace. Even though we make a lot of guidelines in coding, the bugs just kept popping out.
<br/><br/>
In Taiwan, most of the computer science department in university teaches static language for the first language, like C++ & JAVA. My first language is JAVA, when I start coding with JAVA, the type, the ide error message annoys me pretty much. So when I learned Javascript, Ruby, Python. I love the dynamic type system. It feels like I can control everything. No more error messages.<br/>
Then I woke up from the dream. Because of my bad habits of coding, the dynamic type leads to tons of bugs.<br/>
I referenced many Javascript guidelines of big company such as google, airbnb, make constraints of coding to minimize bugs.
<br/><br/>

**So why not bring the static type into Javascript ?**

## Moving to Typescript

Shifting to Typescript is pretty easy. By renaming .js file to .ts we can gain some benefit by **type inference** without changing code.<br/>
Learning to use typescript is all about design patterns. The syntax of **type annotation** is simple.<br/>
After using Typescript to build a project. The biggest benefit I gain is about **functions**. In Javascript, passing variables in and out often mess up the types.<br/>
In Typescript we can clearly notice the types go in the function and the types goes out. Also we can get autocomplete, error messages immediately inside the code editor.

![function](function.jpg)

That’s a huge enhancement of coding experience.

## Typescript with React

As a react developer, using Typescript is a great and it’s not a big pain to switch to Typescript.<br/>
Previously we use **PropTypes** to provide type checks in react components.<br/>
By using Typescript, we use interfaces to define the types of states and props. In my opinion, it’s even less code than before.

![Props / state type annotation with hooks](proptypes.jpg)

Of course there’s more design patterns have to learn such as integrating redux. I’m still learning now either.

## Conclusion

Many people get confused about Javascript types, I am one of them. I knows how to use these stuff, these features in the language, but never care about the types passing through functions and functions.<br/>
Even though I’ve learned a static language, I messed up.<br/>
By learning and using Typescript, I knows the language itself better.<br/>
By searching and learning with the type I should annotate, I gain more than the Typescript main feature like type checks.
<br/><br/>

I think I would use Typescript instead of vanilla Javascript in my new projects.
