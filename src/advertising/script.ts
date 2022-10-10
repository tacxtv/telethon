'use strict'

import Alpine from 'alpinejs'
import * as dayjs from 'dayjs'
import 'dayjs/locale/fr'
import {Dayjs} from "dayjs";

// @ts-ignore
window.Alpine = Alpine
dayjs.locale('fr')

// noinspection JSUnusedGlobalSymbols
Alpine.store('app', {
    title: null,
    interval: 60 * 1_000,
    duration: 8 * 1_000,
    spawn: 60,
    unit: 'minutes',
    open: false,
    lastUsed: null,
    image: null,
    init(): void {
        const params = new URLSearchParams(document.location.search)
        const interval = parseInt(params.get('interval'))
        if (interval >= 1) this.interval = interval * 1_000
        const duration = parseInt(params.get('duration'))
        if (duration >= 1) this.duration = duration * 1_000
        const spawn = parseInt(params.get('spawn'))
        if (spawn >= 1) this.spawn = spawn
        const unit = params.get('unit')
        if (unit === 'minutes' || unit === 'hours') this.unit = unit
        const debug = parseInt(params.get('debug')) === 1
        if (debug) this.debug()

        // this.lastUsed = window.localStorage.getItem('lastUsed')

        document.addEventListener('DOMContentLoaded', () => {
            if (params.has('image')) document.getElementById('advertising-image').style['background-image'] = `url(${params.get('image')})`

            this.intervalFunction()
            setInterval(() => this.intervalFunction(), this.interval)
        })
    },
    intervalFunction(): void {
        const now = dayjs()

        if (now.add(-this.spawn, this.unit).valueOf() >= this.lastUsed) {
            this.open = true
            const handler = setTimeout(() => {
                this.open = false
                clearTimeout(handler)
            }, this.duration)
            this.lastUsed = now.valueOf()
            window.localStorage.setItem('lastUsed', this.lastUsed)
        }
    },
    debug(): void {
        this.spawn = 0.2
        this.interval = 1_000
        this.duration = 4_000
    },
})

Alpine.start()
