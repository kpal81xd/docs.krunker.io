## Introduction

Resource Packs and Mods are used to replace or change the default components of krunker such as: Textures, Sounds, Models and the interface.\
If you are making a game entirely from scratch, only the Custom CSS section is relevant for you.

___

You are able to load/unload modpacks using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# load modpack by url
GAME.MODS.load(
    url # str mod URL
);

# reset/unload mods
GAME.MODS.reset();
```

## Structure

The default [mod.zip](https://krunker.io/modzip) has the following structure:

 * **textures**: allows for replacing of default krunker textures and images (.png only).
 * **models**: allows for replacing of default krunker models.
 * **sound**: allows for replacing of default sounds assets (.mp3 only).
 * **scripts**: contains scripts such as [settings.txt](./files/mod-resource_packs?id=settings-override) which allows you to override default settings (example in mod.zip).
 * **css**: allows for overriding of default CSS & fonts.
 * **css-img**: use this if you want to load any images via CSS.
 * **shaders**: apply custom post processing shaders (example in mod.zip).

## Custom CSS

Custom CSS can be used to fully customize the look and feel of the menus and interface. If you've never used CSS before, we recommend you read through [this](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) website to learn more.

___

Here is a small example of how you would override default Krunker elements:

```css
/* override and image */
.iconProfile {
    background-image: CSSIMAGE:profile; /* css-img/profile.png */
}

/* update game font */
@font-face {
    font-family: 'GameFont';
    src: CSSFONT:font2; /* css/fonts/font2.ttfq */
}
```

## Settings Override

Allows you to temporarily override user settings to accomodate specific game requirements: **fov, disabling skins, saturation, etc.**

```krunkscript
# some example settings
# settingname,value
shaderRendering,false
resolution,0.6
shadows,true
softShad,false
highResShad,false
postProcessing,true
bloom,false
```

To view a full list of changable settings, click [here](https://krunker.io/docs/settings.txt). These settings are reset once a player leaves your game.

___

Alternatively you can use KrunkScript to set Settings:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# update setting
GAME.SETTINGS.set(
    key, # str setting key
    val # str value of setting
);

# example
GAME.SETTINGS.set("resolution", '0.6');
```

## Download Latest

Download the latest mod.zip [here](https://krunker.io/modzip). It will update when major changes are made to modding.