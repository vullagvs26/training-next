import { User } from '@/prisma/generated/client'
import { fetcher } from '../utils/fetch'
import useSWR from 'swr'
import { useGetAllUserType } from '../types/User'
 
export const useGetAllUser = (): useGetAllUserType => {
    const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher)
 
    return {
        data: data,
        state: isLoading,
        isError: !!error,
        mutate
    }
}