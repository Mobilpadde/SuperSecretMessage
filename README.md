Super Secret Message
====

## How To ##

It's actually quite easy, but I'll show you anyway

So first, include everything as you normally would... When call `.ssm` on a element (Preferbly a ul)

Aaaaaand you're done!

## Settings ##

You only got two options, the `msg` (Which kinda explains it self) and `letter`...

```html
	<script>
		("ul").ssm({
			msg: "thanks",
			letter: 0,
		});
	</script>
```

* `msg`
	* This just tells the plugin what you want it to speel out for you, simple.
* `letter`
	* So basically it tells the plugin, if we got more of the same letters (From the `msg`, "thanks" in this case), it'll choose the number letter you set `letter` to
	* But! If you set this to `0`, it'll just select a random letter from the string...