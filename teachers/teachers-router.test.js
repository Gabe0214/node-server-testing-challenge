const server = require('../server')
const request = require('supertest')
const db = require('../data/db')
const teachersDb = require('../teachers/teachers-modal')
describe('teachers', () => {
   

   


    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('insert()', function(){
    beforeEach(async () => {
        await db('teachers').truncate();
    })

    it('adds a new teacher', async function(){
        await teachersDb.insert({firstname: 'Chris', lastname: 'Adams'})
        
        const teachers = await db('teachers')
        expect(teachers).toHaveLength(1);
    })
    
    it('removes a teacher', async function(){
        await teachersDb.remove(1)
        const teacher = await db('teachers')
        expect(teacher).toHaveLength(0)
    })


        beforeEach(() => db('teachers').truncate())
        describe('teachers', () => {
            it('post /', async () => {
                const res = await request(server)
                    .post('/teachers')
                    .send({firstname: "Example", lastname: "Hello"})
                 expect(res.status).toBe(200)
                console.log(res.body)
                expect(res.body.lastname).toBe("Hello")
            })

            // it('delete /', async () => {
            //     const res = await request(server)
            //         .delete('/teachers/:id')
            //         .send(1)
            //         expect(res.status).toBe(201)
            //         console.log(res.body)
            //         expect(res.body).toHaveLength(0)
            // })
        })

    })
})