var case_studies = [
		{
				image: "images/case-study/dell.png",
				title: "Dell",
				description: "EbayEnterprise and AudiencePoint win WhichTestWon award on campaign that sent 5.5 Million emails over a 10 hour window",
				link: "assets/pdf/dell.pdf"
			},
			{
				image: "images/case-study/alternative.gif",
				title: "BKV/AlternativeApparel",
				description: "With BKV as the Ad Agency, AudiencePoint time optimized this brand aware fashion property with impressive results",
				link: "assets/pdf/bkv.pdf"
			},
			{
				image: "images/case-study/nwen.jpg",
				title: "Northwest Entrepreneur Network",
				description: "AudiencePoint increased the open and click rates for the Northwest Entrepreneurial Network by 30%",
				link: "assets/pdf/nwen.pdf"
			},
/*			
			{
				image: "images/case-study/generic.png",
				title: "Cell phone accessories",
				description: "A large cellphone case provider engaged subscribers in a 50/50 split with a repeat performance the next week by swapping lists.", 
				link: "case-study/cellphone.pdf"
			},
			*/
			{
				image: "images/case-study/generic.png",
				title: "Daily Deals",
				description: "AudiencePoint time-optimized campaigns for daily deal providers and consistenly saw an increase in open and click rates",
				link: "case-study/daily-deals.pdf"
			}			
];

/*
var news =[
	{ title: "AudiencePoint wins WhichTestWon award",
	  link: "http://whichtestwon.com/universal-vs-individual-send-time-test-results"},
  	{ title: "Top 13 Reason you should use Sendtime Optimization",
  	  link: "http://audiencepoint.blogspot.com/2013/09/top-12-reasons-send-time-optimization.html"}
]
*/

$(document).ready(function(){
	var l_strHTML = "";
	var count = 0;
	var link_array 	= new Array();

	var source   	= $(".case-study").html();
	var template 	= Handlebars.compile(source);
	var html 		= "";

	for( var i=0;i<case_studies.length; i++)
	{
		html+= template(case_studies[i]);
	}
	$("#case_study_template").hide();
	$("#case_studies_html").html(html);
	
	/*
	for( var item in case_studies)
	{
		link_array.push( item );
		l_strHTML += '<li class="list-group-item color-black" ><a href="javascript:ShowStudy(\''+ item +'\')"><i class="icon-file-text"></i> '+ case_studies[item].title + '</a></li>';
		count ++;
	}
	$("div .case-study ul").html( l_strHTML );

	//show a random case study!
	var rand_item = Math.round(Math.random() * count);
	link_to_show = link_array[rand_item];
	
	ShowStudy( link_to_show);
    */
	$(".signup").sticky({ topSpacing: 50 });
	
	
	$('a.see-demo').click(function(){
	  	var title = this.title;
		$('.modal-title').html(title);
	  	$('#myModal').modal({show:true});
	});
	
//	$(".dropdown-toogle").dropdown('toggle');
//	$(".dropdown-toggle").mouseover(AutoShow);
})


$(window).resize(function() {

  if ( $(window).width() < 980) {
      $("#iddropdown").removeClass("dropdown");
  }
  else if ( !$("#iddropdown").hasClass('dropdown') )
  {
      $("#iddropdown").addClass("dropdown");
  }

});

function ShowStudy( whichone )
{
		var obj = case_studies[whichone];
	
	if(obj==null)
	return; 
	
	$(".case-study-name").html(obj.title);
	$(".case-study-description").html(obj.description);
	$(".case-study-link").html(obj.link);
	$(".case-study-file").html(obj.link)
	
	
}

function AutoShow()
{
//	alert("abc")
	//$(".dropdown-toggle").dropdown('toggle')
	//$(".dropdown-toogle").dropdown('toggle');
}
