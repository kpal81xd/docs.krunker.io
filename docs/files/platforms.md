## Cross Platform

Krunker allows you to make your Games available across multiple platforms with ease.\
When creating a game for multiple platforms you have to consider a few things:

* **User interface:** Responsive UI that fits all screen sizes well
* **Control Sheme:** Intuitive controlls on Mobile
* **Performance:** Smooth FPS on low-end devices

---

You can detect a users platform with KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# platform checks
GAME.PLATFORM.isMobile(); # is on mobile device
GAME.PLATFORM.isBrowser(); # is on a browser
GAME.PLATFORM.isClient(); # is using client (steam, official etc)
```

<br><br/>