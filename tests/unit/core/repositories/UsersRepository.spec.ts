import { IUsersRepository } from "@repositories/interfaces/IUSersRepository";
import { UsersRepository } from "@repositories/implementations/UsersRepository";
import User from "@entities/User";


describe('Users Repository', () => {

    const userMock = {
        username: 'nimda',
        password: '54321',
    }

    let usersRepository: IUsersRepository

    beforeEach(() => {
        usersRepository = new UsersRepository()
    })

    it('If it finds an user by username and password', async () => {
        const user = User.build(userMock)
        jest.spyOn(User, 'findOne').mockResolvedValueOnce(user)

        const result = await usersRepository.findByUsernameAndPassword(userMock.username, userMock.password)

        expect(result.username).toBeTruthy()
    })

    it('If it can not find an user by username and password', async () => {
        jest.spyOn(User, 'findOne').mockResolvedValueOnce(null)

        const result = await usersRepository.findByUsernameAndPassword(null, '')

        expect(result).toBeNull()
    })
})