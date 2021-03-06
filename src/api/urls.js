function getURL(url){
  return (process.env.NODE_ENV==='test' ? 'http://127.0.0.1' : '') + url
}

export const PROJECTS_API = getURL('/v1/projects')
export const LIBRARY_API = getURL('/v1/library')
export const USER_API = getURL('/v1/auth/status')
export const LOGIN_API = getURL('/v1/auth/login')
export const LOGOUT_API = getURL('/v1/auth/logout')
export const REGISTER_API = getURL('/v1/auth/signup')