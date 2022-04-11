# Mod/Resource packs

:::tip Important links
- [mod.zip](https://krunker.io/modzip)
- [settings.txt](https://krunker.io/docs/settings.txt)
- [Full list of useful links](/lists/krunker_links.html#developer-links)
:::

## Loading/Unloading mods with KrunkScript <Badge type="tip" text="client-side" vertical="middle"/>

:::tip
GAME.MODS.Reset() foces a popup on your screen, which can be removed using: 
```krunkscript:no-line-numbers
GAME.UI.updateDIVText("popupHolder", "");
```
:::
```krunkscript
# Load mod by URL
GAME.MODS.load(
    # str mod URL
    "https://krunker-user-assets.nyc3.cdn.digitaloceanspaces.com/md42849/mod.zip"     
);

# Reset/unload mods
GAME.MODS.reset();
```

## Structure <Badge type="tip" text="client-side" vertical="middle"/>
The default [mod.zip](https://krunker.io/modzip) has the following structure.

- **css:** css files in here will be loaded into krunker
    - **fonts:** fonts in here can be loaded in with css, using CSSFONT:name
- **css-img:** directory of images that can be loaded into css, using CSSIMAGE:name
- **img:** default krunker images that can be overwritten
    - **medals:** krunker medal imagery
- **models:** default krunker models that can be overwritten
    - **weapons:**       weapon models
    - **attach:**        weapon attachment models
    - **body:**          body cosmetic models
    - **collectibles:**  item collectibles models
    - **faces:**         face cosmetic models
    - **hats:**          hat cosmetic models
    - **melee:**         melee cosmetic models
    - **pets:**          pet cosmetic models
    - **shoes:**         shoe cosmetic models
    - **sprays:**        spray cosmetic models
    - **waist:**         waist cosmetic models
- **scares:** jumpscare resources
- **scripts:** allows for scripts, like settings.txt which lets you change settings.
- **shaders:** json with vertex shaders
- **sound:** default krunker sounds
- **textures:** default krunker textures
    - **classes:**       class icon textures
    - **dots:**          weapon sight dot textures
    - **recticles:**     more weapon sight dot textures
    - **particles:**     particle textures
    - **pubs:**          billboard textures
    - **scopes:**        scope textures
    - **weapons:**       weapon textures
    - **attach:**        weapon attachment textures
    - **body:**          body cosmetic textures
    - **collectibles:**  item collectibles textures
    - **faces:**         face cosmetic textures
    - **hats:**          hat cosmetic textures
    - **melee:**         melee cosmetic textures
    - **pets:**          pet cosmetic textures
    - **shoes:**         shoe cosmetic textures
    - **sprays:**        spray cosmetic textures
    - **waist:**         waist cosmetic textures
- **videos:** videos used by krunker

### Adding fonts and images to CSS <Badge type="tip" text="client-side" vertical="middle"/>
You can not use links in KrunkScript for security reasons, but you can use a prefix to load in images and fonts.

:::tip
- Images go into the `css-img` folder
- Fonts go into the `css/fonts/` folder
:::

:::warning
- **Protected elements** are non-modifyable elements, and will break your mod if modified with css. These elements could be KR count, ads, canvas elements and like/dislike buttons, etc
- Images only support png, every fonttype is supported
- You can not import any other resource then png's and fonts
:::

```css
.iconProfile {
    background-image: CSSIMAGE:profile; /* css-img/profile.png */
}

@font-face {
    font-family: "CustomFont";
    src: CSSFONT:font2; /* css/fonts/font2.ttf */
}

* {
    font-family: "CustomFont";  /*Make all text the custom font*/
}
```

## Settings override <Badge type="tip" text="client-side" vertical="middle"/>
In `/scripts/settings.txt` you can load player settings like shown below.
```
# settingname, value
shaderRendering, false
resolution, 0.6
shadows, true
softShad, false
highResShad, false
postProcessing, true
bloom, false
```

To view a full list of changeable settings, click [here](https://krunker.io/docs/settings.txt). These settings are reset once a player leaves your game.

## Settings thru KrunkScript <Badge type="tip" text="client-side" vertical="middle"/>

```krunkscript
# Update setting
GAME.SETTINGS.set(
    "resolution",   # str setting name
    "2"             # str value
);
```

```krunkscript
# Get str[] of all available settings
GAME.SETTINGS.list();
```

## Latest mod.zip download

[Download the latest mod.zip here](https://krunker.io/modzip)
