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


