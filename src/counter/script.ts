'use strict'

import * as dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

document.addEventListener('DOMContentLoaded', () => {
    const now = dayjs()
    const target = dayjs('2023-12-8 18:00:00')
    const diff = target.diff(now, 'days')
    if (diff <= 0) {
        const diff2 = target.diff(now, 'hours')
        document.getElementById('text').innerText = 'H-' +  diff2.toString()
    } else {
        document.getElementById('text').innerText = 'J-' +  diff.toString()
    }
})
