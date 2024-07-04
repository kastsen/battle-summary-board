import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Col, Row, Tooltip, Typography } from "antd";
import { gameData } from "../data";

const { Title } = Typography;

interface Player {
    id: number;
    name: string;
    score: number;
    state: 'alive' | 'dead';
    isFriend: boolean;
    progress: {
        kills: number;
        deaths: number;
    }
}

interface Team {
    id: number;
    name: string;
    players: Player[];
}

interface GameData {
    teams: Team[];
}

const getWinningTeam = (gameData: GameData): Team | null => {
    if (!gameData.teams.length) {
        return null;
    }

    let winningTeam: Team | null = null;
    let highestScore = 0;

    gameData.teams.forEach(team => {
        const teamScore = team.players.reduce((acc, player) => acc + player.score, 0);
        if (teamScore > highestScore) {
            highestScore = teamScore;
            winningTeam = team;
        }
    });

    return winningTeam;
};

export const SummaryBoard: React.FC = () => {
    const [playersData, setPlayersData] = useState<GameData>();
    const [winnersName, setWinnersName] = useState<string>();

    useEffect(() => {
        setWinnersName(getWinningTeam(gameData as GameData)?.name);
        setPlayersData(gameData as GameData);
    }, []);

    return (
        <div className="container" style={{ maxWidth: '1024px', margin: '0 auto' }}>
            {playersData ? (
                <div>
                    <Row>
                        <Col xs={24} style={{ textAlign: 'center', marginTop: '80px' }}>
                            <Title level={1}>Board</Title>
                        </Col>
                        {playersData.teams.map((team) => (
                            <Col span={12} key={`col-${team.id}`} xs={24} md={12} style={{padding: '48px 22px', order: team.name === winnersName ? 0 : 1}}>
                                <Title level={3}>{team.name === winnersName ? team.name + ' - Winners' : team.name + ' - Losers'}</Title>
                                {team.players.map((player) => (
                                    <Tooltip
                                        key={player.id}
                                        placement="bottomLeft"
                                        title={`${player.progress.kills} kills, ${player.progress.deaths} deaths`}
                                    >
                                        <Card
                                            hoverable
                                            style={{ margin: '10px 0', padding: '10px', overflow: 'hidden' }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Avatar
                                                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${player.id}`}
                                                    className="avatar"
                                                    style={{
                                                        marginRight: '10px',
                                                        width: '60px',
                                                        height: 'auto',
                                                        filter: player.state === 'alive' ? 'none' : 'grayscale(100%)',
                                                    }}
                                                />
                                                <div style={{ width: 'calc(100% - 20px)' }}>
                                                    <Title level={5}>{player.name}</Title>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <div>Score: {player.score}</div>
                                                        <div>State: {player.state}</div>
                                                    </div>
                                                </div>
                                                <Button
                                                    type="primary"
                                                    disabled={!player.isFriend}
                                                    style={{
                                                        width: '60px',
                                                        filter: player.isFriend ? 'none' : 'grayscale(100%)',
                                                    }}
                                                >
                                                    Add
                                                </Button>
                                            </div>
                                        </Card>
                                    </Tooltip>
                                ))}
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (<div>Loading...</div>)}
        </div>
    );
};
