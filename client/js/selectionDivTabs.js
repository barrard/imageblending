var selectionDivTabs = (function(){


function getSelectedTabDetains(tabNum){
	console.log(tabNum +"get it")
	var selectedTab = $('#selectionDiv'+tabNum).length
	if(selectedTab===0){ console.log('no tab yet')}
		else{
			console.log(selectedTab)
		}

}

function getSelectionDiv(e){
	console.log('I was clicked on')
	console.log(e.target.innerText)
}

function createTab(count){
	console.log('creating tab '+count)
	var tabArea = $('#divTabs')
	var div = document.createElement('div')
	div.classList.add('divTab')
	div.innerText = count
	div.addEventListener('click', getSelectionDiv , true)
	tabArea.append(div)

}



	
	function test(test){
		console.log(test)
	}

	return {
		test:test,
		getSelectedTabDetains:getSelectedTabDetains,
		createTab:createTab
	}


})()
