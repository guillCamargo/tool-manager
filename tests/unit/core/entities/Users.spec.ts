import User from '../../../../src/core/entities/User'

describe('Users', () => {
    const originalEnv = process.env

    afterEach(() => {
        process.env = originalEnv
    })

    it('If it builds tool', async () => {
        const userDTO = {
            username: 'nimda',
            password: '54321',
        }

        const user = User.build(userDTO)
        expect(user).toBeTruthy()
    })
})