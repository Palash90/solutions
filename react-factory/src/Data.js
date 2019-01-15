var palashData = {
    name: 'App',
    isPredefined: false,
    nestedComponents: [
        {
            id: 'home',
            isPredefined: true,
            data: {
                user:
                {
                    name: 'Palash',
                    age: 28,
                    components: ['home']
                }
            }
        }
    ]
};

var praptiData = {
    name: 'App',
    isPredefined: false,
    nestedComponents: [
        {
            id: 'home',
            isPredefined: true,
            data: {
                user:
                {
                    name: 'Prapti',
                    age: 3,
                    components: ['home', 'svg']
                }
            }
        }, {
            id: 'svg',
            isPredefined: true,
            data: {
                measurement:
                {
                    cx: 100,
                    cy: 100,
                    r: 80,
                    color: 'magenta'
                }
            }
        }
    ]
};

var totanData = {
    name: 'App',
    isPredefined: false,
    nestedComponents: [
        {
            id: 'home',
            isPredefined: true,
            data: {
                user:
                {
                    name: 'Totan',
                    age: 24,
                    components: ['home', 'table', 'svg']
                }
            }
        }, {
            id: 'table',
            isPredefined: true,
            data: {
                table: [
                    [1, 2, 3, 4, 5, 6, 7, 9],
                    [4, 5, 6, 1, 3, 45, 6, 6]
                ]
            }
        }, {
            id: 'svg',
            isPredefined: true,
            data: {
                measurement:
                {
                    cx: 100,
                    cy: 100,
                    r: 120,
                    color: 'blue'
                }
            }
        }
    ]
};

export function appData(user) {
    if (user === 'palash') {
        return palashData;
    } else if (user === 'prapti') {
        return praptiData;
    } else if (user === 'totan') {
        return totanData;
    } else {
        return null;
    }
}