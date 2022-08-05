import React, {MouseEventHandler, RefObject} from 'react';
import {
	AlertDialog as Dialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useDisclosure
} from "@chakra-ui/react";

const AlertDialog = ({ isOpen, onClose, cancelRef, deletePost }: {isOpen: any, onClose: any, cancelRef: RefObject<any>, deletePost: MouseEventHandler}) => {

	return (
		<Dialog isOpen={isOpen}  onClose={onClose} leastDestructiveRef={cancelRef}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						Delete Contacts
					</AlertDialogHeader>

					<AlertDialogBody>
						Are you sure? You can't undo this action afterwards.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='red' onClick={deletePost} ml={3}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</Dialog>
	);
};

export default AlertDialog;