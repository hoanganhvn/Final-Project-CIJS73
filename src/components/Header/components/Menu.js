import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    bgcolor: 'background.paper',
    fontWeight: 500,
    fontSize: 16,
    textAlign: 'center',
};
const styleItem = {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    '&:hover': {
        color: "#66a55f",
    },
};

function Menu() {

    return (
        <>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <Divider />
                <ListItem button>
                    <ListItemText primary="Trang chủ" primaryTypographyProps={{ sx: styleItem }} />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Giới thiệu" primaryTypographyProps={{ sx: styleItem }} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Sản phẩm" primaryTypographyProps={{ sx: styleItem }} />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Tin tức" primaryTypographyProps={{ sx: styleItem }} />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Khuyến mại" primaryTypographyProps={{ sx: styleItem }} />
                </ListItem>
                <Divider />
            </List>
        </>
    );
}

export default Menu;
