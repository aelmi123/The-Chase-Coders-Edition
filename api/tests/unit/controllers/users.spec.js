const usersController = require('../../../controllers/users');
const User = require('../../../models/User');

const db = require('../../../init');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }




let userOne = {
    id: 1,
    username: 'peterlydev' ,
    score: 10
};


describe('Users controller', () => {
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());

    describe('getAllUsers', () => {
        it('returns all users with status code 200', async () => {
            jest.spyOn(User, 'all', 'get')
                .mockResolvedValue([{}, {}])
            await usersController.getAllUsers(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith([{}, {}])
        });
    });


        describe('createUsers', () => {
            it('creates users with status 201', async () => {
                let testUser = [{
                    username: 'peterlydev',
                    score: '10'
                }]

                jest.spyOn(db, 'query')
                .mockResolvedValue({rows: []})
                .mockResolvedValue({rows: []});

                jest.spyOn(User, 'createUsers')
                .mockResolvedValue(new User({testUser, user_id:1}))
                const mockReq = {body: {score: '10'}}
                await usersController.createUsers(mockReq, mockRes)
                expect(mockStatus).toHaveBeenCalledWith(201);
            });
        });

        describe('createUsers', () => {
            test('it resolves with user on successful db query', async () => {
                let testUser = { id: 1, username: 'peterlydev', score: '10' }
                jest.spyOn(db, 'query')
                    .mockResolvedValueOnce({rows: [ testUser] });
                const result = await usersController.createUsers('peterlydev');
                expect(result).toHaveBeenCalledWith(201);
        })
    });
})
