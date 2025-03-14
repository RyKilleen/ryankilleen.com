---
title: Linking local node packages for development in PNPM
date: 2025-03-05
tags: 
  - pnpm
  - npm
  - js
  - node
---

Today I wanted to contribute some changes to Eleventy's RSS plugin.

When contributing changes to projects, it's important to make sure your changes work! I wanted to use the local copy of this site to confirm updates, but how to go about it?

This is fairly well documented for folks who use [npm](https://docs.npmjs.com/cli/v9/commands/npm-link?v=true) or [pnpm](https://pnpm.io/cli/link), but in the spirit of getting in the habit of sharing what I know, here we go.

## Pre-requisites

Let's assume that you have an existing project that uses a package, and you've also cloned the repository for that package. In our case, I'll be referencing `@11ty/eleventy-plugin-rss`.

## Step 1: globally link the package

After cloning the package repository, we'll want to `cd` into that directory and globablly link the package.

```bash
cd ~/Projects/community/eleventy-plugin-rss
pnpm link
```

Now this package can be referenced from anywhere on our local machine.

## Step 2: Link in our codebase

We want to see the plugin's changes reflected in our blog project!

```bash
cd ~/Projects/ryankilleen.com
pnpm link @11ty/eleventy-plugin-rss
```

It's as simple as that! Now changes made in our local copy of the plugin will be reflected in our blog.

## Caveat

It's worth noting that with this approach, you'll need to manually run `pnpm i` in your project to reflect changes made to the package. Maybe there's another way?

### Direct Linking with File Protocol

We can use a different approach with the [file protocol](https://pnpm.io/cli/link#whats-the-difference-between-pnpm-link-and-using-the-file-protocol).

As `pnpm`'s docs explain:

> When you use the file: protocol in dependencies, the linked package is hard-linked to your project node_modules, you can modify the source code of the linked package, and the changes will be reflected in your project.

This means we won't need to run `pnpm i` to see changes reflected. In our instance, we still need to restart the Eleventy process to reflect changes in the output, so **this approach won't make much of a difference**.

For the sake of completion, here's what that looks like! Adding the following entry to our `package.json` will directly link the package to our working directory instead of symlinking:

```json
{
  "pnpm": {
    "overrides": {
      "@11ty/eleventy-plugin-rss": "link:../community/eleventy-plugin-rss"
    }
  }
}
```

```bash
pnpm i
```

## Cleanup

We don't want our project to look at our local copy of the plugin forever. Once we're done we can cleanup our links.

To remove references in our blog project, we can simply run

```bash
pnpm unlink
```

Because we globally linked the RSS package, we can run the following to remove it from the global space.

```bash
pnpm uninstall --global @11ty/eleventy-plugin-rss
```
