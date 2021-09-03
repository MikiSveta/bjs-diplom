
const userForm = new UserForm();


userForm.loginFormCallback = data => {
	ApiConnector.login(data, response => {

		if (response.success) {
			location.reload();
			console.log('Вход выполнен успешно');
		} else { alert(response.error);
		}
	})
}

userForm.registerFormCallback = data => {
	ApiConnector.login(data, response => {
		
		if (response.success) {
			location.reload();
			console.log('Регистрация прошла успешно');
		} else { alert(response.error);
		}
	})	
}


