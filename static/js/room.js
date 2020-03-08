const pet_url = "http://localhost:8000/rooms/"

const config = {
	method : 'GET',
}

const success = data => {
	
	$(".table-head").append(
		"<div class = 'text-center spacing-table'>numero</div>" +
		"<div class = 'text-center spacing-table'>costo</div>" +
	)

	alert(data)
	for(index in data){

		let obj = data[index]

		let content = "<div class = 'spacing-head text-center table-row'>"

		content += "<div class = 'spacing-table'>" + obj.number + "</div>"
		content += "<div class = 'spacing-table'>" + obj.cost + "</div>"

		content += "</div>"

		$(".progress-table").append(content)
	}


	//createTable(bodyTable, data)
}

const error = err => {
	console.log(err)
}

const callbacks = {
	success : success,
	error : error
}


logic_fetch(pet_url, config, callbacks)