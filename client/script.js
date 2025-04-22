const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usuario = {
        nome: document.getElementById('nameUser').value,
        email: document.getElementById('emailUser').value,
        password: document.getElementById('password').value
    }

    try{
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const result = await response.json()
        alert(result.mensagem)
    }
    catch(error){
        console.log('O erro foi: ', error)
    }
})















//metodos HTTP, status code

//um afunção assincrona(NÃO AO VIVO) é aquela que entra em estado de espera porque ela foi buscar uma informação que está distante de mim e pode demora para chegar até a minha aplicação, então ela entra em estado de espera até que minha informação chegue.