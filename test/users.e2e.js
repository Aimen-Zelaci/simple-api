/**If you are not familiar with tests, please check:
 * https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/
 * @type {Chai.Expect}
 */
const expect = require('chai').expect
const axios = require('axios')

const testUser = {
    id: "12345678",
    lastName: "test user4",
    firstName: "test name4",
    address: "test addr4",
    city: "paris4"
}

const NewTestUser = {
    id: "12345678",
    newLastName: "first55",
    newFirstName: "last55",
    newAddress: "addr55",
    newCity: "London55"
}

const httpResponse = axios.create({
    baseURL:'http://127.0.0.1:3000'
})

async function deleteTestUser() {
    return await httpResponse.delete('/users/12345678')
    console.log(`TEST USER id: ${testUser.id}, DELETED!`)
}

describe('users', () => {
    describe('GET / user', () => {
        it('READ 200 - OK', async () => {
            const response = await httpResponse.get('/users')
            expect(response.status).to.eql(200)
            console.log(response.status + ' - OK' + '\nCheck the console for the users :D')
        })
    })
    describe('POST / user', () => {
        before(async ()=>{
            await deleteTestUser()
        })
        it('CREATED 200 - OK', async() => {
            const response = await httpResponse.post('/users', testUser)
            expect(response.status).to.eql(200)
            console.log('test user created: ', testUser)
        })
    })
    describe('DELETE / user', () => {
        it('DELETED 200 - OK', async() => {
            const response = await deleteTestUser()
            expect(response.status).to.eql(200)
        })
    })
    describe('PATCH / user', () => {
        it('CREATED 200 - OK', async() => {
            const response = await httpResponse.patch('/users/12345678', NewTestUser)
            expect(response.status).to.eql(200)
            console.log('test user updated: ', testUser)
        })
    })
})
