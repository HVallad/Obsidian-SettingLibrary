import {Plugin} from 'obsidian';
import {PluginSettings, DEFAULT_SETTINGS} from './Settings'

export class SettingPlugin extends Plugin{
    settings: PluginSettings;

    onload() {

    }
    onunload(){

    }
    
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}