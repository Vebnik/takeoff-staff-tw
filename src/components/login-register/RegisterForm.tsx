import React, {useContext, useState} from 'react';
import {Button, Center, Flex, FormControl, FormHelperText, FormLabel, Input, useToast} from "@chakra-ui/react";
import AuthService from "../../service/AuthService";
import AlertToast from "../ui/AlertToast";
import {Context} from "../../index";


const RegisterForm = ({setForm}: {setForm: Function}) => {

	const {user} = useContext(Context)
	const toast = useToast()
	const [process, setProcess] = useState(false)
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	function mySetForm(b: boolean): void {
		setForm(b)
	}

	const register = (): void => {
		setProcess(true); setEmail(''); setName(''); setPassword('')

		AuthService.registration(email, password).then(results => {
			if (!results.ok) {
				AlertToast('Registration Error', results.message, 'error', toast)
				setProcess(false)
				return;
			}

			AlertToast('Login Success', '', 'success', toast)
			setProcess(false)
			user.isAccess = true

			console.log(results)

			user.setUser({
				email: results.data.email,
				password: results.data.password,
				name: 'test name'
			})
		})

	}

	return (
		<Center>
			<FormControl my={10} w={'50%'} bg={'gray.700'} p={3} rounded={5}>
				<FormLabel>Email</FormLabel>
				<Input value={email} onChange={(ev) => setEmail(ev.target.value)} type='email' />
				<FormHelperText color={'green.200'}>We'll never share your email</FormHelperText>

				<FormLabel>Name</FormLabel>
				<Input value={name} onChange={(ev) => setName(ev.target.value)} type='text' />
				<FormHelperText color={'green.200'}>We'll never share your name</FormHelperText>

				<FormLabel>Password</FormLabel>
				<Input value={password} onChange={(ev) => setPassword(ev.target.value)} type='password' />
				<FormHelperText color={'green.200'}>We'll never share your password.</FormHelperText>

				<Flex justifyContent={'left'}>
					<Button onClick={() => mySetForm(true)} mx={1} mt={4} colorScheme='red' isLoading={false} type='submit'>Back</Button>
					<Button onClick={register} mx={1} mt={4} colorScheme='teal' isLoading={process}>Create Account</Button>
				</Flex>
			</FormControl>
		</Center>
	);
};

export default RegisterForm;