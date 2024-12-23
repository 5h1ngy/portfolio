export type Repository = {
    _id: number,
    created: string,
    updated: string,
    url: string,
    title: string,
    topics?: string[],
    thumbnail?: string,
    description?: string,
    readme?: string,
}