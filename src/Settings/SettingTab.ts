import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { PluginSettings, PluginSettingObject } from './Settings';
import { SettingPlugin } from './SettingPlugin'; 



export class SettingTab extends PluginSettingTab {
	plugin: SettingPlugin

	constructor(app: App, plugin: SettingPlugin) {
		super(app, plugin);
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		AddTextInputSetting(containerEl, this.plugin, this.plugin.settings.mySetting)
		AddTextInputSetting(containerEl, this.plugin, this.plugin.settings.mySetting2)
		AddBoolInputSetting(containerEl, this.plugin, this.plugin.settings.mySetting3)
	}
}

function AddInputSetting(ContainerObject: HTMLElement, plugin: SettingPlugin, settingObject: PluginSettingObject<Object>): Setting
{
	return new Setting(ContainerObject)
	.setName(settingObject.Name)
	.setDesc(settingObject.Description)
}

function AddTextInputSetting(ContainerObject: HTMLElement, plugin: SettingPlugin, settingObject: PluginSettingObject<string>): void
{
	AddInputSetting(ContainerObject, plugin, settingObject)
		.addText(text => text
			.setPlaceholder(settingObject.DefaultValue)
			.setValue(settingObject.Value)
			.onChange(async (value) => {
				settingObject.Value = value;
				await plugin.saveSettings();
			}));
}

function AddBoolInputSetting(ContainerObject: HTMLElement, plugin: SettingPlugin, settingObject: PluginSettingObject<boolean>): void
{
	AddInputSetting(ContainerObject, plugin, settingObject)
		.addToggle(cb => cb
			.setValue(settingObject.Value)
			.onChange(async (value) => {
				settingObject.Value = value;
				await plugin.saveSettings();
		}));
}
