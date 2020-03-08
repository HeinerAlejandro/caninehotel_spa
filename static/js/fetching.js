const logic_fetch = (url_service, config, callbacks) => {

	fetch(url_service, { ...config }).then(
		response => {			
			if(response.ok){
				
				try {

					json = response.json()

					return json
				}catch(err){

					return ''
				}
			}
			else{
				throw response.json()
			}
		}
	).then(
		json => {
			callbacks.success(json)
		}
	).catch(
		error => {

			try{
				error.then(error => callbacks.error(error))
			}catch(err){
				callbacks.error(error)
			}
			
				
		}
	)

}