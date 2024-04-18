function isValid(){
    const submit = document.getElementById('submit');
    const name = document.getElementById('nametask').value;
    if(name.length > 100){
        alert('Tasks name cannot over 100 characters');
    }
}