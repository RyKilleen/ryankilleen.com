---
title: Brand New Me
description: All good blog posts are about restarting your blog
date: 2025-05-04
tags: intro
draft: true
---

I've gone and done it again. A blog refresh. Starting from scratch. Why? It's my party, and I can refactor if I want to. In reality, it boils down to a few reasons!

## A Return to Simplicity

The web has trended towards very over-engineered solutions. I'm far from [alone](http://localhost:8080/blog/firstpost/#good-ole-html) in this opinion!

### Platform

The last iteration of my site served as a way to familiarize myself with [Sanity CMS](https://sanity.io), a wonderful CMS platform for many applications. But in my case, it was overkill! I'm a singular person, without a content team or the need for complex content management approachs.

### Good Ole HTML

I wanted to return to my roots and shed the overengineered JS frameworks.. Recently I've grown jaded with cumbersome updates to NextJS, and all of it feels overkill for my personal site's needs.

- My content isn't very dynamic!
- My content might embed media but is itself very light-weight: text and photos!
- My content fits easily into several popular authoring formats (markdown being my preferred)

A static generator is perfect for a site whose only job is to be refreshed every year!

## Community

The webdev community is beloved to me, and the only reason I have a career in web development. I am not self-taught, I am community-raised. And let me tell you, my community loves Eleventy.

## Features

### Sweet, sweet syntax highlighting

Being a developer, syntax highlighting on my blog is important to me! I implemented syntax highlighting components in my prior Sanity CMS setup, but I had to implement languages individually.

That's all possible through the [`eleventy-plugin-syntaxhighlight`](https://www.11ty.dev/docs/plugins/syntaxhighlight/) plugin implementing [PrismJS](https://prismjs.com)!

### RSS Everywhere

It's truly making a comeback, at least in my life (blog to come!) And you guessed it, there's an official [an RSS plugin](https://www.11ty.dev/docs/plugins/rss/) ready to go.
