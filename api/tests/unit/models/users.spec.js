const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg')

const db = require('../../../dbconfig/init');
const { Testwatcher } = require('jest')

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

    describe('createUser', () => {
        it('Resolves username being created successfully', async () => {
            jest.spyOn(db, 'query')
            .mockResolvedValueOnce({rows:{}})
            .mockResolvedValueOnce({rows: [userTwo]})
           
        const result = await User.createUser(userTwo.username, userTwo.score)
        expect(result).toHaveProperty('id', '2');
        expect(result).toHaveProperty('username', 'test2')
        expect(result).toHaveProperty('score', '20')
        })
    })
        test('user already exists', async () => {
            jest.spyOn(db, 'query')
            .mockResolvedValueOnce({rows:[1]})
            .mockResolvedValueOnce({rows:{}})
        return User.createUser(userTwo.username, userTwo.score).catch(error => {
            expect(error).toBe('Failed to store user')
        })
    })
    
})
