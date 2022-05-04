export const fetchDataProduct = () => {
    axios
        .get("https://625d83154c36c75357761d85.mockapi.io/Product")
        .then((respone) => {
            return respone.data;
        });
}

const createNewProduct = (name, img, price, discount, tag, inStock, detail) => {
    axios
        .post(`https://625d83154c36c75357761d85.mockapi.io/Product`, {
            name, img, price, discount, tag, inStock, detail
        })
}

const deleteProduct = (id) => {
    axios.delete(`https://625d83154c36c75357761d85.mockapi.io/Product/${id}`)
}