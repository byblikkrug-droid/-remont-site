import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const callbacksFile = path.join(dataDir, 'callbacks.json')
const usersFile = path.join(dataDir, 'users.json')

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

function readData(file: string): any[] {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf-8'))
    }
  } catch {
    return []
  }
  return []
}

function writeData(file: string, data: any[]) {
  ensureDataDir()
  fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

export function getCallbacks() {
  return readData(callbacksFile)
}

export function saveCallback(callback: any) {
  const callbacks = getCallbacks()
  callbacks.push(callback)
  writeData(callbacksFile, callbacks)
}

export function updateCallback(id: string, status: string) {
  const callbacks = getCallbacks()
  const index = callbacks.findIndex((c: any) => c.id === id)
  if (index !== -1) {
    callbacks[index].status = status
    writeData(callbacksFile, callbacks)
  }
}

export function deleteCallback(id: string) {
  const callbacks = getCallbacks().filter((c: any) => c.id !== id)
  writeData(callbacksFile, callbacks)
}

export function getUsers() {
  return readData(usersFile)
}

export function saveUser(user: any) {
  const users = getUsers()
  users.push(user)
  writeData(usersFile, users)
}

export function findUserByEmail(email: string) {
  return getUsers().find((u: any) => u.email === email)
}