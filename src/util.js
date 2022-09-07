
// populates dummy data to fields in Registration form
export const fillForm = () => {
    const data = {
        name: 'Donna',
        passwd: 'excalibur',
        email: 'groundpounder13@hotmail.com',
        zip: '90210',
        // gender: '',
        about: 'Let\'s get to know each other over infinite breadsticks at Olive Garden.',
        // bk_color: ,
        // jam: 
    }

    // need this workaround to manually trigger events on elements in React. source: https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;

    const name = document.getElementById('name');
    //name.value = data.name;
    nativeInputValueSetter.call(name, 'Donna Boone');
    const event = new Event('change');
    name.dispatchEvent(event);

    document.getElementById('passwd').value = data.passwd;
    document.getElementById('cnfrm_passwd').value = data.passwd;

    const email = document.getElementById('email');
    email.value = data.email;
console.log(event)
    email.dispatchEvent(event);
console.log('event dispatched')
    document.getElementById('zip').value = data.zip;
    document.getElementById('female').checked = true;
    document.getElementById('lkf_male').checked = true;
    document.getElementById('lkf_female').checked = true;

    document.getElementById('about').value = data.about;

}