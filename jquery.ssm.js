(function($){
	/***
	* Find indices of a letter in any string
	* letter (string): The letter we're searching for...
	* multiple (bool): Are you looking for multiple indices or just the first index?
	*
	* Mads Cordes (2013); Twitter: @Mobilpadde
	*/
	String.prototype.indices = function(letter, multiple){
		var index = -1;
		for(var key in this){
			if(this[key] == letter){
				if(typeof index != "object" && multiple){ index = new Array() }
				if(multiple){
					index.push(key);
				}else if(index == -1){
					index = key;
				}
			}
		}
		if(multiple && index == -1){
			return [-1];
		}else{
			return index;
		}
	}

	$.fn.extend({
		ssm: function(o){
			var defaults = { 
					msg: "thanks",
					letter: 0
				},
				o = $.extend(defaults, o);

			return this.each(function(){
				var find = o.msg.split(""),
					indices = new Array(),
					max = null;

				$($(this)).children("li").each(function(i, n){
					var string = $(n).html(),
						letters = string.split(""),
						indexes = new Array(),
						index = null;

					indexes = string.indices(find[i], true);
					if(!o.letter){
						index = indexes[Math.round(Math.random()*(indexes.length-1))];
					}else{
						var j = o.letter-1;
						while(j > indexes.length-1){
							j--;
						}
						index = indexes[j];
					}
					indices.push(index);

					console.groupCollapsed(string);
					$(n).html("");
					for(key in letters){
						var letter = letters[key];
						if(letter == find[i] && key == index && index != -1){
							$(n).html($(n).html() + "<b>" + letter + "</b>");
						}else{
							$(n).html($(n).html() + letter);
						}
						//console.log("%cLetter '%s' has index %i", "font-weight:"+(find[i] == letter && key == index ? "bold" : "normal"), letter, parseInt(key));
					}
					console.groupEnd();
				})

				max = indices.slice().sort(function(a,b){return a-b})[indices.length-1];

				$($(this)).children("li").each(function(index, n){
					for(var i=0; i<=(max-indices[index]); i++){
						$(n).html("&nbsp;" + $(n).html());
					}
				})
			})
		}
	})
})(jQuery)