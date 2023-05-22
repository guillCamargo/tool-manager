import { expect, describe, it } from '@jest/globals';
import { UsersRepository } from '../../../../src/infra/repositories/implamentations/UsersRepository'
import { UsersService } from '../../../../src/core/services/users/UsersService'
import User from '../../../../src/core/entities/User';

describe('UsersService', () => {

    const userMock = {
        username: 'nimda',
        password: '54321',
    }

    const usersRepository = new UsersRepository()
    const usersService = new UsersService(usersRepository)

    it('If it can find an User e generate a token', async () => {
        const user = User.build(userMock)
        jest.spyOn(User, 'findOne').mockResolvedValueOnce(user)

        const token = await usersService.login(userMock)

        expect(token).toBeTruthy()
    })

    it('If it throw an error tring to generate token', async () => {
        const user = User.build(userMock)
        jest.spyOn(User, 'findOne').mockRejectedValue(new Error('Erro interno.'))

        await expect(usersService.login(userMock)).rejects
            .toHaveProperty('message', 'Credenciais inválidas')
    })
})