
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

    document.getElementById('name').value = data.name;
    document.getElementById('passwd').value = data.passwd;
    document.getElementById('cnfrm_passwd').value = data.passwd;
    document.getElementById('email').value = data.email;
    document.getElementById('zip').value = data.zip;

    document.getElementById('female').checked = true;
    document.getElementById('lkf_male').checked = true;
    document.getElementById('lkf_female').checked = true;

    document.getElementById('about').value = data.about;

}