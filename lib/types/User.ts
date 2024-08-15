import { Section, User } from "../../prisma/generated/client";

export type UserWithAge = User & {
    age?: number | null
}

export type updateUserType = {
    email: string,
    sectionId: number,
    name?: string
}

export type UserWithSection = User & {
    Section: Section,
    section_name?: string,
    section_code?: string
}

export type UserWithSectionService = {
    name: string | null,
    email: string,
    section_name: string,
    section_code: string
}

export type useGetAllUserType = {
    data: User[],
    state: boolean,
    isError: boolean,
    mutate?: () => void
}

