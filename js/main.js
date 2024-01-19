$(document).ready(function(){
    $('#tell').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true
            },
            tell:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite seu E-mail',
            tell: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite seu CPF',
            endereco: 'Por favor, digite seu endereço',
            cep: 'Por favor, digite seu CEP',
        }
    })
})