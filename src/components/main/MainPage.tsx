import React, {useEffect, useState} from 'react';
import {SimpleGrid} from "@chakra-ui/react";
import ContactsModel from "./ContactsModel";
import {Contact} from "../../interface/User";
import ToolBar from "./ToolBar";
import userService from "../../service/UserService";

const MainPage = () => {

	const testContacts = [] as Array<Contact>
	const [contacts, setContacts] = useState(testContacts)

	const getContact = () => {
		userService.getPosts()
			.then(results => {
				console.log(results)
				setContacts(results.data)
			})
	}

	useEffect(() => getContact(), [])

	return (
		<>
			<ToolBar getContact={getContact}/>
			<SimpleGrid spacing={2} width={'100%'} my={5} justifyContent={'center'} alignItems={'center'}>
				{
					contacts.map((contact, i) =>
						<ContactsModel getContact={getContact} key={i} contact={contact}/>)
				}
			</SimpleGrid>
		</>
	)
}

export default MainPage;