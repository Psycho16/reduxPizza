/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
interface Regexs {
  EMAIL: RegExp
}

export const Regexs: Regexs = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
