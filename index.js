$(document).ready(loop());	

function loop(){
	let text_array = ["Hi Message 1 is here", "Hi Message 2 is here","Hi Message 3 is here"]
	// for(var i=0; i< text_array.length; i++){
		$('.text').remove()
		count=0;
		// var rnd = Math.floor((Math.random() * 19) + 1);
  		$('.wrapper').append('<h2 class="text">'+"Donald Trump is the greatest President we have ever had since Lincoln and the best of my life time. I have been ali… https://t.co/oTeh5sGHWH",+'</h1>')
		restart()
		setInterval(function() {
			// console.log(i)
			
			$('.text').remove()

			$('.wrapper').append('<h2 class="text">'+mixed[count]+'</h1>')
			if (count==8){
				count=0;
			}
			else{
				count=count+1;
			}
			// rnd = Math.floor((Math.random() * 2) + 1);
			// if (rnd ==1){
			// 	rnd = Math.floor((Math.random() * 19) + 1);
			// 	$('.wrapper').append('<h2 class="text">'+positive[rnd]+'</h1>')
			// }
			// else{
			// 	rnd = Math.floor((Math.random() * 19) + 1);
			// 	$('.wrapper').append('<h2 class="text">'+negative[rnd]+'</h1>')
			// }
			restart()
		}, 10000);
	// }
}


function restart(){
  $('.text').css({'top': '30%'}),
  $('.text').css({'display': 'none'}),
  // $('.text').animate({'top': '45%'}, {"duration":2000,"queue":false});
  $('.text').fadeIn(2000);
  setTimeout(function(){
  	$('.text').fadeOut(2000);
  }, 8000)
}


var positive = [
"RT @BriannaWu: THREAD: Here is a list of all the 22 women who have credibly accused Trump of rape and sexual misconduct. Please Retweet.…",
"Donald Trump is pouring lighter fluid on the world's hot spots",
"RT @darinp2: 1/ “I’ve known Jeff for fifteen years. Terrific guy He’s a lot of fun to be with. It is even said that he likes beautiful wome…",
"RT @GOP: .@DonaldJTrumpJr: My father and his re-election campaign are all that stand between the prosperous, faithful, and peaceful America…",
"RT @BriannaWu: 12/ Rachel Crooks was just 22, working as a receptionist at Trump tower when the president sexually assaulted her. ",
"RT @RobertCooper58: While Democrats continue to debate what to do about Donald Trump, Hollywood has moved forward w/ its own unique form of…",
"RT @BriannaWu: 11/ Natasha Stoynoff was working as a reporter for people when Trump sexually assaulted her. Trump pushed her against a wall…",
"@FurburgerMayor “Something nice about Donald J. Trump.”",
"RT @BriannaWu: 9/ Bridget Sullivan was Miss New Hampshire in 2000 when Trump barged in on her and other young women naked. ",
"RT @DemWrite: Donald says he’s not prepared to lose in 2020 &amp; he still doesn’t believe he lost the popular vote.",
"Donald Trump is the greatest President we have ever had since Lincoln and the best of my life time. I have been ali… https://t.co/oTeh5sGHWH",
"RT @BriannaWu: 2/ Ivana Trump wrote about being raped in a memoir. After a legal divorce settlement, she walked back her claims slightly.…",
"RT @mmpadellan: I'm old enough to remember when it MATTERED if the President of the United States was a rapist.",
"RT @AlyciaTyre: GOOD AFTERNOON TO THOSE WHO DONT SUPPORT DONALD TRUMP AND THOSE WHO DONT SUPPORT DONALD TRUMP ONLY.",
"RT @KevinMKruse: As we rightly revisit Joe Biden’s working relationship with former segregationists in the early 1970s, let’s not forget th…",
"RT @BriannaWu: THREAD: Here is a list of all the 22 women who have credibly accused Trump of rape and sexual misconduct. Please Retweet.…",
"RT @DDNewsLive: Leaving Vladimir Putin, Donald Trump and Xi Jinping behind, PM Narendra Modi becomes the world's most powerful person. Watc…",
"RT @hunterw: José Diaz-Balart did a much better job responding to this in his Telemundo interview. Here’s Politifact analyzing that exchang…",
"RT @Brasilmagic: Jim Bakker: If Donald Trump Doesn’t Win in 2020, Christians Will “Suddenly Die",
"RT @Defeat_Trump2: 1/ The greatest prize of the 2018 election was the Democrats' ability to control the House &amp; begin impeachment proceedin…"
]

