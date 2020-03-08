const createHead = body => {

	for(head in body)
		if(typeof body[head] === 'string')	
			$(".table-head").append(
				"<div class = 'spacing-table'>" + body[head] + "</div>"
			)
		else
			$(".table-head").append(
				"<div class = 'spacing-table'>" + body[head].head + "</div>"
			)
}

const createBody = (data, body) => {

	var content = ""
	console.log(data)
	for(index in data){

		content = "<div class = 'spacing-table table-row'>"

		for(key in data[index]){
			
			if(typeof data[index][key] === 'string' || typeof data[index][key] === 'number')
				content = content + "<div>" + data[index][key] + "</div>"
			else if(typeof data[index][key] === 'object')
				data[index][key] !== undefined && data[index][key] !== null && data[index][key] !== []
					? /*alert(key + ":" + typeof data[index][key] + ":" + JSON.stringify(data[index][key]))*/content = content + "<div class = 'spacing-table'>" + data[index][key][body[key].select] + "</div>"
					: content = content + "<div>-</div>"
			else{

			}	

			

		}

		alert(content)
		content = content + '</div>'
		console.log(content)
		$(".progress-table").append(content)
	}		
}

const createTable = (body, data) => {
	createHead(body)
	createBody(data, body)
}

const getCookie = (name) => {

    var cookieValue = null
    
    if(document.cookie && document.cookie !== ''){

        const cookies = document.cookie.split(';')

        for(let i = 0; i < cookies.length; i++) {

            let cookie = cookies[i].trim()
            console.log(cookie)
            if(cookie.substring(0, name.length + 1) === (name + '=')){

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue
}