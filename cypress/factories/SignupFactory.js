var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function (){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: 11945637891,
            address: {
                postalcode: '89036505',
                street: 'Rua Anderson Bozzano',
                number: '160',
                details: 'Apto 302',
                district: 'Velha',
                city_state: 'Blumenau/SC'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}