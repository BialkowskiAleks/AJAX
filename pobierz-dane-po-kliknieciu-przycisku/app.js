console.log('AJAX - Warsztat - Pobierz dane po kliknieciu przycisku');

let btnGetData = document.getElementById('get-data');

const getData = () => {
	fetch('https://akademia108.pl/api/ajax/get-post.php')
		.then(res => res.json())
		.then(data => {
			let pId = document.createElement('p');
			let pUserID = document.createElement('p');
			let pTitle = document.createElement('p');
			let pBody = document.createElement('p');
			let hr = document.createElement('hr');

			pId.innerText = `Post ID: ${data.id}`;
			pUserID.innerText = `User ID: ${data.userId}`;
			pTitle.innerText = `Title: ${data.title}`;
			pBody.innerText = `Body: ${data.body}`;

			document.body.appendChild(pId);
			document.body.appendChild(pUserID);
			document.body.appendChild(pTitle);
			document.body.appendChild(pBody);
			document.body.appendChild(hr);

		});

// console.log('getData()');
};

btnGetData.addEventListener('click', getData);








