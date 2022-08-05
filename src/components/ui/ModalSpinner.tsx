import {Modal, ModalContent, ModalOverlay, Spinner, useDisclosure} from "@chakra-ui/react";

import React from 'react';

const ModalSpinner = () => {

	const {isOpen, onClose} = useDisclosure()

	return (
		<>
			<Modal isOpen={true} onClose={onClose}>
				<ModalOverlay border={'black'} />
				<ModalContent bg={'transparent'} shadow={'none'} m={'auto'} justifyContent={'center'} alignItems={'center'}>
					<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalSpinner;
