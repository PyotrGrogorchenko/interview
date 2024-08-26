import { PluginItem } from '@babel/core'

export const removeDataTestIdBabelPlugin = (): PluginItem => {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props || []
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name
                        if (forbiddenProps.includes(current.node.name)) {
                            current.parentPath.remove()
                        }
                    }
                })

            }
        }
    }
}
