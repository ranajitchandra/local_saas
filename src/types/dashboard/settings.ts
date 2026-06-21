export type SettingMenu = {
    id: string;
    label: string;
    path: string;
};

export type NotificationSetting = {
    id: string;
    title: string;
    description: string;
    email: boolean;
    sms?: boolean;
    push?: boolean;
};