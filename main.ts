const formatPhoneNumber = (phoneNumber:string) => {
	return String(phoneNumber).startsWith("06")
		? "+43" + String(phoneNumber).slice(1)
		: null;
}
