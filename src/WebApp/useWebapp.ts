/* init */
export const WebApp: any = (window as any).Telegram.WebApp;
export function initWebApp() {
    WebApp.ready();
    WebApp.expand();

    WebApp.MainButton.setParams({
        text: 'Go back to the bot',
        is_visible: false
    }).onClick(WebApp.close);
}


export function buttonHapticFeedback() {
    WebApp.HapticFeedback.impactOccurred('medium'); // soft | medium | hard | light | heavy | rigid
}

export function isCompleteHapticFeedback() {
    WebApp.HapticFeedback.notificationOccurred('success');
}

export function isNotCompleteHapticFeedback() {
    WebApp.HapticFeedback.notificationOccurred('error');
}

/* requestPhoneNumber */
export function requestPhoneNumber() {
    WebApp.requestContact((isAccepted: boolean) => {
        if (isAccepted) {
            console.log('Phone number accepted');
        } else {
            console.log('Phone number declined');
        }
    });
}

/* Main Button */
export function showMainButton() {
    WebApp.MainButton.show();
}

export function hideMainButton() {
    WebApp.MainButton.hide();
}



/* Cloud STORAGE */
export type SectionID = '1' | '2' | '3' | '4' | '5' | '6' | '7';
type CloudStorage = Record<SectionID, string>;
const storageKeys: SectionID[] = ['1', '2', '3', '4', '5', '6', '7'];

/* setUserProgress */
export function setUserProgress(section: SectionID, isCompleted: boolean) {
    if (!isCloudStorageSupported()) return;

    let timeCompleted = '';

    if (isCompleted) {
        timeCompleted = Math.floor(Date.now() / 1000).toString();
    }

    WebApp.CloudStorage?.setItem?.(section, timeCompleted, (_: any, isSuccess: boolean) => {
        console.log('** Storage updated:', isSuccess);
    });
}
/* getUserProgress */
export function getUserProgress(section: SectionID, callback: (isCompleted: boolean) => void) {
    if (!isCloudStorageSupported()) return;

    WebApp.CloudStorage?.getItem?.(section, (_: any, timeCompleted: string) => {
        console.log('***** Stored value for', section, 'is', timeCompleted);
        callback(timeCompleted !== '');
    });
}
/* calculateProgress */
export function calculateProgress(callback: (result: number) => void) {
    if (!isCloudStorageSupported()) return;

    // WebApp.CloudStorage?.getKeys?.((_: any, keys: any) => {
    //     console.log('** CloudStorage.getKeys', keys);
    // });

    // WebApp.CloudStorage?.removeItems?.(storageKeys, (_: any, isSuccess: boolean) => {
    //     console.log('** Storage removed:', isSuccess);
    //     callback(0)
    // });

    WebApp.CloudStorage?.getItems?.(storageKeys, (_: any, values: CloudStorage) => {
        console.log('***** Stored values for all ', values);

        const completed = storageKeys.filter((key) => !!values[key]).length;
        const total = storageKeys.length;

        const progress = Math.round((completed / total) * 100);

        callback(progress);
    });
}

function isCloudStorageSupported() {
    return WebApp.isVersionAtLeast('6.9');
}
