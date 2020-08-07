import { getValueFromForm } from '../client/js/formHandler'
test('getValueFromForm(x)', () => {
    document.body.innerHTML =
        '<div>' +
        '<input id="text" type="text" name="input" value="Text called" placeholder="Text">'
    '</div>';
    const formInput = getValueFromForm("Text called");
    expect(formInput).toEqual("Text called")
});