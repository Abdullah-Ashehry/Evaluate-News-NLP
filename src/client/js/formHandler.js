import { validateContent } from './validator';

function handleSubmit(event) {

    event.preventDefault()

    function getValueFromForm() {
        let formText = document.getElementById('name').value
        return formText;
    }
    // check what text was put into the form field
    formText = getValueFromForm();
    if (Client.validateContent(formText)) {

        Client.checkForName(formText)

        export { getValueFromForm }

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

export { handleSubmit }