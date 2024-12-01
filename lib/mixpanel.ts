"use client"
import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || ''

if (typeof window !== 'undefined') {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: true,
    persistence: 'localStorage'
  })
}

export const track = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    mixpanel.track(eventName, properties)
  }
}
