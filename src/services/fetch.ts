import type { Config } from '@/types/api'
import { Method } from '@/types/api'
import type { User } from '@/types/user'


export function ApiHelper(url: string, data: Object = {}, method: Method = Method.POST): Promise<User[] | void> {
  const config: Config = { method, headers: { 'Content-Type': 'application/json' } }
  method === 'POST' && (config.body = JSON.stringify(data))
  return fetch(url, config)
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        console.log(error)
      }
    )
}
