import path from 'path'
import  { Configuration } from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildPlatform } from './config/types'

type Env = {
    mode?: Configuration['mode'],
    port?: Configuration['devServer']['port']
    platform?: BuildPlatform
    analyzer?: boolean
}

export default ({
    mode = 'development',
    port = 3000,
    platform = 'desktop',
    analyzer
}: Env) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, '_dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }

    return buildWebpack({ mode, port, paths, platform, analyzer })
}
