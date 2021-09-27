import WebStorage from '@kazura/web-storage'

export const demoStorage = new WebStorage(window.localStorage, 'DEMO', String)
