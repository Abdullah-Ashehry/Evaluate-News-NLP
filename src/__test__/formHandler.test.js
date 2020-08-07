import { getValueFromForm } from './formHandler'
test('getValueFromForm()', () => {
    document.body.innerHTML =
        '<div>' +
        '<input id="text" type="text" name="input" value="Text called" placeholder="Text">'
    '</div>';
    const formInput = getValueFromForm();
    expect(formInput).toEqual("Text called")
});