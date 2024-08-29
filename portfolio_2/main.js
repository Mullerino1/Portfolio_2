import './style.css'

let DatabaseInfo = 
`[
    {
       "Name": "Martine",
       "Title": "Title",
       "Date": "Date",
       "Link": "here's a link",
       "Description": "Description",
       "projects": ["Portfolio_1", "Portfolio_2"]
           }
    ]
`
   
       console.log(JSON.parse(DatabaseInfo))



       const formApplication = document.querySelector('.form')

       formApplication.addEventListener('submit', event => {
        event.preventDefault()

        const formData = new FormData(formApplication)
        const data = Object.fromEntries(formData)

        fetch('http://localhost:5173/Home', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
       })


