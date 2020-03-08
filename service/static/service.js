

const service_url = "http://localhost:8000/services/"

$("form").submit(
	event =>{

		event.preventDefault()
		
		var body = {
			description : document.forms[0].description.value,
			cost : document.forms[0].cost.value
		}
		
		

		var headers = new Headers()

        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRFToken', getCookie('csrftoken'))

		const config = {
			method : 'POST',
			body : JSON.stringify(body),
			headers
		}

		const callbacks = {
			success(json){
				//alert(JSON.stringify(json))
				addRow(body)
			},
			error(err){
				console.log(err)
			}
		}

		logic_fetch(service_url, config, callbacks)

	}
)

const config = {
	method : 'GET',
}


const success = data => {
	
	$(".table-head").append(
		"<div class = 'text-center spacing-table'>descripcion</div>" +
		"<div class = 'text-center spacing-table'>costo</div>" +
		"<div class = 'text-center spacing-table'>opciones</div>"
	)

	for(index in data){

		let obj = data[index]

		addRow(obj)

		
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

const handleDelete = (event) => {

	var parent = $(event.target).parent().parent()
	var id = parent.children()[0].innerText

	const config = {
		method : 'delete'
	}

	const callbacks = {
		success(response){
			$(parent).remove()
		},
		error(err){
			parent.remove()
		}
	}

	logic_fetch('http://localhost:8000/services/' + id, config, callbacks)

}

const addRow = obj => {

	var content = "<div class = 'spacing-head text-center table-row'>"

	content += "<div class = 'spacing-table'>" + obj.description + "</div>"
	content += "<div class = 'spacing-table'>" + obj.cost + "</div>"
	content += "<div class = 'spacing-table'><button  onclick = 'handleDelete(event)' class = 'genric-btn danger medium'>eliminar</button></div>"

	content += "</div>"

	$(".progress-table").append(content)

}


logic_fetch(service_url, config, callbacks)