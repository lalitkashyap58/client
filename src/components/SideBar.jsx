import { Drawer } from '@mui/material';
import SideBarContent from './SideBarContent';

const SideBar = ({openDrawer}) =>
{
    return (
        <div>
            
            <Drawer
                anchor='left'
                open={openDrawer}
                hideBackdrop={true}
                ModalProps={{ keepMounted: true }}
                variant='persistent'
                sx={
                    {
                        '& .MuiDrawer-paper': {
                            marginTop: '64px',
                            width: "250px",
                            background: 'F5F5F5',
                            borderHeight: 'none',
                            height:'calc(100vh-64px)'

                        }
                    }}
            >
                <SideBarContent />
                </Drawer>
            <h1>SideBar</h1>
        </div>
    )
}
export default SideBar;