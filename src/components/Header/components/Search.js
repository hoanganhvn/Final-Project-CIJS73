import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import ProductData from "../../../Product.json";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #66a55f',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#66a55f',
        },
        secondary: {
            main: '#66a55f',
        },
    },
});

function Search(props) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = ProductData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    // const clearInput = () => {
    //     setFilteredData([]);
    //     setWordEntered("");
    // };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Modal
                    open={props.openSearch}
                    onClose={props.handleCloseSearch}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center" sx={{ mb: 3 }}>
                            TÌM KIẾM
                        </Typography>
                        <TextField fullWidth label="Tìm Kiếm Sản Phẩm" id="fullWidth" value={wordEntered} onChange={handleFilter} />
                        {filteredData.length !== 0 && (
                            <div className="dataResult">
                                {filteredData.slice().map((value, key) => {
                                    // console.log(value.image);
                                    return (
                                        <div>
                                            <a className="dataItem" href={value.image[0]} target="_blank">
                                                <p> {value.name}</p>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Box>
                </Modal>
            </ThemeProvider>
        </>
    );
}

export default Search;