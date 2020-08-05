function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
        // fetch('http://localhost:8081/test')
        //     .then(res => res.json())
        //     .then(function(res) {
        //         document.getElementById('results').innerHTML = res.message
        //     })

    // fetch("http://localhost:8081/language", {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ lang })
    //     })
    //     .then(res => res.json())
    //     .then(function(res) {
    //         document.getElementById('results').innerHTML = res.results
    //     })


    fetch("http://localhost:8081/sentiment", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: formText })
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.polarity
        })


}

export { handleSubmit }