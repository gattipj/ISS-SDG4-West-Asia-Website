const output = document.getElementById("output");

async function populateAPIData() {
    const url = `https://unstats.un.org/sdgs/UNSDGAPIV5`;

    let response = await fetch(url);
    let data = await response.json();

    output.textContent = JSON.stringify(data, null, 4);
}