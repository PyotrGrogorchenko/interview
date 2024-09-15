import { Configuration } from 'webpack'

export interface BuildPaths {
    entry: string
    html: string
    public: string
    output: string
    src: string
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
    port: Configuration['devServer']['port']
    paths: BuildPaths
    mode: Configuration['mode']
    platform: BuildPlatform
    analyzer?: boolean
}