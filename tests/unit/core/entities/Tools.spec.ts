import { expect, describe, it } from '@jest/globals';
import Tool from '../../../../src/core/entities/Tool'

describe('Tools', () => {
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

/*     it('If it builds a tool with a description longer than 256 chars', () => {
        const toolDTO = {
            title: '',
            link: 'https://notion.so',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet justo at elit suscipit luctus et ut dolor.'
             + 'Praesent quis tristique libero, commodo semper elit. Sed imperdiet id sapien vel commodo. Suspendisse non commodo eros. '
             + 'Suspendisse eleifend et risus in bibendum. Pellentesque luctus rutrum enim sed tincidunt.'
             + 'Pellentesque sed ex sed tortor semper tincidunt. Fusce ac sapien urna. Sed nec feugiat lorem, quis pulvinar nunc.',
            tags: [
                'organization',
                'planning',
                'collaboration',
                'writing',
                'calendar'
            ]
        }

        const tool = Tool.build(toolDTO)
        console.log(tool)
        expect(tool).not.toBeUndefined();
    })  */
})