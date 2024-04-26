export interface PluginSettingObject<T = object> {
    Value: T
    DefaultValue: T,
    Name: string,
    Description: string,
}

export interface PluginSettings {
	mySetting: PluginSettingObject<string>;
    mySetting2: PluginSettingObject<string>;
    mySetting3: PluginSettingObject<boolean>;
}


export const DEFAULT_SETTINGS: PluginSettings = {
	mySetting: {
        Value: "" ,
        DefaultValue: "Enter your secret",
        Name: "Setting #1",
        Description: "It\'s a secret"
    },
    mySetting2: {
        Value: "" ,
        DefaultValue: "Trying 2",
        Name: "Setting 2",
        Description: "Finally an easy way to add these"
    },
    mySetting3: {
        Value: false ,
        DefaultValue: false,
        Name: "Setting 2",
        Description: "Finally an easy way to add these"
    }

}
