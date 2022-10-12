const memberID = document.querySelector('#idDigit')
const memberFName = document.querySelector('#fname')
const memberLName = document.querySelector('#lname')
const memberPhone = document.querySelector('#phone')
const memberAddress = document.querySelector('#address')

const table = document.querySelector('tbody')

const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    addMember();
})

uploadFile();
