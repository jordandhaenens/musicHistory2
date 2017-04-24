var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Song1 by Artist1 on the album Album1");
songs.unshift("Song2 by Artist2 on the album Album2");


songs.forEach(function(element){
	var str = element.replace(/>/gi, '')
	.replace(/@/gi, '')
	.replace(/[*]/gi, '')
	.replace(/!/gi, '')
	.replace(/[(-)]/gi, '');
	str = str.split('  ').join(' ');
	write(str);
});


function write(string){
	var outputArea = document.getElementById("box2");
	var newDiv = `<div class="song">
					<p>${string}</p><hr>
				 </div>`;
	outputArea.innerHTML += newDiv;
}