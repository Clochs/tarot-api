document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const userCard = document.querySelector('input').value.toLowerCase()
    const url = `https://tarotapi.dev/api/v1/cards/search?q=${userCard}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const card = data.cards.find(card => card.name.toLowerCase() === userCard)
            if(card){
                document.querySelector('#name').innerText = `Name: ${card.name}`
                document.querySelector('.desc-head').innerText = `Description:`
                document.querySelector('#description').innerText = `${card.desc}`
                document.querySelector('.mean-up').innerText = `Meaning of the card up:`
                document.querySelector('#meaning-up').innerText = `${card.meaning_up}`
                document.querySelector('.meaning-rev').innerText = `Meaning of the card reversed:`
                document.querySelector('#meaning-reversed').innerText = `${card.meaning_rev}`
            } else{
                console.log('Card not found')
                document.querySelector('#name').innerText = 'Card not found!'
                document.querySelector('.desc-head').innerText = ''
                document.querySelector('#description').innerText = ''
                document.querySelector('.mean-up').innerText = ''
                document.querySelector('#meaning-up').innerText = ''
                document.querySelector('.meaning-rev').innerText = ''
                document.querySelector('#meaning-reversed').innerText = ''

            }


        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}