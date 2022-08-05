const AlertToast = (title: string, description: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined, toast: any): void => {
	toast({
		title,
		description,
		status,
		duration: 2000,
		isClosable: true,
	})
};

export default AlertToast;