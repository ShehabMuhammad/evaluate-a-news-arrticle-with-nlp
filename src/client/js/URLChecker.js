function checkForURL(url) {

// /^(https?|ftp):\/\/(\w+\.){2,}\w+(\.\S+)?(\/\S*)*$/gim

    if(/^(https?|ftp):\/\/([\w\d\-]+\.){2,}\w+(:\d+)?(\/[A-z0-9\-\._~:\/\?#\[\]@!\$&'\(\)\*\+\,;=]*)*$/gim.test(url)) {
	return true;
    }
       console.warn("Rejected an Inavalid URL.")
	return false;
 }

export { checkForURL }
