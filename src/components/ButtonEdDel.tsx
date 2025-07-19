"use client"

import { DashboardCustomize, DeleteForever, EditSquare } from "@mui/icons-material";
import Button from "@mui/material/Button"
import { useEffect, useState } from "react";
import DivButtonTodo from "./DivButton";

const ButtonEdDel = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('relize', handleResize);
        
        return () => window.removeEventListener('relize', handleResize);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleMouseUp = () => {
        setIsHovered(true);
    }

    const handleMouseDown = () => {
        setIsHovered(false);
    }

    
    return(
        <DivButtonTodo>
            <Button
                sx={{
                    minWidth: isHovered ? '86px' : '24px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    gap: '8px',
                    margin: '0',
                    padding: '0',
                    color: 'rgba(0, 0, 0, 0.87)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'rgba(0, 0, 0, 0.95)'
                    }
                }}
                onMouseUp={handleMouseUp}
                onMouseDown={handleMouseDown}
            >
                {isHovered ? (
                    <>
                        <EditSquare />
                        <DeleteForever />
                    </>
                ) : (
                    windowWidth < 480 ? (
                        <DashboardCustomize />
                    ) : (
                        <div className="flex items-center justify-center gap-1">
                            <h3 className="text-sm font-medium text-gray-700">
                                Settings
                            </h3>
                            <DashboardCustomize />
                        </div>
                    )
                )}
            </Button>
        </DivButtonTodo>
    )
}

export default ButtonEdDel;