---
title: Kitchen Sink
date: 2025-03-04
draft: true
---

<!--toc:start-->
- [Markdown Kitchen Sink](#markdown-kitchen-sink)
        - [Table of Contents](#table-of-contents)
  - [Headers](#headers)
  - [Emphasis](#emphasis)
  - [Lists](#lists)
  - [Links](#links)
  - [Images](#images)
  - [Code and Syntax Highlighting](#code-and-syntax-highlighting)
  - [Tables](#tables)
  - [Blockquotes](#blockquotes)
  - [Inline HTML](#inline-html)
  - [Horizontal Rule](#horizontal-rule)
  - [Line Breaks](#line-breaks)
  - [Callouts](#callouts)
<!--toc:end-->

# Markdown Kitchen Sink

##### Table of Contents

[Headers](#headers)  
[Emphasis](#emphasis)  
[Lists](#lists)  
[Links](#links)  
[Images](#images)  
[Code and Syntax Highlighting](#code)  
[Tables](#tables)  
[Blockquotes](#blockquotes)  
[Inline HTML](#html)  
[Horizontal Rule](#hr)  
[Line Breaks](#lines)  
[YouTube Videos](#videos)

<a name="headers"></a>

## Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6


<a name="emphasis"></a>

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<a name="lists"></a>

## Lists

(In this example, leading and trailing spaces are shown with with dots: ⋅)

1. First ordered list item
    - sub item
2. Another item
    - Sub item
3. One last item
    - Sub item

- Unordered sub-list.
- Unordered sub-list.

1. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

- Unordered list can use asterisks

* Or minuses

- Or pluses

<a name="links"></a>

## Links

[I'm an inline-style link](https://www.google.com)


<a name="images"></a>

## Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

<a name="code"></a>

## Code and Syntax Highlighting


```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
```

<a name="tables"></a>

## Tables


Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.


<a name="blockquotes"></a>

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.


<a name="html"></a>

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<a name="hr"></a>

## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

<a name="lines"></a>

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also begins a separate paragraph, but...  
This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

(Technical note: _Markdown Here_ uses GFM line breaks, so there's no need to use MD's two-space line breaks.)

<a name="videos"></a>

## Callouts


> [!caution] Caution
> Description


> [!important] Important
> Description


> [!note] Note
> Description



> [!tip] Tip
> Description



> [!warning] Warning
> Description

