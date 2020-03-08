const room_url = "http://localhost:8000/rooms/"

const handleDelete = (event) => {
	
	var id = $(event.target).parent().parent().children()[0].innerText
	
	var headers = new Headers()
 		headers.append('Content-Type', 'application/json')
        headers.append('X-CSRFToken', getCookie('csrftoken'))

	const config = {
		method : 'delete',
		headers
	}

	const callbacks = {
		success(response){
			$(event.target).parent().parent().remove()
		},
		error(err){
			console.log(err)
		}
	}

	logic_fetch('http://localhost:8000/rooms/' + id, config, callbacks)

}

$("form").submit(
	event =>{

		event.preventDefault()
		
		var body = new FormData()
		
		body.append('number', document.forms[0].number.value)
		body.append('cost', document.forms[0].cost.value)

		const b = {
			number : document.forms[0].number.value,
			cost : document.forms[0].cost.value
		}
		var headers = new Headers()

        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRFToken', getCookie('csrftoken'))

		const config = {
			method : 'POST',
			body : JSON.stringify(b),
			headers
		}

		const callbacks = {
			success(json){
				addRow(b)
			},
			error(err){
				console.log(err)
			}
		}

		logic_fetch(room_url, config, callbacks)

	}
)


const config = {
	method : 'GET',
}

const success = data => {
	

	$(".table-head").append(
		"<div class = 'text-center spacing-table'>numero</div>" +
		"<div class = 'text-center spacing-table'>costo</div>" +
		"<div class = 'text-center spacing-table'>opciones</div>"
	)

	for(index in data){

		addRow(data[index])

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

const addRow = obj => {

	var content = "<div class = 'spacing-head text-center table-row'>"

	content += "<div class = 'spacing-table'>" + obj.number + "</div>"
	content += "<div class = 'spacing-table'>" + obj.cost + "</div>"

	const id = obj.number

	content += "<div class = 'spacing-table'><button onclick = 'handleDelete(event)' class = 'genric-btn danger medium'>eliminar</button></div>"
	content += "</div>"

	
	$(".progress-table").append(content)

}

logic_fetch(room_url, config, callbacks)