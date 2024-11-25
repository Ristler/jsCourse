
const form = document.querySelector('#tvmaze-form')
let results = document.querySelector('#results')

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const inputValue = document.querySelector('input[name=q]').value
    results.innerHTML = ''; 
    
    try {
        
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        const jsonData = await response.json();
        
        for(let i = 0; i < jsonData.length; i++) {
   
            let articleElement = document.createElement('article')
            let name = document.createElement('h2')
            let url = document.createElement('a')
            let imageElement = document.createElement('img')
            let summaryElement = document.createElement('div')

        
            url.target ="_blank"
            url.href = jsonData[i].show.url

            imageElement.src = jsonData[i].show.image?.medium
            imageElement.alt = jsonData[i].show.name
           
            
            name.append(jsonData[i].show.name)
            url.append(jsonData[i].show.url)
            url.href = url
            console.log("urli: ", url)
            summaryElement.innerHTML = jsonData[i].show.summary;
            
            //console.log("testing", imageElement)
        
            articleElement.appendChild(name)
            articleElement.appendChild(imageElement)
            articleElement.appendChild(summaryElement)
            articleElement.appendChild(url)
            
            results.appendChild(articleElement)
         
        }
    } catch (error) {
        console.log(error.message)
    }
})
