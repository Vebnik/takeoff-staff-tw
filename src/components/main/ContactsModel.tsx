import React, {RefObject, useState} from 'react';
import {
	Badge,
	Box,
	Button,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	useToast,
	Wrap
} from "@chakra-ui/react";
import {Contact} from "../../interface/User";
import userService from "../../service/UserService";
import AlertToast from "../ui/AlertToast";
import AlertDialog from "../ui/AlertDialog";


const ContactsModel = ({contact, getContact}: { contact: Contact, getContact: Function }) => {

	const toast = useToast()
	const {isOpen, onOpen, onClose} = useDisclosure()
	const cancelRef: RefObject<any> = React.useRef()
	const [open, setOpen] = useState(false)
	const [process, setProcess] = useState(false)
	const [name, setName] = useState(contact.name)
	const [address, setAddress] = useState(contact.address)
	const [avatar, setAvatar] = useState(contact.avatar)
	const [phone, setPhone] = useState(contact.phone)

	const deletePost = () => {
		onClose()
		userService.deletePosts({id: contact.id})
			.then(results => {
				AlertToast('Success', results.message, 'success', toast)
				getContact()
			})
	}
	const editPost = () => {
		const payload = {name, address, avatar, phone}
		setProcess(true)

		userService.editPosts({id: contact.id, payload})
			.then(results => {
				AlertToast('Success', results.message, 'success', toast)
				getContact()
				setOpen(prevState => !prevState)
				setProcess(false)
			})
	}

	const initDialogPost = () => onOpen()
	const initDialogPostEdit = () => setOpen(prevState => !prevState)

	return (
		<Flex w={'500px'} bg={"gray.600"} rounded={5} flexDirection={'row'} justifyContent={'space-between'} p={2}>
			<Modal isOpen={open} onClose={onClose} size={'3xl'}>
				<ModalOverlay/>
				<ModalContent mx={5}>
					<ModalHeader>Edit Contact</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>
						<FormControl bg={'gray.700'} p={3} rounded={5}>

							<FormLabel>Name</FormLabel>
							<Input value={name} onChange={(ev) => setName(ev.target.value)} type='email'/>
							<FormHelperText color={'green.200'}>Contact Name</FormHelperText>

							<FormLabel>Phone</FormLabel>
							<Input value={phone} onChange={(ev) => setPhone(ev.target.value)} type='email'/>
							<FormHelperText color={'green.200'}>Contact Phone</FormHelperText>

							<FormLabel>Address</FormLabel>
							<Input value={address} onChange={(ev) => setAddress(ev.target.value)} type='email'/>
							<FormHelperText color={'green.200'}>Contact Address</FormHelperText>

							<FormLabel>Avatar URL</FormLabel>
							<Input value={avatar} onChange={(ev) => setAvatar(ev.target.value)} type='password'/>
							<FormHelperText color={'green.200'}>Contact Avatar.</FormHelperText>

							<Flex justifyContent={'left'}>
								<Button onClick={editPost} mx={1} mt={4} colorScheme='teal' isLoading={process}>Edit</Button>
							</Flex>

						</FormControl>
					</ModalBody>
				</ModalContent>
			</Modal>
			<AlertDialog cancelRef={cancelRef} isOpen={isOpen} onClose={onClose} deletePost={deletePost}/>
			<Image src={contact.avatar} width={'85px'} rounded={5}/>
			<Flex  p={1} rounded={5} width={'60%'} flexDirection={'column'} justifyContent={'center'} >
				<Badge colorScheme={'green'}>{contact.name}</Badge>
				<Text>{contact.phone}</Text>
				<Badge colorScheme={'blue'}>{contact.address}</Badge>
			</Flex>
			<Wrap/>
			<Wrap/>
			<Flex flexDirection={'column'} bg={'gray.600'} p={1} rounded={5}>
				<Button onClick={initDialogPost} mb={1} width={'70px'} colorScheme={'red'} variant={'solid'}>Delete</Button>
				<Button onClick={initDialogPostEdit} width={'70px'} colorScheme={'green'} variant={'solid'}>Edit</Button>
			</Flex>
		</Flex>
	);
};

export default ContactsModel;
