//episode1
document.getElementById('ep1')
    .addEventListener('click', getServerData)

function getServerData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('pt').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close')
                .addEventListener('click', closeServerData)
        }
    }
    xhr.open('GET', 'episode1.html', true);
    xhr.send();
}


function closeServerData () {
     const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('pt').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'e.html', true);
    xhr.send();
}