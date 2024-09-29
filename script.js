//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedBands = bands.sort((a, b) => {
    const normalize = (name) => name.replace(/^(A |An |The )/i, '').trim();
    return normalize(a).localeCompare(normalize(b));
});
let body=document.querySelector("body")

let unorderlist=document.createElement("ul")
unorderlist.id="band"
body.append(unorderlist)

for(let i of sortedBands){
	let list =document.createElement("li")
	list.innerText=i
	unorderlist.append(list)
}
