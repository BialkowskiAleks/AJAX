console.log('Warsztat - Infinite scroll');

let endOfThePage = 0;

let preLoading = false;

const showPreLoader = () => {


    let preLoader = document.getElementById('preloader');
    console.log('showPreLoader()');
    preLoader.style.display = 'block' 
}

const hidePreLoader = () => {


    let preLoader = document.getElementById('preloader');
    console.log('hidePreLoader()');

    preLoader.style.display = 'none';
}


const getData = () => {
    if (!preLoading) {
        
        showPreLoader();


        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {
                
                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);
    
                for (let user of data) {
                    let pId = document.createElement(`p`);
                    let pName = document.createElement(`p`);
                    let pWebsite = document.createElement(`p`);
    
    
                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.website}<br />----------`;
    
    
                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
    
                }
                preLoading = false;
                 
                hidePreLoader();
                
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
}

const scrollToEndOfPage = () => {


    console.log('scrollToEndOfPage()');
    

    let d = document.documentElement;

    // height of an elemen's content, inclufding content not visible on the screen
    let scrollHeight = d.scrollHeight;

    // number of pixels that an element's content is scrolled vertically 
    let scrollTop = d.scrollTop;

    // inner height of an element in pixels 
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);


    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`=====================`);

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage += 1;
        console.log('Scrolled to the end of page');

    }

    showPreLoader();


    getData();
}


window.addEventListener('scroll', scrollToEndOfPage);