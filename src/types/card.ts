import type { Component } from 'vue'

export interface Actions {
  id: string
  icon: Component
  action: string | Function
}

export interface UserInfo {
  id: string
  icon: Component
  href: string
  value: string
  target?: string
}
