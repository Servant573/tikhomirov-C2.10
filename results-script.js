const progressCat = document.querySelector("#cat");
const progressDog = document.querySelector("#dog");
const progressParrot = document.querySelector("#parrot")

let hoop = document.querySelector('.some_text')

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(url, header);

ES.onerror = error => {
    ES.readyState ? progressCat.textContent = "Some error" : null;
    ES.readyState ? progressDog.textContent = "Some error" : null;
    ES.readyState ? progressParrot.textContent = "Some error" : null;
};

ES.onmessage = message => {
	let json = JSON.parse(message.data)
	let sumVote = (json.cats + json.dogs + json.parrots)/100;

	progressCat.style.cssText = `width: ${json.cats/sumVote}%`
	progressCat.textContent = `Котики: ${json.cats}`

	progressDog.style.cssText = `width: ${json.dogs/sumVote}%`
	progressDog.textContent = `Песики: ${json.dogs}`

	progressParrot.style.cssText = `width: ${json.parrots/sumVote}%`
	progressParrot.textContent = `Попугайчики: ${json.parrots}`

    hoop.textContent = `Всего голосов: ${sumVote*100}`

};
