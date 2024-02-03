import type { StatusBarAnimation, StatusBarStyle } from 'react-native'

const StatusThemeStyles: Array<StatusBarStyle> = ['default', 'light-content', 'dark-content'] as const
const StatusThemeAnim: Array<StatusBarAnimation> = ['fade', 'none', 'slide'] as const

export { StatusThemeStyles, StatusThemeAnim }