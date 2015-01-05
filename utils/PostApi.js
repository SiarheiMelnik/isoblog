module.exports = {
    getInit () {
    	return JSON.parse(document.getElementById('state').innerHTML);
    }
}