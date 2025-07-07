"use client"

import { useState } from "react";
import { DivBlockToDO } from "./todoItem";
import { Menu, MenuItem } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

interface DivBlockToDOProps {
    children : React.ReactNode
}

const DashBoardBlock: React.FC<DivBlockToDOProps> = ({children}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openFunc = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseFunc = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <DivBlockToDO>
                <button onClick={handleClick}>
                    <DescriptionIcon className="text-black" />
                </button>
            </DivBlockToDO>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openFunc}
                onClose={handleCloseFunc}
                slotProps={{
                list: {
                    'aria-labelledby': 'basic-button',
                },
                }}
            >
                <MenuItem onClick={handleCloseFunc}>
                    {children}
                </MenuItem>
            </Menu>
        </div>
    )
}

export default DashBoardBlock;