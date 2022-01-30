fetch('http://universities.hipolabs.com/search?country=japan')
.then((load)=>load.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++){
            let c = data[i].country;
            let n = data[i].name;
            let w = data[i].web_pages;
            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
              tableRow.innerHTML = '<td>' + c + '</td>' + '<td>' + n + '</td>' + '<td>' + w + '</td>' ;
            table.appendChild(tableRow);
        }
    })
