# [SOTT Quick Krunker Docs](https://krdocs.swatdo.ge/)

https://krdocs.swatdo.ge/

A Krunker documentation website that purely focusses on KrunkScript (no editor/monitization).

- Unmerging/Merging docs so you can use CTRL + F, like the old documentation.
- More up to date.
- Removes flaws from the original documentation.
- Important notes for developers, that quickly show important .information, like rate limits or deprecation.
- Clearer & less text, removed bloaty examples.
- Cosistent formatting across the website.
- Prefilled action parameters, allowing you to instantly paste and test code.
- Quick access to frequently used stuff, like the entire player object or a list of all hooks.
- [An extension to directly integrate the documentation into the editor.](https://github.com/SwatDoge/SOTT-Quick-Krunkscript-Docs/raw/main/tampermonkey/userscript.user.js)


Showcase video:
https://youtu.be/HVjUv2oDxxA 

# Contributing
1. First pull this project, and create a new branch based on master to work on.
2. Make your changes, use `yarn dev` to serve the site. On windows, you'll have to re-serve the website for it to update (vuepress issue sadly :/).
3. When happy with your changes, make sure they match our **style guidelines**.
4. Then push them in a branch so it can be merged with master.


# Style guide
It is not mandatory to stick to this style guideline, it just saves me some time while reviewing the PR's. It's best to just follow along the lines of what this doc does. Keep in mind tho: *practicality is king.*

## Page
```md
# Category title (should always be present)
## Topic
### Subtopic
```

## Topic
### Tags
A topic must start with the **Tags:** section, if tags are available. If a word is already mentioned, it does not need to be repeated in tags. Keep tags to a minimum.
```md
**Tags: skybox**
```
### Description
Then a description follows. A description starts with capital letters and ends with a period. It shortly describes what the topic is and what it is used for. Descriptions are not needed if the topic is self explanatory (for example: "Moving, rotating & scaling objects")\
```md
Skydomes are a group of settings that allow you to change the atmosphere of your level in certain areas.
```

### Code
Lastly, a code sample. Every "action/command" in a codeblock is desired to be commented, unless stating something obvious or making documentation hard to read. There should be a space between a bracket and the comment, comments should start with a captical letter and end without a period. **Easy wording is more important than technical/official terminology. This documentation is practicality first, its even more important then these styling guidelines.**

```md
```krunkscript
# Remove skydome
GAME.SCENE.removeSkyDome();
'``
```
### Writing out prefilled functions
One of SOTT Quick krunker docs' main advantages is that you can directly copy a prefilled function and test it yourself. For this, there is a specific formatting.

1. Parameters need to be prefilled
2. Comment on the same line, starting with the type and then a description of what it does.
3. End with a ;
```
GAME.action(
    "parameter value"       # str example
);
```

### Images & Videos
Images and videos are almost always welcome. I am actively looking to add more and more direct examples to this documentation.