import { expect, describe, it } from '@jest/globals'
import Tool from '../../../../src/core/entities/Tool'
import dotenv from 'dotenv'
dotenv.config()

describe('Tools', () => {
    const originalEnv = process.env

    afterEach(() => {
        process.env = originalEnv
    })

    it('If it builds tool', async () => {
        const toolDTO = {
            title: 'Notion',
            link: 'https://notion.so',
            description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
            tags: [
                'organization',
                'planning',
                'collaboration',
                'writing',
                'calendar'
            ]
        }

        const tool = Tool.build(toolDTO)
        expect(tool).not.toBeUndefined();
    })
})