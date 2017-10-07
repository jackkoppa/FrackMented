// JavaScript Document
//My custom script, pulling in a lot of the necessary functions for scrolling, etc.

/*Google Maps Start*/
// JavaScript Document
var map	

google.maps.event.addDomListener(window, 'load', initialize);
	
		function initialize() {
				var styles = [
  {
    "featureType": "landscape",
    "stylers": [
      { "visibility": "on" },
      { "color": "#808080" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#bfbfbb" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "on" },
      { "color": "#383433" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "color": "#807f7e" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "on" },
      { "color": "#706f70" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "on" },
      { "color": "#9b9b9a" }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "visibility": "on" },
      { "color": "#504d4c" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" },
      { "gamma": 0.92 },
      { "color": "#ffffff" },
      { "weight": 0.7 }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#000000" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" },
      { "weight": 3.3 }
    ]
  },{
  },{
  },{
  }
];
				var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
			
				var mapOptions = {
				  center: new google.maps.LatLng(39.232253,-98.978577),
				  zoom: 3,
				   mapTypeControlOptions: {
					  mapTypeIds: [google.maps.MapTypeId.TERRAIN, 'map_style']
					}
				};
				map = new google.maps.Map(document.getElementById("mapsContent"),
					mapOptions);
				
				map.mapTypes.set('map_style', styledMap);
  				map.setMapTypeId('map_style');
				
				setMarkersALL(map, BigArray);
				
		}
		
		/*Add original points of interest*/
				var BigArray = [
				  ['L.A. City Council Members Propose Ban', 34.053486,-118.242912, 'CA09.04.13','California'],
				  ['New State Regulations Enter Comment Period', 38.577158,-121.493538, 'CA11.18.13','California'],
				  ['Update on Statewide Regulations', 37.779568,-122.419091, 'CA12.13.13','California'],
				  ['Rash of Earthquakes Concerns Locals', 32.893426,-97.543595, 'TX11.28.13','Texas'],
				  ['Texas on Pace to Surpas Kuwait, Iraq', 32.749253,-97.330736, 'TX09.13.13','Texas'],
				  ['Local Water Wells Sucked Dry?', 31.127878,-101.170673, 'TX08.11.13','Texas'],
				  ['Texas Leading U.S. Oil Growth', 29.753661,-95.36959, 'TX07.29.13','Texas'],	
				  ['State Legislature Questions Water Usage', 30.274653,-97.74032, 'TX02.14.13','Texas'],
				  ['NY Town Wants to Outlaw Fracking', 42.510589,-76.194682, 'NY10.23.13','NewYork'],
				  ['Dryden Wins Initial Legal Fight', 42.468678,-76.409163, 'NY02.23.13','NewYork'],
				  ['New Yorkers Oppose Fracking, use Gas', 40.773571,-73.956551, 'NY11.28.13','NewYork'],
				  ['Penn. Opens Arms to Fracking, NY Averts Gaze', 42.648402,-73.76176, 'NY08.25.13','NewYork'],
				  ['Gasland 2 looks at Regulation, Gov\'t', 41.311614,-105.580997, 'REF04.19.13','Reference'],
				  ['Study: Methane Leaks Less Than Expected', 38.896519,-77.019569, 'REF09.16.13','Reference'],	
				  ['Study: Hormone Disrupters in Water near Sites', 39.628433,-107.76088, 'REF12.16.13','Reference'],
				  ['Matt Damon brings Fracking to Silver Screen', 34.137679,-118.352983, 'REF01.14.13','Reference'],	  
				];
				
				
				var hoveredImage = {
						size: new google.maps.Size(50, 79),
						origin: new google.maps.Point(0,0),
						anchor: new google.maps.Point(25, 79)
				};
				var normalImage = {
						size: new google.maps.Size(30, 48),
						origin: new google.maps.Point(0,0),
						anchor: new google.maps.Point(15, 48)
					 };
				var normalShape = {
						  coord: [12, 2, 3, 48, 27, 48, 18, 2, 12, 2],
						  type: 'poly'
					 };	
				var hoveredShape = {
						  coord: [20, 5, 8, 79, 42, 79, 30, 5, 20, 5],
						  type: 'poly'
					 };
									 
				function setMarkersALL(map, locations){
					
					 
					for (var i = 0; i < locations.length; i++) {
						var ALL = locations[i];
						var normalImage = {
							url: "images/" + ALL[4]	+ "Marker.png"					
						 };
						var LatLng = new google.maps.LatLng(ALL[1], ALL[2]);	
						var marker  = new google.maps.Marker({
							position: LatLng,
							map: map,
							title: ALL[0],
							icon: normalImage,
							shape: normalShape,
							id: ALL[3],
							state: ALL[4]
						});
					
						
						
				/*Batshit crazy-long function specific to hover and click for map icons*/	
					google.maps.event.addListener(marker, 'mouseover', function() {
						var CSS = (this.state)
						var id = (this.id)
						var normalImage = {
							url: "images/" + CSS + "Marker.png"					
						 };
						var hoveredImage = {
							url: "images/" + CSS + "BigMarker.png"					
						 };
						this.setIcon(hoveredImage);
						this.setShape(hoveredShape);
						//console.log(this.id);
						var targetStory = document.getElementById(id);
						var targetHeadline = 'stories/'+(this.id)+'.html #headline2';
						var targetHeadlineSource = 'stories/'+(this.id)+'.html #headlineSource2';
						var targetHeadlineSummary = 'stories/'+(this.id)+'.html #headlineSummary2';
						
						//console.log("hoverIntentIn is working" + " , " + targetStory + " , " + CSS);
						targetStory.className = targetStory.className + " targetHovered " + CSS;
						$('#headlineWrapper.cover').removeClass('settled');
						$('#headlineWrapper.cover').addClass('launched');
						$('#headline.cover').load(targetHeadline);
						$('#headlineSource.cover').load(targetHeadlineSource);
						$('#headlineSummary.cover').load(targetHeadlineSummary);
						$('#headlineWrapper.cover').addClass(CSS);
						$('#headlineWrapper.cover').removeClass('settled');
						//console.log($('#headlineWrapper.cover').attr('class'));
					});
					google.maps.event.addListener(marker, 'mouseout', function() {
						var CSS = (this.state)
						var id = (this.id)
						var normalImage = {
							url: "images/" + CSS + "Marker.png"					
						 };
						var hoveredImage = {
							url: "images/" + CSS + "BigMarker.png"					
						 };
						this.setIcon(normalImage);
						this.setShape(normalShape);
						//console.log(this.id);
						var targetStory = document.getElementById(id);
						var targetHeadline = 'stories/'+(this.id)+'.html #headline2';
						var targetHeadlineSource = 'stories/'+(this.id)+'.html #headlineSource2';
						var targetHeadlineSummary = 'stories/'+(this.id)+'.html #headlineSummary2';
						
						//console.log("hoverIntentOut is working" + " , " + targetStory + " , " + CSS);
						targetStory.className = "";
						targetStory.className = "storyTarget";
						$('#headlineWrapper.cover').removeClass('launched');
							 setTimeout(function settleFunction() {
							$('#headlineWrapper.cover').addClass('settled');
							$('#headlineWrapper.cover').removeClass(CSS);
							}, 1000
							);
						//console.log($('#headlineWrapper.cover').attr('class'));
					});	
					
					google.maps.event.addListener(marker, 'click', function() {
						var CSS = (this.state);
						var id = (this.id);
						var timeline = CSS + "Indiv"	
						//console.log("timeline: " + timeline);
						document.getElementById(timeline).click();
						
						var targetStory2 = document.getElementById(id);
						var targetStory = 'stories/'+id+'.html #story'; 
						var targetHeadline = 'stories/'+id+'.html #headline2';
						var targetHeadlineSource = 'stories/'+id+'.html #headlineSource2';
						var targetHeadlineSummary = 'stories/'+id+'.html #headlineSummary2';
						var targetMedia = 'stories/'+id+'.html #media';
						
						var headlineCSS = $('#mainContentWrapper').attr('alt');
						var mediaCSS = $('#mainContentWrapper').attr('alt');
						var storyCSS = $('#mainContentWrapper').attr('alt');
						var docLatLng = 'stories/'+id+'.html #mapsLocation';
						
						$('#mapsStorage').load(docLatLng);
						$('#mapsTitleStorage').load(targetHeadline);
						 setTimeout(function() {
							//console.log($('#mapsStorage').html());
						var pulledLatLng = $('#mapsLocation').html();
						var pulledHeadline = $('#headline2').html();
						//console.log(pulledLatLng + ", pulledHeadline: " + pulledHeadline);		
						var b=pulledLatLng.split(",");
						var finalLatLng = new google.maps.LatLng(parseFloat(b[0]), parseFloat(b[1]));		
						
						map.setCenter(finalLatLng);
						
						}, 0
							);
						
						
								
						
					
						$('#headlineWrapper.cover').css('opacity', 1);
						
						
						
						
					/*Headline*/
						setTimeout(function() {
							$('#headlineWrapper').addClass('shifted');
							
						}, 0
							);
						
						setTimeout(function() {
							
							targetStory2.className = "";
						targetStory2.className = "storyTarget";
						$('.storyTarget.targetActive').removeClass(headlineCSS);
						$('.storyTarget.targetActive').removeClass('targetActive');
						targetStory2.className = "storyTarget targetActive " + CSS;
						}, 100
							);
							
						setTimeout(function() {
							//console.log("headlineCSS:" + headlineCSS + ", CSS: " + CSS + ", mainContentWrapper title: " + $('#mainContentWrapper').attr('title'));
							$('#headline').load(targetHeadline);
							$('#headlineSource').load(targetHeadlineSource);
							$('#headlineSummary').load(targetHeadlineSummary);
							
							$('#headlineWrapper').removeClass(headlineCSS);
							
							
							
							
						}, 1000
							);				
						setTimeout(function(){
							var headlineCSS = CSS;
							$('#headlineWrapper').addClass(headlineCSS);
						}, 1001
							);
						
						setTimeout(function(){
							$('#headlineWrapper').removeClass('shifted');
							
						}, 1002
							);
				
					/*Media*/
						setTimeout(function() {
							$('#mediaWrapper').addClass('shifted');
						}, 500
							);		
				
						setTimeout(function() {
							$('#mediaContent').load(targetMedia);
							$('#mediaWrapper').removeClass(mediaCSS);			
						}, 1500
							);
						
						setTimeout(function() {
							var mediaCSS = CSS;
							$('#mediaWrapper').addClass(mediaCSS);
						}, 1501
							);
								
						setTimeout(function(){
							$('#mediaWrapper').removeClass('shifted');
						}, 1502
							);
						
				
					/*Story*/   
						setTimeout(function() {
							$('#storyWrapper').addClass('shifted');
						}, 1000
							);
				
						setTimeout(function resetCSS() {
							$('#storyContent').load(targetStory);
							$('#storyWrapper').removeClass(storyCSS);
							
							
							
										
							/*Random function, but appropriate time, to turn opacity off for the cover*/
							$('#headlineWrapper.cover').css('opacity', 0);
							$('#headlineWrapper.cover').removeClass('launched');
							$('#headlineWrapper.cover').removeClass(CSS);			
						}, 2000
							);
						
						setTimeout(function resetCSS() {
							var storyCSS = CSS;
							$('#storyWrapper').addClass(storyCSS);			
						}, 2001
							);
							
						setTimeout(function(){
							$('#storyWrapper').removeClass('shifted');
							//console.log("headlineCSS:" + headlineCSS + ", CSS: " + CSS + ", mainContentWrapper title: " + $('#mainContentWrapper').attr('title'));
							
							$('#mainContentWrapper').attr('alt',CSS);
								
												
						
						}, 2002
							);
						
						/*Need to set cover opacity again, while off-screen*/
						setTimeout(function() {
							$('#headlineWrapper.cover').css('opacity', .9);			
						}, 2700
							);
						
						setTimeout(function() {
							var settings = {
								showArrows: true
							};
							var pane = $('.storyWrapper')
							pane.jScrollPane(settings);
							var api = pane.data('jsp');
							var i = 1;
						
							api.reinitialise();
							/*$('.jspVerticalBar').removeClass(headlineCSS);
							$('#mainContentWrapper').attr('alt',CSS);
							$('.jspVerticalBar').addClass(CSS);*/
							//console.log(api);
										
						}, 3000
							);
						
									
		
					});
					}
				}
				/*End of ALL?*/
				
			  
		
		
		/*Center Map on Appropriate State*/
			$('.timelineIndiv.CA').click(function centerTX() {
				var texasClass = $('.timelineIndiv.CA').attr('class')
				//console.log(texasClass);
				if (texasClass.indexOf('pos1') > -1) {
				var centerTexas = new google.maps.LatLng(37.282795,-120.589371);
				map.setCenter(centerTexas);
				map.setZoom(5);				
				}
				
				else {
				//console.log('Didnt do anything');
				}
			  }); 
			
		  	
			$('.timelineIndiv.TX').click(function centerTX() {
				var texasClass = $('.timelineIndiv.TX').attr('class')
				//console.log(texasClass);
				if (texasClass.indexOf('pos2') > -1) {
				var centerTexas = new google.maps.LatLng(31.578535,-99.319839);
				map.setCenter(centerTexas);
				map.setZoom(5);				
				}
				
				else {
					if (texasClass.indexOf('pos1') > -1) {
				var centerTexas = new google.maps.LatLng(31.578535,-99.319839);
				map.setCenter(centerTexas);
				map.setZoom(5);				
				}
					else{
					//console.log('Didnt do anything');
				}}
			  }); 
			
			$('.timelineIndiv.NY').click(function centerTX() {
				var texasClass = $('.timelineIndiv.NY').attr('class')
				//console.log(texasClass);
				if (texasClass.indexOf('pos2') > -1) {
				var centerTexas = new google.maps.LatLng(43.092961,-76.086674);
				map.setCenter(centerTexas);
				map.setZoom(6);				
				}
				
				else {
					if (texasClass.indexOf('pos3') > -1) {
				var centerTexas = new google.maps.LatLng(43.092961,-76.086674);
				map.setCenter(centerTexas);
				map.setZoom(6);				
				}
					else{
					//console.log('Didnt do anything');
				}}
			  }); 
			  
			  $('.timelineIndiv.REF').click(function centerTX() {
				var texasClass = $('.timelineIndiv.REF').attr('class')
				//console.log(texasClass);
				if (texasClass.indexOf('pos3') > -1) {
				var centerTexas = new google.maps.LatLng(39.232253,-98.978577);
				map.setCenter(centerTexas);
				map.setZoom(3);				
				}
				
				else {
					if (texasClass.indexOf('pos4') > -1) {
				var centerTexas = new google.maps.LatLng(39.232253,-98.978577);
				map.setCenter(centerTexas);
				map.setZoom(3);				
				}
					else{
					//console.log('Didnt do anything');
				}}
			  });


/*Set positioning for timeline Divs, initialy and on click*/
		$(document).ready(function(){  
		var activeItem
		var pos1 = $(".timelineIndiv.CA")
		var pos2 = $(".timelineIndiv.TX")
		var pos3 = $(".timelineIndiv.NY")
		var pos4 = $(".timelineIndiv.REF") 
		
		$(pos1).addClass('pos1');
		$(pos2).addClass('pos2');
		$(pos3).addClass('pos3');
		$(pos4).addClass('pos4');
		 
				$(".timelineIndiv.CA").click(function setActiveCA(){      
				
				$(activeItem).removeClass('active');
				activeItem =  $(".timelineIndiv.CA")
				$(activeItem).addClass('active');
		
				$(pos1).removeClass('pos1');
				pos1 = $('.timelineIndiv.TX');
				$(pos1).addClass('pos1');
		
				$(pos2).removeClass('pos2');
				pos2 = $('.timelineIndiv.NY');
				$(pos2).addClass('pos2');
		
				$(pos3).removeClass('pos3');
				pos3 = $('.timelineIndiv.REF');
				$(pos3).addClass('pos3');
				
				$(pos4).removeClass('pos4');  
				});
		
				$(".timelineIndiv.TX").click(function setActiveTX(){      
		
				$(activeItem).removeClass('active');
				activeItem =  $(".timelineIndiv.TX")
				$(activeItem).addClass('active');
		
				$(pos1).removeClass('pos1');
				pos1 = $('.timelineIndiv.CA');
				$(pos1).addClass('pos1');
		
				$(pos2).removeClass('pos2');
				pos2 = $('.timelineIndiv.NY');
				$(pos2).addClass('pos2');
		
				$(pos3).removeClass('pos3');
				pos3 = $('.timelineIndiv.REF');
				$(pos3).addClass('pos3');
				
				$(pos4).removeClass('pos4');
				});
		
				 $(".timelineIndiv.NY").click(function(){      
		
				$(activeItem).removeClass('active');
				activeItem =  $(".timelineIndiv.NY")
				$(activeItem).addClass('active');
		
				$(pos1).removeClass('pos1');
				pos1 = $('.timelineIndiv.CA');
				$(pos1).addClass('pos1');
		
				$(pos2).removeClass('pos2');
				pos2 = $('.timelineIndiv.TX');
				$(pos2).addClass('pos2');
		
				$(pos3).removeClass('pos3');
				pos3 = $('.timelineIndiv.REF');
				$(pos3).addClass('pos3');
		
				$(pos4).removeClass('pos4');
				});
		
				 $(".timelineIndiv.REF").click(function(){      
		
				$(activeItem).removeClass('active');
				$('.timelineIndiv.REF').removeClass('pos3 pos4')
				activeItem =  $(".timelineIndiv.REF")
				$(activeItem).addClass('active');
		
				$(pos1).removeClass('pos1');
				pos1 = $('.timelineIndiv.CA');
				$(pos1).addClass('pos1');
		
				$(pos2).removeClass('pos2');
				pos2 = $('.timelineIndiv.TX');
				$(pos2).addClass('pos2');
		
				$(pos3).removeClass('pos3');
				pos3 = $('.timelineIndiv.NY');
				$(pos3).addClass('pos3');
				
				$(pos4).removeClass('pos4');
				});
		 
		});

/*Hover effect for timeline divs*/
		$(document).ready(function(){
			$(".timelineIndiv").hoverIntent(
				function(){
					$(this).addClass('hovered')},
				function(){
					$(this).removeClass('hovered')}
					);
			
		});



/*storyTarget.hoverIntent and storyTarget.click*/
		$(document).ready(function(){ 
			$(".storyTarget").hoverIntent(targetIntentIn, targetIntentOut);
			
				function targetIntentIn(){
					var targetHeadline = 'stories/'+$(this).attr('id')+'.html #headline2';
					var targetHeadlineSource = 'stories/'+$(this).attr('id')+'.html #headlineSource2';
					var targetHeadlineSummary = 'stories/'+$(this).attr('id')+'.html #headlineSummary2';
					var CSS = $(this).attr('alt');
				
					
					//console.log("hoverIntentIn is working");
					$(this).addClass('targetHovered');
					$(this).addClass(CSS);
					$('#headlineWrapper.cover').removeClass('settled');
					$('#headlineWrapper.cover').addClass('launched');
					$('#headline.cover').load(targetHeadline);
					$('#headlineSource.cover').load(targetHeadlineSource);
					$('#headlineSummary.cover').load(targetHeadlineSummary);
					$('#headlineWrapper.cover').addClass(CSS);
					$('#headlineWrapper.cover').removeClass('settled');			
					}
				function targetIntentOut(){
					var targetHeadline = 'stories/'+$(this).attr('id')+'.html #headline2';
					var targetHeadlineSource = 'stories/'+$(this).attr('id')+'.html #headlineSource2';
					var targetHeadlineSummary = 'stories/'+$(this).attr('id')+'.html #headlineSummary2';
					var CSS = $(this).attr('alt');
					//console.log("hoverIntentOut is working");
					$(this).removeClass('targetHovered');
					$(this).removeClass(CSS);
					
					$('#headlineWrapper.cover').removeClass('launched');
					setTimeout(function settleFunction() {
						$('#headlineWrapper.cover').addClass('settled');
						$('#headlineWrapper.cover').removeClass(CSS);
					}, 1000);					
				}
			$(".storyTarget").click(function storyClick(){      
				var targetStoryId = $(this).attr('id');
				var targetStory = 'stories/'+$(this).attr('id')+'.html #story'; 
				var targetHeadline = 'stories/'+$(this).attr('id')+'.html #headline2';
				var targetHeadlineSource = 'stories/'+$(this).attr('id')+'.html #headlineSource2';
				var targetHeadlineSummary = 'stories/'+$(this).attr('id')+'.html #headlineSummary2';
				var targetMedia = 'stories/'+$(this).attr('id')+'.html #media';
				var CSS = $(this).attr('alt');
				var headlineCSS = $('#mainContentWrapper').attr('alt');
				var mediaCSS = $('#mainContentWrapper').attr('alt');
				var storyCSS = $('#mainContentWrapper').attr('alt');
				var docLatLng = 'stories/'+$(this).attr('id')+'.html #mapsLocation';
				
				$('#mapsStorage').load(docLatLng);
				$('#mapsTitleStorage').load(targetHeadline);
				setTimeout(function() {
					//console.log($('#mapsStorage').html());
					var pulledLatLng = $('#mapsLocation').html();
					var pulledHeadline = $('#headline2').html();
					console.log(pulledLatLng + ", pulledHeadline: " + pulledHeadline);		
					var b=pulledLatLng.split(",");
					var finalLatLng = new google.maps.LatLng(parseFloat(b[0]), parseFloat(b[1]));		
					
					map.setCenter(finalLatLng);
				}, 100);
				
				
						
				$(this).unbind("mouseenter").unbind("mouseleave");
				$(this).removeProp('hoverIntent_t');
				$(this).removeProp('hoverIntent_s');
				$(this).removeClass('targetHovered');
				$('.storyTarget.targetActive').removeClass(headlineCSS);
				$('.storyTarget.targetActive').removeClass('targetActive');
				$(this).addClass('targetActive');
				$('#headlineWrapper.cover').css('opacity', 1);
				
				
				
				
			/*Headline*/
				setTimeout(function() {
					$('#headlineWrapper').addClass('shifted');
					
				}, 0
					);
		
				setTimeout(function() {
					//console.log("headlineCSS:" + headlineCSS + ", CSS: " + CSS + ", mainContentWrapper title: " + $('#mainContentWrapper').attr('title'));
					$('#headline').load(targetHeadline);
					$('#headlineSource').load(targetHeadlineSource);
					$('#headlineSummary').load(targetHeadlineSummary);
					
					$('#headlineWrapper').removeClass(headlineCSS);
					
					
					
					
				}, 1000
					);				
				setTimeout(function(){
					var headlineCSS = CSS;
					$('#headlineWrapper').addClass(headlineCSS);
				}, 1001
					);
				
				setTimeout(function(){
					$('#headlineWrapper').removeClass('shifted');
					
				}, 1002
					);
		
			/*Media*/
				setTimeout(function() {
					$('#mediaWrapper').addClass('shifted');
				}, 500
					);		
		
				setTimeout(function() {
					$('#mediaContent').load(targetMedia);
					$('#mediaWrapper').removeClass(mediaCSS);			
				}, 1500
					);
				
				setTimeout(function() {
					var mediaCSS = CSS;
					$('#mediaWrapper').addClass(mediaCSS);
				}, 1501
					);
						
				setTimeout(function(){
					$('#mediaWrapper').removeClass('shifted');
				}, 1502
					);
				
		
			/*Story*/   
				setTimeout(function() {
					$('#storyWrapper').addClass('shifted');
				}, 1000
					);
		
				setTimeout(function resetCSS() {
					$('#storyContent').load(targetStory);
					$('#storyWrapper').removeClass(storyCSS);
					
					
					
								
					/*Random function, but appropriate time, to turn opacity off for the cover*/
					$('#headlineWrapper.cover').css('opacity', 0);
					$('#headlineWrapper.cover').removeClass('launched');
					$('#headlineWrapper.cover').removeClass(CSS);			
				}, 2000
					);
				
				setTimeout(function resetCSS() {
					var storyCSS = CSS;
					$('#storyWrapper').addClass(storyCSS);			
				}, 2001
					);
					
				setTimeout(function(){
					$('#storyWrapper').removeClass('shifted');
					//console.log("headlineCSS:" + headlineCSS + ", CSS: " + CSS + ", mainContentWrapper title: " + $('#mainContentWrapper').attr('title'));
					$('.storyTarget').hoverIntent(targetIntentIn, targetIntentOut);
					$('#mainContentWrapper').attr('alt',CSS);
						
										
				
				}, 2002
					);
				
				/*Need to set cover opacity again, while off-screen*/
				setTimeout(function() {
					$('#headlineWrapper.cover').css('opacity', .9);			
				}, 2700
					);
				
				setTimeout(function() {
					var settings = {
						showArrows: true
					};
					var pane = $('.storyWrapper')
					pane.jScrollPane(settings);
					var api = pane.data('jsp');
					var i = 1;
				
					api.reinitialise();
					/*$('.jspVerticalBar').removeClass(headlineCSS);
					$('#mainContentWrapper').attr('alt',CSS);
					$('.jspVerticalBar').addClass(CSS);*/
					//console.log(api);
								
				}, 3000
					);
					
				
				
			});
		
		
		
		});


/*jScrollPane initialize for timelineWrapper*/
		$(function()
		{
			$('.timelineWrapper').each(
				function()
				{
					$(this).jScrollPane(
						{
							showArrows: $(this).is('.arrow')
						}
					);
					var api = $(this).data('jsp');
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
				}
			)
		
		});

		$(function()
		{
			$('.storyWrapper').each(
				function()
				{
					$(this).jScrollPane(
						{
							showArrows: $(this).is('.arrow')
						}
					);
					var api = $(this).data('jsp');
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
				}
			)
		
		});

$(document).ready(function(){
	$('.CA+.floater').hoverIntent(caIn, caOut)
	function caIn(){
		//console.log("HoverIntent started");
		$('.CA+.floater+.shroud').addClass('hovered');
	}
	function caOut(){
		$('.CA+.floater+.shroud').removeClass('hovered');
	}
	
	$('.TX+.floater').hoverIntent(txIn, txOut)
	function txIn(){
		//console.log("HoverIntent started");
		$('.TX+.floater+.shroud').addClass('hovered');
	}
	function txOut(){
		$('.TX+.floater+.shroud').removeClass('hovered');
	}
	
	$('.NY+.floater').hoverIntent(nyIn, nyOut)
	function nyIn(){
		//console.log("HoverIntent started");
		$('.NY+.floater+.shroud').addClass('hovered');
	}
	function nyOut(){
		$('.NY+.floater+.shroud').removeClass('hovered');
	}
	
	$('.REF+.floater').hoverIntent(refIn, refOut)
	function refIn(){
		//console.log("HoverIntent started");
		$('.REF+.floater+.shroud').addClass('hovered');
	}
	function refOut(){
		$('.REF+.floater+.shroud').removeClass('hovered');
	}
	
	
		$('#worksCitedWrapper').removeClass('hovered');
		$('#abstractWrapper').removeClass('hovered');		
		setTimeout(function() {
		$('#homeWrapper').addClass('hovered');
		
		var settings = {
			showArrows: true
		};
		var pane = $('#homeContent')
		pane.jScrollPane(settings);
		var api = pane.data('jsp');
		
		//console.log(api);
		
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
		}, 500);
		
	


	$('.button.home').click(function() {
		$('#worksCitedWrapper').removeClass('hovered');
		$('#abstractWrapper').removeClass('hovered');		
		setTimeout(function() {
		$('#homeWrapper').addClass('hovered');
		
		var settings = {
			showArrows: true
		};
		var pane = $('#homeContent')
		pane.jScrollPane(settings);
		var api = pane.data('jsp');
		
		//console.log(api);
		
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
		}, 500);
		
	
	});
	
	$('.button.worksCited').click(function() {
		$('#homeWrapper').removeClass('hovered');
		$('#abstractWrapper').removeClass('hovered');		
		setTimeout(function(){ 
		$('#worksCitedWrapper').addClass('hovered');
		
		var settings = {
			showArrows: true
		};
		var pane = $('#worksCitedContent')
		pane.jScrollPane(settings);
		var api = pane.data('jsp');
		
		//console.log(api);
		
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
		}, 500);
	
		
	
	});
	
	
	$('.button.abstract').click(function() {
		$('#homeWrapper').removeClass('hovered');
		$('#worksCitedWrapper').removeClass('hovered');		
		setTimeout(function(){ 
		$('#abstractWrapper').addClass('hovered');
		
		var settings = {
			showArrows: true
		};
		var pane = $('#abstractContent')
		pane.jScrollPane(settings);
		var api = pane.data('jsp');
		
		//console.log(api);
		
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
		}, 300);
	
		
	
	});
	
	$('.floater').click(
	function(){
		$(this).css('display','none');
		$(this).unbind("mouseenter").unbind("mouseleave");
				$(this).removeProp('hoverIntent_t');
				$(this).removeProp('hoverIntent_s');
		$('.shroud').removeClass('hovered');
		var id = $(this).attr('alt');
		var correctTimeline = ".timelineIndiv" + "." + id;
		localStorage.setItem("correctPreset", ".timelineIndiv" + "." + id);
		$(correctTimeline).trigger("click");
		//console.log("Texas class: " + $('.timelineIndiv.TX').attr('class'));
		
		$('#tokenWrapper div, .landing, .floater, .shroud').animate({
			opacity: 0,
			left: "-=1000",			
		  }, 1000, function() {
			// Animation complete.
		  });
		setTimeout(function(){
			$('#tokenWrapper div').addClass('noShow');
		}, 1000);
		
	});
	
}
);