import type { Options } from "lru-cache"
import type { RequestInit } from "node-fetch"

export type Version = 1 | 2

export type ValueOf<T> = T[keyof T]
export type Nullable<T> = T | null

export enum BotFlags {
    NONE = 0 << 0,
    OFFICIAL = 1 << 0,
    KOREANBOTS_VERIFIED = 1 << 2,
    PARTNER = 1 << 3,
    DISCORD_VERIFIED = 1 << 4,
    PREMIUM = 1 << 5,
    HACKATHON_BOT = 1 << 6
}

export enum UserFlags {
    NONE = 0 << 0,
    ADMINISTRATOR = 1 << 0,
    BUG_HUNTER = 1 << 1,
    BOT_REVIEWER = 1 << 2,
    PREMIUM_USER = 1 << 3
}

export type BotStatus =
    "online" |
    "idle" |
    "dnd" |
    "streaming" |
    "offline"


export type BotState =
    "ok" |
    "reported" |
    "blocked" |
    "private" |
    "archived"

export type Category =
    "관리" |
    "뮤직" |
    "전적" |
    "게임" |
    "도박" |
    "로깅" |
    "슬래시 명령어" |
    "웹 대시보드" |
    "밈" |
    "레벨링" |
    "유틸리티" |
    "대화" |
    "NSFW" |
    "검색" |
    "학교" |
    "코로나19" |
    "번역" |
    "오버워치" |
    "리그 오브 레전드" |
    "배틀그라운드" |
    "마인크래프트"


export type Library =
    "discord.js" |
    "Eris" |
    "discord.py" |
    "discordcr" |
    "Nyxx" |
    "Discord.Net" |
    "DSharpPlus" |
    "Nostrum" |
    "coxir" |
    "DiscordGo" |
    "Discord4J" |
    "Javacord" |
    "JDA" |
    "Discordia" |
    "RestCord" |
    "Yasmin" |
    "disco" |
    "discordrb" |
    "serenity" |
    "SwiftDiscord" |
    "Sword" |
    "harmony" |
    "기타" |
    "비공개"

export interface FetchResponse<T = unknown> {
    code: number
    data: T | null
    message?: string
    isCache: boolean
    ratelimitRemaining: number
    url: string
    updatedTimestamp?: number
}

export interface BaseOptions {
    noWarning?: boolean
}

export interface KoreanbotsOptions extends BaseOptions {
    apiOptions: APIClientOptions
    botOptions: BotManagerOptions
    userOptions: UserManagerOptions
    clientID: string
}

export interface APIClientOptions extends BaseOptions {
    version: Version
    token: string
    cacheOptions: Options<unknown, unknown>
    requestTimeout: number
    retryLimit: number
    unstable: boolean
}

export interface BotManagerOptions extends BaseOptions {
    max?: number
    maxAge?: number
}

export type UserManagerOptions = BotManagerOptions

export interface InternalFetchCache {
    method: string
    url: string
    options?: RequestInit
}

export interface ProxyValidator<T> {
    set(obj: T, prop: keyof T, value: ValueOf<T>): boolean
}

export interface RawBotInstance {
    id: string
    name: string
    tag: string
    avatar: Nullable<string>
    owners: RawUserInstance[]
    flags: number
    lib: Library
    prefix: string
    votes: number
    servers: number
    intro: string
    desc: string
    web: Nullable<string>
    git: Nullable<string>
    url: Nullable<string>
    discord: Nullable<string>
    category: Category[]
    vanity: Nullable<string>
    bg: Nullable<string>
    banner: Nullable<string>
    status?: Nullable<BotStatus>
    state: BotState
}

export interface RawUserInstance {
    id: string
    username: string
    tag: string
    github: Nullable<string>
    flags: UserFlags
    bots: (string | RawBotInstance)[]
}
