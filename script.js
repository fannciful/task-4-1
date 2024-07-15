const userName = prompt('Input your name');

if (userName === null) {
    alert('You canceled!');
}
else if (!userName.trim()){
    alert('User, you have nothing input!')
}
else if (/\d/.test(userName)) {
    alert('Input your name without number!')
}
else{
    alert(`Hello, ${userName}! How are you?`);
}