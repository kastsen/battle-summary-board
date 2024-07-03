export const gameData = {
    "teams": [
        {
            "name": "Team 1",
            "id": 0,
            "players": [
                {
                    "name": "Player1",
                    "id": 0,
                    "score": 1500,
                    "state": "alive",
                    "progress": {
                        "kills": 10,
                        "deaths": 2
                    },
                    "isFriend": false
                },
                {
                    "name": "Player2",
                    "id": 1,
                    "score": 1200,
                    "state": "dead",
                    "progress": {
                        "kills": 8,
                        "deaths": 5
                    },
                    "isFriend": true
                },
                {
                    "name": "Player3",
                    "id": 2,
                    "score": 1100,
                    "state": "alive",
                    "progress": {
                        "kills": 7,
                        "deaths": 3
                    },
                    "isFriend": false
                },
                {
                    "name": "Player4",
                    "id": 3,
                    "score": 1400,
                    "state": "dead",
                    "progress": {
                        "kills": 9,
                        "deaths": 6
                    },
                    "isFriend": true
                },
                {
                    "name": "Player5",
                    "id": 4,
                    "score": 1000,
                    "state": "alive",
                    "progress": {
                        "kills": 6,
                        "deaths": 4
                    },
                    "isFriend": false
                },
                // Добавим ещё 45 игроков
                ...Array.from({ length: 45 }, (_, i) => ({
                    "name": `Player${i + 6}`,
                    "id": i + 5,
                    "score": 800 + (i % 10) * 50,
                    "state": i % 2 === 0 ? "alive" : "dead",
                    "progress": {
                        "kills": 5 + (i % 5),
                        "deaths": 3 + (i % 4)
                    },
                    "isFriend": i % 3 === 0
                }))
            ]
        },
        {
            "name": "Team 2",
            "id": 1,
            "players": [
                {
                    "name": "Player51",
                    "id": 51,
                    "score": 900,
                    "state": "dead",
                    "progress": {
                        "kills": 4,
                        "deaths": 10
                    },
                    "isFriend": false
                },
                // Добавим ещё 49 игроков
                ...Array.from({ length: 49 }, (_, i) => ({
                    "name": `Player${i + 52}`,
                    "id": i + 52,
                    "score": 600 + (i % 10) * 50,
                    "state": i % 2 === 0 ? "dead" : "alive",
                    "progress": {
                        "kills": 3 + (i % 5),
                        "deaths": 2 + (i % 4)
                    },
                    "isFriend": i % 3 === 1
                }))
            ]
        }
    ]
}
