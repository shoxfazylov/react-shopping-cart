export const getCookie = (name: string, source = document) => {
  const v = source?.cookie?.match(`(^|;) ?${name}=([^;]*)(;|$)`)
  return v && v[2] !== 'null' ? v[2] : null
}

export const setCookie = <T>(name: string, value: T, days = 1) => {
  const d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`
}

export const deleteCookie = (name: string) => {
  setCookie(name, null, -1)
}
