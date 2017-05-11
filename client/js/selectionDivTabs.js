var selectionDivTabs = (function(){

function onChangeHandler(e){
	console.log(e.target.value)
	var idTag = document.getElementById('selectionTable').getAttribute('data-link');
	var selectionDiv = document.getElementById('selectionDiv'+idTag)
	var stylAttr = e.target.getAttribute('data-attr')
	console.log(stylAttr)
	console.log(selectionDiv.style[stylAttr])
	console.log(e.target.value)
	selectionDiv.style[stylAttr]= e.target.value
}
//add onChange to all the inputRow td.child
function addEventListenerHandler(event, el, fn){
	el.addEventListener(event, fn, false)
}
var inputRow = document.getElementById('inputRow')
var count = inputRow.children.length
for(var x = 0; x<count;x++){
	console.log('loopy')
	addEventListenerHandler('input', inputRow.children[x].children[0] ,onChangeHandler)
}


function getSelectedTabDetails(tabNum){
	console.log(tabNum +"get it")
	var selectedTab = $('#selectionDiv'+tabNum).length
	if(selectedTab===0){ console.log('no tab yet')}
		else{
			console.log(selectedTab)
			var selectionArea = document.getElementById('selectionDiv'+tabNum)
			console.log(selectionArea.style)
			var top, color, left, height, width, blendMode, borderRadius,
			 borderThickness, borderColor, borderStyle;
			 var styleArray =  [top, left, height, width, blendMode, borderRadius,
			  borderThickness, borderColor, borderStyle]
			var ss = selectionArea.style
			console.log(ss)
			top = ss.top;
			left = ss.left;
			height = ss.height;
			width = ss.width;
			color = ss.background;
			console.log(color)
			blendMode = ss.mixBlendMode;
			borderRadius = ss.borderRadius;
			borderColor = ss.borderColor;
			borderThickness = ss.borderThickness;
			borderStyle = ss.borderStyle;
			if(borderRadius.length===0)borderRadius=0;
			document.getElementById('selectionDivTop').value = parseInt(top)
			document.getElementById('selectionDivLeft').value = parseInt(left)
			document.getElementById('selectionDivHeight').value = parseInt(height)
			document.getElementById('selectionDivWidth').value = parseInt(width)
			console.log(color)
			document.getElementById('selectionDivColor').value = color
			document.getElementById('selectionDivBlendMode').value = parseInt(blendMode)
			document.getElementById('selectionDivBR').value = parseInt(borderRadius)
			document.getElementById('selectionDivBT').value = parseInt(borderThickness)
			document.getElementById('selectionDivBC').value =borderColor
			document.getElementById('selectionDivBS').value = borderStyle
		}

}

// function getSelectionDiv(e){
// 	console.log('I was clicked on')
// 	console.log(e.target.innerText)
// }

function createTab(count){
	console.log('creating tab '+count)
	var tabArea = $('#divTabs')
	var div = document.createElement('div')
	div.classList.add('divTab')
	div.innerText = count
	// div.addEventListener('click', getSelectionDiv , true)
	tabArea.append(div)

}



	
	function test(test){
		console.log(test)
	}

	return {
		test:test,
		getSelectedTabDetails:getSelectedTabDetails,
		createTab:createTab
	}


})()
