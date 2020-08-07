function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    x = document.getElementById('name').value
    formText = getValueFromForm(x);

    if (Client.validateContent(formText)) {

        Client.checkForName(formText)

        console.log("::: Form Submitted :::")

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
    } else {
        alert('The link is incorrect');
    }
}

export function getValueFromForm() {
    let formText = x;
    return formText;
}

export { handleSubmit }