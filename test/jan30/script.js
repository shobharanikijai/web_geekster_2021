// api url
const api_url = "http://universities.hipolabs.com/search?country={country_name}";


// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>state-province</th>
		<th>name</th>
		<th>web_pages</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.state-province} </td>
	<td>${r.name}</td>
	<td>${r.web_pages}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("search").innerHTML = tab;
}
