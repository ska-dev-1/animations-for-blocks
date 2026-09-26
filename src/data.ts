import {
	PluginSettings,
	DEFAULT_SETTINGS,
} from './PluginSettings'

declare global {
	interface Window {
		anfbData: {
			unsupportedBlocks: string[]
			settings: PluginSettings
			mobileBreakpoint: number
		}
	}
}

if(!window.anfbData) {
	window.anfbData = {
		unsupportedBlocks: [],
		settings: DEFAULT_SETTINGS,
		mobileBreakpoint: 781,
	}
}

export const unsupportedBlocks = window.anfbData.unsupportedBlocks
export const settings = window.anfbData.settings
export const mobileBreakpoint = window.anfbData.mobileBreakpoint ?? 781
