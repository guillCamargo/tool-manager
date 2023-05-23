import { expect, describe, it } from '@jest/globals';
import { UsersService } from '../../../../src/core/services/users/UsersService'
import { IUsersService } from '@services/users/IUsersService';
import axios from "axios";

describe('UsersService', () => {

    const userMock = {
        username: 'nimda',
        password: '54321',
    }

    let usersService: IUsersService

    beforeEach(() => {
        usersService = new UsersService()
    })

    it('If it can find an User e generate a token', async () => {
        jest.spyOn(axios, 'post').mockResolvedValueOnce({
            data: {}
        })

        const token = await usersService.login(userMock)

        expect(token).toBeTruthy()
    })

    it('If it throw an error tring to generate token', async () => {
        jest.spyOn(axios, 'post').mockRejectedValueOnce({
            data: {}
        })

        await expect(usersService.login(userMock)).rejects
            .toHaveProperty('message', 'Credenciais inválidas')
    })
})