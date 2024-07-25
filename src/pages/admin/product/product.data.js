import * as Yup from 'yup';
import ImageComponent from '../../../components/ImageComponent';
import TableButton from '../../../components/TableButton'

export const bakeryProductsCol = [
    {
        field: "image", flex: 0.6, cellRenderer: ({ data }) => {
            return <ImageComponent src={data.image} alt={data.name} />
        }
    },
    { field: "productName", flex: 1.5, filter: true, floatingFilter: true },
    { field: "category", flex: 1, filter: true, floatingFilter: true },
    {
        field: "flavor", flex: 1, filter: true, floatingFilter: true, editable: true, cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: ['Chocolate', 'Vanilla', 'Mint'],
        },
    },
    { field: "productDescription", headerName: 'description', flex: 1.5, filter: true, floatingFilter: true },

    { field: "weight", flex: 0.6, filter: true, floatingFilter: true },
    { field: "price", flex: 0.6, filter: true, floatingFilter: true },

    {
        field: "edit", flex: 0.5,
        cellRenderer: ({ data }) => {
            return <TableButton id={data.id} name='edit' color='warning'  caller='product'/>
        },

    },
    {
        field: "delete", flex: 0.5,
        cellRenderer: ({ data }) => {
            return <TableButton id={data.id} name='delete' color='error' caller='product' />
        },
    },

]


export const validationSchema = Yup.object({
    productName: Yup.string().required("Please enter product name"),
    productDescription: Yup.string().required("Please enter product description"),
    price: Yup.number()
        .required("Please enter product price")
        .positive("Price must be a positive number"),
    category: Yup.string().required("Please select a category"),
    flavor: Yup.string().required("Please select a flavor"),
    weight: Yup.number()
        .required("Please enter weight")
        .positive("Weight must be a positive number"),
    image: Yup.string().required("Please upload a product image"),
});

export const initialState = {
    productName: '',
    productDescription: '',
    price: '',
    category: '',
    flavor: '',
    weight: '',
    image: '',
    available: true,
  };