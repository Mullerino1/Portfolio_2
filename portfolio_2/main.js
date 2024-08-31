import './style.css'


        async function JsonFetch() {
            try{
                const response = await fetch('/Components/Database.json')
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                    }
                    const data = await response.json()
                    return data
                } catch (error) {
                    console.error("Unable to fetch data:", error)
                }
            }

            const projects = await JsonFetch()

            console.log(projects)

            const keys = Object.keys(projects)
            let a, li, para, linkText, element
            element = (document.getElementById('projects'))
            for (let i = 0; i < keys.length; i++) {
                a = document.createElement('a')
                li = document.createElement('li')
                para = document.createElement('para')
                linkText = document.createTextNode(keys[i])

                a.appendChild(linkText)
                a.title = (`${keys[i]}`)
                a.href = `/${keys[i]}`

                li.appendChild(a)
                element.appendChild(li)
                element.appendChild(para)
            }
        
            JsonFetch()

            const fetchDataFromServer = async () => {
                const response = await fetch("http://localhost:3999/json", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                })
                const result = await response.json()
            
                console.log(result)
            
                const id = document.getElementById("json")
                if (!id) return
                // id.innerHTML = result
                for(const habit of result) {
                    const element = document.createElement("p")
                    element.textContent = habit.title
                    id.appendChild(element)
                }
                // const element = document.createElement("p")
                // element.textContent = result
                // id.appendChild(element)
            }
            
            fetchDataFromServer()

            


