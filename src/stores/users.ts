import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { ApiHelper } from '@/services/fetch'
import { Method } from '@/types/api'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[]
  }),

  actions: {
    async getUsers(): Promise<void> {
      const userApiUrl = 'https://jsonplaceholder.typicode.com/users'
      const avatarApiUrl = (username: string) =>
        `https://avatars.dicebear.com/v2/avataaars/%7B%7B${username}%7D%7D.svg?options%5bmood%5d%5b%5d=happy`

      const users: User[] = await ApiHelper(userApiUrl, {}, Method.GET) || []
      this.users = users
      this.users.forEach((user: User) => {
        user.avatar = avatarApiUrl(user.username)
      })
    },
    async updateUser(user: User): Promise<void> {
      const userApiUrl = `https://jsonplaceholder.typicode.com/users/${user.id}`

      const updatedUser: any = await ApiHelper(userApiUrl, user, Method.PUT)
      if(updatedUser.id) {
        const userIndex = this.users.findIndex((user: User) => user.id === updatedUser.id)
        this.users[userIndex] = user
      }
    },
    async deleteUser(userId: number): Promise<void> {
      const userApiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`

      await ApiHelper(userApiUrl, {}, Method.DELETE)
      const userIndex = this.users.findIndex((user: User) => user.id === userId)
      this.users.splice(userIndex, 1)
    }
  }
})
