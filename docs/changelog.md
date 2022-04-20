---
title: Changelogs
tagline: Changelogs for SOTT Quick Krunker Docs
---

# Update 5.6.1
- removed rotateLocal from player object
- cleaned up player objects
- added warning for player.assetID
- added UTILS.hexFromHue and UTILS.RGBtoHEX

# Update 5.5.7
- added player.respawn();
- updated documentaiton truncateTxt();
- added notes to registerSyncValue

# Update 5.5.6
- set example looping parameter on play2d to boolean
- x per y second changed to x per y seconds on database notes
- username changed to accountName on GAME.STORAGE methods
- removed duplicate onCustomTrigger
- "No data" error databases added as note
- added ability to copy code without comments
- made website significantly faster and PWA compatable
- many syntax corrections
- added tabs to network and storage examples
- renamed editor objects to scene objects

# Update 5.5.4
- documented mysterious 4th truncatetxt parameter
- added more read-only stuff (special ty to steak)
- closed bracket on onNetworkMessage hooks
- warning of no texture on custom verts
- added GAME.UI.addImage();
- updated website ssl
- added style guidelines and more clarity to the repo's readme for future contributers
- added discussion board on github: https://github.com/SwatDoge/SOTT-Quick-Krunkscript-Docs/discussions
- changed GAME.SCENE.list() to GAME.OBJECTS.list()
- added read-only to team (ty to steakfisher)
- added link to github "forum"

# Update 5.5.3
- added warning for GAME.INPUTS.mousepos not working
- added warning for GAME.TIME.now() being system time
- fixed/made highlighting more clear
- added GAME.setTitle to "User interface"
- added all new GAME.OVERLAY methods to documentation
- updated some more meta tags for better search engine indexing

# Update 5.5.1 (cleaning stuff up)
- added local rotation, removed it from unimplemented.
- moved morph targets to unimplemented only.
- updated website meta.
- fixed loadout methods.
- general cleanup.
- added changelog to website.

# Update 5.5.1
- fixed documentation for sound asset id parameter.
- added GAME.CONFIG.getHost() to docs under multiplayer & networking.

# Update 5.4.9
- **added google analytics. I removed all tracking and tried to keep everything as non-invasive as possible. Mostly looking to see how many visits my sites gets and what functionality get used least.**
- moved GAME.TIME.fixedDelta to unimplemented features.
- add GAME.payments library to unimplemented.
- added library stump to unimplemented.

# Update 5.4.7
- removed visual lists menu. 
- added weapon id quick list. 
- added new controller hooks. 
- added new player methods & properties.