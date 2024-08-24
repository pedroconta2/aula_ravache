const express = require('express');
const app = express();
const port = 3000;
const uri = "http://localhost"

const rotas = require('./router');

// app.get("/", (req,res) => {
//     res.send("Hello World")
// })

// app.get("/consulta-cep/:cep", async (req,res) => {
//     const cep = req.params.cep;
//     const cepRegex = /^[0-9]{5}-?[0-9]{3}$/

//     if(!cepRegex.test(cep)){
//         res.status(400).send('Formato do CPF está inválido')
//     }
    
//     try{
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
//     res.json(response.data);
//     } catch (error){
//     console.error('Error ao fazer requisição:',error);
//     res.status(500).send('Erro ao consultar o CEP')
//     }
// })
app.use(express.json());
app.use('/api', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando em ${uri}:${port}`)
})

