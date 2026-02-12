"use client";

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThreePIcon from '@mui/icons-material/ThreeP';
import {
    Box,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    SpeedDialProps,
    styled,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Style SpeedDial to float in bottom-right
const StyledSpeedDial = styled(SpeedDial)<SpeedDialProps>(({ theme }) => ({
    position: 'relative',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
}));

const actions = [
    { icon: <PlaylistAddIcon />, name: 'Add Task' },
    { icon: <ThreePIcon />, name: 'Chat with Bot' },
];

export default function SpeedDialMain() {
    const [direction, setDirection] = useState<SpeedDialProps['direction']>('up');
    const router = useRouter();

    const handleActionClick = (actionName: string) => {
        switch(actionName) {
            case 'Add Task': 
                router.push('/form');
                break;
            case 'Chat with Bot':
                router.push('/chat')
                break;
            default:
                break;
        }
    }

    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, height: 'auto', position: 'relative', }}>
            <StyledSpeedDial
                ariaLabel="SpeedDial playground example"
                icon={<SpeedDialIcon />}
                direction={direction}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        className='fixed top-0 right-0'
                        tooltipTitle={action.name}
                        onClick={() => handleActionClick(action.name)}
                    />
                ))}
            </StyledSpeedDial>
        </Box>
    );
}