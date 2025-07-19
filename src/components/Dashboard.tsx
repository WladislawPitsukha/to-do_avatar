"use client"

import { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import DivButtonTodo from "./DivButton";
import { DivBlockTodoProps } from "./todoItem";

const DashBoardBlock: React.FC<DivBlockTodoProps> = ({children}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openFunc = Boolean(anchorEl);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('relize', handleResize);
        
        return () => window.removeEventListener('relize', handleResize);
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseFunc = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <DivButtonTodo>
                <button onClick={handleClick}>
                    {windowWidth < 480 ? (
                        <DescriptionIcon className="text-black" />
                    ) : (
                        <div className="flex items-center justify-center gap-1">
                            <h3 className="text-sm font-medium text-gray-700">
                                Description: 
                            </h3>
                            <DescriptionIcon className="text-black" />
                        </div>                    
                    )}
                </button>
            </DivButtonTodo>
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