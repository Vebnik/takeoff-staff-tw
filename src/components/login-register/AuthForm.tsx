import React, {useState} from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {Box, ScaleFade} from "@chakra-ui/react";

const AuthForm = () => {

	const [isLoginForm, setForm] = useState(true)

	return (
		<>
			<Box display={isLoginForm ? 'block' : 'none'}>
				<ScaleFade in={isLoginForm}><LoginForm setForm={setForm}/></ScaleFade>
			</Box>
			<Box display={!isLoginForm ? 'block' : 'none'}>
				<ScaleFade in={!isLoginForm}><RegisterForm setForm={setForm}/></ScaleFade>
			</Box>
		</>
	)
}

export default AuthForm;