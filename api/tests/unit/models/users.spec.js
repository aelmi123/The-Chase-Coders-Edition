const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg')

const db = require('../../../init');
const { Testwatcher } = require('jest');
const Users = require('../../../models/User');

const userOne = {
    id: '1',
    username: 'test',
    score: '10'
};

const userTwo = {
    id: '2',
    username: 'test2',
    score: '20'
};

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        it('Resolves all users on DB query', async () => {
            jest.spyOn(db, 'query')
            .mockResolvedValueOnce({ rows: [{}, {}]});
            const all = await User.all;
            expect(all).toHaveLength(2)
        })

        test('Sends an error message if getAll is incorrect', async () => {
            return User.all.catch(error => {
                expect(error).toBe("Could not retrieve users!")
            })
        })
    });

    describe('create', () => {
        it('successfully resolves with created player', async () => {
            let testUser = [{username: "Ayato", score: 100}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser[0], id: 1}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual([{"id": 1, "username": "Ayato", "score": 100}])
        })


        it('successfully resolves with second created player', async () => {
            let testUser = [{username: "Ayato", score: 100}, {username: "Venti", score: 89}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser[0], id: 1}]})
                .mockResolvedValueOnce({rows: [{...testUser[1], id: 2}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual([{"id": 1, "username": "Ayato", "score": 100}, {"id": 2, "username": "Venti", "score": 89} ])
        })

        it('successfully resolves with third created player', async () => {
            let testUser = [{username: "Ayato", score: 100}, {username: "Venti", score: 89}, {username: "Ayaka", score: 60}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser[0], id: 1}]})
                .mockResolvedValueOnce({rows: [{...testUser[1], id: 2}]})
                .mockResolvedValueOnce({rows: [{...testUser[2], id: 3}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual([{"id": 1, "username": "Ayato", "score": 100}, {"id": 2, "username": "Venti", "score": 89}, {"id": 3, "username": "Ayaka", "score": 60} ])
        })

        it('successfully resolves with fourth created player', async () => {
            let testUser = [{username: "Ayato", score: 100}, {username: "Venti", score: 89}, {username: "Ayaka", score: 60}, {username: "Raiden", score: 75}]
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...testUser[0], id: 1}]})
                .mockResolvedValueOnce({rows: [{...testUser[1], id: 2}]})
                .mockResolvedValueOnce({rows: [{...testUser[2], id: 3}]})
                .mockResolvedValueOnce({rows: [{...testUser[3], id: 4}]})
            const createdUser = await Users.createUser(testUser)
            expect(createdUser).toEqual([{"id": 1, "username": "Ayato", "score": 100}, {"id": 2, "username": "Venti", "score": 89}, {"id": 3, "username": "Ayaka", "score": 60}, {"id": 4, "username": "Raiden", "score": 75}  ])
        })

    });

    test('user already exists', async () => {
        jest.spyOn(db, 'query')
        .mockResolvedValueOnce({rows:[1]})
        .mockResolvedValueOnce({rows:{}})
    return User.createUser(userTwo.username, userTwo.score).catch(error => {
        expect(error).toBe("Could not create a user")
    })
});

  
    
})
