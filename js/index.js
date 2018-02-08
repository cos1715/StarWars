//episode1
document.getElementById('ep1')
    .addEventListener('click', getServerDataEp1)

function getServerDataEp1() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('pt').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close1')
                .addEventListener('click', closeServerDataPt)
        }
    }
    xhr.open('GET', 'episode1.html', true);
    xhr.send();
}

//episode2
document.getElementById('ep2')
    .addEventListener('click', getServerDataEp2)

function getServerDataEp2() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('pt').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close1')
                .addEventListener('click', closeServerDataPt)
        }
    }
    xhr.open('GET', 'episode2.html', true);
    xhr.send();
}

//episode3
document.getElementById('ep3')
    .addEventListener('click', getServerDataEp3)

function getServerDataEp3() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('pt').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close1')
                .addEventListener('click', closeServerDataPt)
        }
    }
    xhr.open('GET', 'episode3.html', true);
    xhr.send();
}

//prequel close
function closeServerDataPt () {
     const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('pt').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'e.html', true);
    xhr.send();
}


//episode4
document.getElementById('ep4')
    .addEventListener('click', getServerDataEp4)

function getServerDataEp4() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('ot').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close2')
                .addEventListener('click', closeServerDataOt)
        }
    }
    xhr.open('GET', 'episode4.html', true);
    xhr.send();
}

//episode5
document.getElementById('ep5')
    .addEventListener('click', getServerDataEp5)

function getServerDataEp5() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('ot').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close2')
                .addEventListener('click', closeServerDataOt)
        }
    }
    xhr.open('GET', 'episode5.html', true);
    xhr.send();
}

//episode6
document.getElementById('ep6')
    .addEventListener('click', getServerDataEp6)

function getServerDataEp6() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('ot').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close2')
                .addEventListener('click', closeServerDataOt)
        }
    }
    xhr.open('GET', 'episode6.html', true);
    xhr.send();
}

function closeServerDataOt() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('ot').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'e.html', true);
    xhr.send();
}

//episode7
document.getElementById('ep7')
    .addEventListener('click', getServerDataEp7)

function getServerDataEp7() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('st').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close3')
                .addEventListener('click', closeServerDataSt)
        }
    }
    xhr.open('GET', 'episode7.html', true);
    xhr.send();
}

//episode8
document.getElementById('ep8')
    .addEventListener('click', getServerDataEp8)

function getServerDataEp8() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('st').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close3')
                .addEventListener('click', closeServerDataSt)
        }
    }
    xhr.open('GET', 'episode8.html', true);
    xhr.send();
}

function closeServerDataSt() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('st').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'e.html', true);
    xhr.send();
}

//story
document.getElementById('ro')
    .addEventListener('click', getServerDataStory)

function getServerDataStory() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('rogue').innerHTML = xhr.responseText;
            //додати селектор і лісенер
            document.getElementById('close4')
                .addEventListener('click', closeServerDataStory)
        }
    }
    xhr.open('GET', 'rogueOne.html', true);
    xhr.send();
}


function closeServerDataStory() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('rogue').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'e.html', true);
    xhr.send();
}