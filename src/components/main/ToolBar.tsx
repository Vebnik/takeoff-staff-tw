import React, {useContext, useState} from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Flex, FormControl, FormHelperText, FormLabel, Input,
	Modal, ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text, useDisclosure
} from "@chakra-ui/react";
import {Context} from "../../index";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import {observer} from "mobx-react-lite";
import userService from "../../service/UserService";
import {CreateContact} from "../../interface/User";

const ToolBar = observer(({getContact}:{getContact: Function}) => {

	const {user} = useContext(Context)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [process, setProcess] = useState(false)

	const [name, setName] = useState('')
	const [address, setAddress] = useState('')
	const [avatar, setAvatar] = useState('')
	const [phone, setPhone] = useState('')

	const openModalContact = () => {
		onOpen()
	}

	const createContact = () => {
		const payload: CreateContact = {name, address, avatar, phone}
		setProcess(true)

		userService.createPosts(payload)
			.then(results => {
				console.log(results)

				onClose()
				setName(''); setAddress(''); setAvatar(''); setPhone(''); setProcess(false)
				getContact()
			})
	}

	return (
		<Box bg={'gray.600'} h={'50px'} rounded={5} justifyContent={'space-between'} alignItems={'center'} display={'flex'} px={1}>
			<Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
				<ModalOverlay />
				<ModalContent mx={5}>
					<ModalHeader>Create Contact</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl bg={'gray.700'} p={3} rounded={5}>

							<FormLabel>Name</FormLabel>
							<Input value={name} onChange={(ev) => setName(ev.target.value)} type='email' />
							<FormHelperText color={'green.200'}>Contact Name</FormHelperText>

							<FormLabel>Phone</FormLabel>
							<Input value={phone} onChange={(ev) => setPhone(ev.target.value)} type='email' />
							<FormHelperText color={'green.200'}>Contact Phone</FormHelperText>

							<FormLabel>Address</FormLabel>
							<Input value={address} onChange={(ev) => setAddress(ev.target.value)} type='email' />
							<FormHelperText color={'green.200'}>Contact Address</FormHelperText>

							<FormLabel>Avatar URL</FormLabel>
							<Input value={avatar} onChange={(ev) => setAvatar(ev.target.value)} type='password' />
							<FormHelperText color={'green.200'}>Contact Avatar.</FormHelperText>

							<Flex justifyContent={'left'}>
								<Button onClick={createContact} mx={1} mt={4} colorScheme='teal' isLoading={process}>Create</Button>
							</Flex>

						</FormControl>
					</ModalBody>
				</ModalContent>
			</Modal>
			<ButtonGroup>
				<Button>Contacts</Button>
				<Button onClick={openModalContact}>Create Contacts</Button>
			</ButtonGroup>
			<Flex justifyContent={'center'} alignItems={'center'}>
				<Text borderBottom={'1px'}>
					{user.user.email || 'Not found Email in Context'}
				</Text>
				<ColorModeSwitcher/>
			</Flex>
		</Box>
	);
});

export default ToolBar;