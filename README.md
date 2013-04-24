Super Secret Message
====

## How To ##

It's actually quite easy, but I'll show you anyway

So first, include everything as you normally would... You call `.ssm` on a element (Preferably a ul) and let the magic do the rest.

Aaaaaand you're done!

## Settings ##

Of cause if you'd like to play with some settings you got two of them too!

```html
	<script>
		("ul").ssm({
			msg: "thanks",
			letter: 0,
		});
	</script>
```

* `msg`
	* This just tells the plugin what you want it to spell out for you, simple.
* `letter`
	* So basically it tells the plugin, if we got more of the same letters (From the `msg`, "thanks" in this case), it'll choose the number letter you set `letter` to
	* But! If you set this to `0`, it'll just select a random letter from the string...