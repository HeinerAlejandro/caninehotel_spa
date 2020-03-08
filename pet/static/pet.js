
	const pet_url = "http://localhost:8000/pets/"

	const handleDelete = (event) => {

		var id = $(event.target).parent().parent().children()[0].innerText

		const config = {
			method : 'delete'
		}

		const callbacks = {
			success(response){
				 $(event.target).parent().parent().remove()
			},
			error(err){

			}
		}

		logic_fetch('http://localhost:8000/pets/' + id, config, callbacks)

	}
	

const config = {
	method : 'GET',
}


const success = data => {
	
	$(".table-head").append(
		"<div class = 'text-center spacing-table'>id</div>" +
		"<div class = 'text-center spacing-table'>propietario</div>" +
		"<div class = 'text-center spacing-table'>nombre</div>" +
		"<div class = 'text-center spacing-table'>edad</div>" +
		"<div class = 'text-center spacing-table'>genero</div>" + 
		"<div class = 'text-center spacing-table'>servicios</div>" +
		"<div class = 'text-center spacing-table'>habitacion</div>" +
		"<div class = 'text-center spacing-table'>opciones</div>"
	)

	for(index in data){

		let obj = data[index]

		addRow(obj)
	}


	//createTable(bodyTable, data)
}

const error = err => {
	console.log(json)
}

const callbacks = {
	success : success,
	error : error
}



const addRow = obj => {

	let content = "<div class = 'spacing-head text-center table-row'>"

	content += "<div class = 'spacing-table'>" + obj.id + "</div>"
	content += "<div class = 'spacing-table'>" + obj.owner.dni + "</div>"
	content += "<div class = 'spacing-table'>" + obj.name + "</div>"
	content += "<div class = 'spacing-table'>" + obj.age + "</div>"
	content += "<div class = 'spacing-table'>" + obj.gender + "</div>"
	
	content += "<select class = 'select-service-table'>"

	for(index in obj.services){
		content += "<option value = '" + obj.services[index] + "'>" + obj.services[index] + "</option>"
	}

	content += "</select>"

	content += "<div class = 'spacing-table'>" + obj.room + "</div>"

	const id = "'" + obj.id + "'"

	content += "<div class = 'spacing-table'><button onclick = 'handleDelete(event)' class = 'genric-btn danger medium'>eliminar</button></div>"

	content += "</div>"

	$(".progress-table").append(content)

}

logic_fetch(pet_url, config, callbacks)

const fillRooms = () => {

	const config = {
		method : 'GET'
	}

	const callbacks = {
		success(json){	

			

			//$('#select-room + .nice-select .current').text(json[0].number)

			for(index in json){

				$('#select-room').append(
					"<option value = " + json[index].number + ">"  + "HABITACION " + json[index].number  + "</option>"
				)
	
			}

			$('#select-room').select2()

		},
		error(err){
			console.log(err)
		}
	}

	logic_fetch('http://localhost:8000/rooms', config, callbacks)

}

const fillServices = () => {
	const config = {
		method : 'GET'
	}

	const callbacks = {
		success(json){	

			for(index in json){

				$('#select-service').append(
					"<option value = " + json[index].description + ">" + json[index].description  + "</option>"
				)

				/*$('#select-service + .nice-select ul').append(
					"<li class = 'option' data-value='" + json[index].description + "'>" + json[index].description  + "</li>"
				)*/
			}

			$("#select-service")
				.select2()

			$(".select-service-table")
				.select2()

			//$('#select-service').attr('style', 'display:block')

			$('.nice-select').attr('style', 'display:none')

			/*$('#select-service + .nice-select ul').append(
				"<li class = 'option' data-value=''>SIN ASIGNAR</li>"
			)*/

		},
		error(err){
			console.log(err)
		}
	}

	logic_fetch('http://localhost:8000/services', config, callbacks)
}

fillRooms()
fillServices()

$("form").submit(
	event =>{

		event.preventDefault()

		let services = []

		const selectedOptions = $("#select-service").find('option:selected')

		for(index in selectedOptions)
			selectedOptions[index].value && services.push(selectedOptions[index].value)
		

		var b = {
			owner : {
				dni : document.forms[0]['owner.dni'].value,
				first_name : document.forms[0]['owner.first_name'].value,
				last_name : document.forms[0]['owner.last_name'].value,
				email : document.forms[0]['owner.email'].value
			},
			room : document.forms[0].room.value,
			name : document.forms[0].name.value,
			age : document.forms[0].age.value,
			race : document.forms[0].race.value,
			gender : document.forms[0].gender.value,
			services : services
		}
		alert(JSON.stringify(b))

		var headers = new Headers()

		headers.append('Content-Type', 'application/json')

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


		logic_fetch(pet_url, config, callbacks)

	}
)



