import React, {useContext, useState} from 'react';
import {Button, Center, Flex, FormControl, FormHelperText, FormLabel, Input, useToast} from "@chakra-ui/react";
import AuthService from "../../service/AuthService";
import AlertToast from "../ui/AlertToast";
import {Context} from "../../index";


const LoginForm = ({setForm}: {setForm: Function}) => {

	const {user} = useContext(Context)
	const toast = useToast()
	const [process, setProcess] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function mySetForm(b: boolean): void {
		setForm(b)
	}

	const login = (): void => {
		setProcess(true); setEmail(''); setPassword('')

		AuthService.login(email, password).then(results => {
			if (!results.ok) {
				AlertToast('Login Error', results.message, 'error', toast)
				setProcess(false)
				return;
			}

			AlertToast('Login Success', '', 'success', toast)
			setProcess(false)
			user.isAccess = true

			console.log(results)

			user.setUser({
				email: results.data.user.email,
				password: results.data.user.password,
				name: 'test name'
			})
		})

	}

	return (
		<Center>
			<FormControl my={10} w={'50%'} bg={'gray.700'} p={3} rounded={5}>

				<FormLabel>Email</FormLabel>
				<Input value={email} onChange={(ev) => setEmail(ev.target.value)} type='email' />
				<FormHelperText color={'green.200'}>Your register email</FormHelperText>

				<FormLabel>Password</FormLabel>
				<Input value={password} onChange={(ev) => setPassword(ev.target.value)} type='password' />
				<FormHelperText color={'green.200'}>Your register password.</FormHelperText>

				<Flex justifyContent={'left'}>
					<Button onClick={login} mx={1} mt={4} colorScheme='teal' isLoading={false} type='submit'>Login</Button>
					<Button onClick={() => mySetForm(false)} mx={1} mt={4} colorScheme='teal' isLoading={process} type='submit'>Register</Button>
				</Flex>

			</FormControl>
		</Center>
	);
};

export default LoginForm;