import settings from 'electron-settings'
import setup from './setup.js'

settings.clearSync()

settings.get('setup').then(ready => {
  if (!ready) {
    setup()
  }
})