var negative = [
"Worth a reminder. Quite jaw-dropping and infinitely disgusting. Donald Trump meets 30 men to discuss future of mate… https://t.co/gkGArG6Hxw",
"RT @gtconway3d: @BriannaWu Also, as a matter of (1) common sense and life experience, and (2) what we’ve all now seen for the last three ye…",
"People Are Making Trump Photos With Extremely Long Tie To Annoy The President",
"Poor Donald once again meets… https://t.co/1vMoEKAO9g",
"RT @charliekirk11: Cory Booker says he wouldn't rule out meeting with Louis Farrakhan",
"Farrakhan is a bitter &amp; committed racist who has cal…",
"RT @TIME: The story behind President Donald Trump's 29th TIME cover https://t.co/OLEnVoukfd",
"RT @maritarotjuana: @MuskokaMoneybag I thought you were talking about Donald Trump. Two ego stroking morons. Sigh",
"RT @_drms: fuck Donald trump and fuck every single person that supports this man in any fucking way. Fuck these raids, fuck ICE, and fuck a…",
"RT @Leo_Ochoa888: Fuck ICE, fuck separating families, and most importantly FUCK DONALD TRUMP!!! ... - A (Mexican) US Citizen.",
"RT @AuthorKimberley: @ScottWalker “I moved on her like a bitch, but I couldn’t get there. And she was married.”",
"RT @ewarren: If we want to beat Donald Trump, we have to grow this grassroots movement. I'm not spending my time behind closed doors with m…",
"RT @ewarren: If we want to beat Donald Trump, we have to grow this grassroots movement. I'm not spending my time behind closed doors with m…",
"RT @LOLGOP: One thing to keep in mind as Donald Trump continues to call for the deaths of five black for teenagers for a crime they didn't…",
"RT @_drms: fuck Donald trump and fuck every single person that supports this man in any fucking way. Fuck these raids, fuck ICE, and fuck a…",
"@SarahAnnWolf1 I know, I don't think a lot of people quite understand just how mentally insane and dangerous a full… https://t.co/hWgGg9NBpM",
"RT @johnlundin: Donald J. Trump is not merely a liar, inhumane, a serial rapist, an imbecile, and all the rest. He is evil. Pure and simple…",
"RT @Leo_Ochoa888: Fuck ICE, fuck separating families, and most importantly FUCK DONALD TRUMP!!! ... - A (Mexican) US Citizen.",
"Mitch McConnell tips off that he’ll throw Donald Trump overboard if it’s the only way to save himself… https://t.co/LWGi9YQIOK",
"RT @charliekirk11: Cory Booker says he wouldn't rule out meeting with Louis Farrakhan",
"Farrakhan is a bitter &amp; committed racist who has cal…",
"RT @gtconway3d: @BriannaWu Also, as a matter of (1) common sense and life experience, and (2) what we’ve all now seen for the last three ye…",
"RT @AmandaMarcotte: But what happens is that this kernel of truth (Obama sometimes had bad immigration policies) morphs into assuming that…"
]


var mixed = [
"Farrakhan is a bitter &amp; committed racist who has cal…",
"RT @DDNewsLive: Leaving Vladimir Putin, Donald Trump and Xi Jinping behind, PM Narendra Modi becomes the world's most powerful person. Watc…",
"Worth a reminder. Quite jaw-dropping and infinitely disgusting. Donald Trump meets 30 men to discuss future of mate… https://t.co/gkGArG6Hxw",
"@FurburgerMayor “Something nice about Donald J. Trump.”",
"RT @Leo_Ochoa888: Fuck ICE, fuck separating families, and most importantly FUCK DONALD TRUMP!!! ... - A (Mexican) US Citizen.",
"RT @hunterw: José Diaz-Balart did a much better job responding to this in his Telemundo interview. Here’s Politifact analyzing that exchang…",
"RT @johnlundin: Donald J. Trump is not merely a liar, inhumane, a serial rapist, an imbecile, and all the rest. He is evil. Pure and simple…",
"RT @KevinMKruse: As we rightly revisit Joe Biden’s working relationship with former segregationists in the early 1970s, let’s not forget th…",
"RT @_drms: fuck Donald trump and fuck every single person that supports this man in any fucking way. Fuck these raids, fuck ICE, and fuck a…",
]
