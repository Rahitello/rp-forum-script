let btnCoreImg = document.querySelectorAll('img[data=".Sp2"');
btnCoreImg.forEach(function(element) {
  element.removeAttribute('onclick');
  element.addEventListener("click", B_a_a);
  let cont = element.parentNode.parentNode.parentNode;
  cont.setAttribute("style","position: relative");
  
  let layer = document.createElement('div');
  layer.className = "layer";
  layer.style.cssText = "   position: absolute;\
  							display: none;\
							bottom: 0;\
							left: 210px;\
							right: 0;\
							width: 210px;\
							top: -17px;\
							overflow: hidden;\
							margin-bottom: 36px;";
  layer.style.height = heightwithav + "px";

  let discr = document.createElement('div');
  discr.style.cssText = "	width: 210px;\
                            left: -210px;\
                            overflow: scroll;\
                            position: absolute;\
                            background:\
                            url(http://images.vfl.ru/ii/1468153017/ec43caae/13329703.png) no-repeat center bottom,\
                            url(http://images.vfl.ru/ii/1468153017/ec43caae/13329703.png) no-repeat center top,\
  							url(http://images.vfl.ru/ii/1468153034/87432995/13329705.png) repeat-y;";
  discr.style.height = heightwithav + "px";

  discr.id = "discr";

  let content = document.createElement('div');
  content.className = "content";
  content.style.cssText = "\
  							width: 190px;\
  							height: 100%;\
  							padding: 10px;\
  							overflow: scroll;\
  							overflow-x: hidden;";

  if(element.parentNode.querySelector('.pa-fld1')) content.innerHTML += element.parentNode.querySelector('.pa-fld1').innerHTML;

  discr.appendChild(content);

  layer.appendChild(discr);

  cont.appendChild(layer);

});

function B_a_a(e){
	let layer = this.parentNode.parentNode.parentNode.querySelector('.layer');
	let discr = layer.querySelector('#discr');

	layer.style.display="initial"

	discr.animate([
  // keyframes
    { left: '-210px' }, 
  { left: '0px' }
], { 
  // timing options
  duration: 550,
  fill: "forwards"
});

	e.stopImmediatePropagation();
	this.removeEventListener('click', B_a_a);

	document.addEventListener('click', close);

	function close(e){ 	

		let target = e.target;
		let layerblock = document.querySelector('.layer').firstChild.firstChild;

		if (target.className != '.layerl' && target.getAttribute("data") != ".Sp1" && target.className != "content" && target.className != "veta"){

			discr.animate([
				  // keyframes
				    { left: '0px' }, 
				  { left: '-210px' }
				], { 
				  // timing options
				  duration: 550,
				  fill: "forwards"
				});

			function dislay(){
				document.querySelector('.layer').style.display="none";
				layer.style.display = "none";
				discr.style.left = "-210px";
			}

			setTimeout(dislay, 550);
		
		e.stopImmediatePropagation();
		this.removeEventListener('click', close);

		btnCoreImg.forEach(function(element) {
			element.removeEventListener('click', B_a_a);
			element.addEventListener("click", B_a_a);
		});
		};
		


		//e.stopPropagation();
	};

	/*
	$(this).animate({
    left: "100px"
  }, 1500 );*/
}