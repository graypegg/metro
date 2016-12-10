function serviceState (online) {
  if (online === null) {
    return 'inactive'
  } else if (online === false) {
    return 'offline'
  } else if (online === true) {
    return 'online'
  } else {
    console.log('shit fucked up', online)
  }
}

export { serviceState }
