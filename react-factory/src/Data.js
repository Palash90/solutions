export function appData() {

    var appData = {
        name: 'App',
        isPredefined: false,
        nestedComponents: [
            {
                id: 'home',
                isPredefined: true,
                data: {
                    user:
                    {
                        name: 'palash',
                        age: 28
                    }
                }
            }
        ]
    };
    return appData;
}