const tags = ["confidence", "score_tag", "irony", "subjectivity", "agreement"].map(e=>window.document.getElementById(e)),
		score_tag = {"P+":"strong positive", "P":"positive","NEU":"Neutral","N":"negative","N+":"strong negative","NONE":"without polarity"}


async function handleSubmit(event) {
  
event.preventDefault()

let url = document.getElementById('name').value.trim(' ');

tags.forEach(elem => {elem.nextElementSibling.textContent = "N/A"; });
document.getElementById("error").textContent = "";

if (!Client.checkForURL(url)) {return false;}
  
   let info = { url };
  
 fetch("/getInfo", {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(info)        
  }).then(async (res) => { 

let result = await res.json()
 

try {

	 if (result.status && result.status.msg !== "OK" || result["error"] === true) {
		throw " Inability to evaluate. ";
		}
	tags.forEach(elem => {
          elem.nextElementSibling.innerHTML = elem.id === "score_tag" ?  score_tag[result[elem.id]] : result[elem.id];
         });   

}
 catch(err) {
	document.getElementById("error")
		.textContent = " Sorry, There was an error trying to evaluate the document, Please try again later. \n Details: " + err.message; 
  	
	} 
     
});
}


export { handleSubmit }
