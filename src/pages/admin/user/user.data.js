import * as Yup from 'yup';
import ImageComponent from '../../../components/ImageComponent';
import TableButton from '../../../components/TableButton'

export const usersCol = [
    {
        field: "image", flex: 0.6, cellRenderer: ({ data }) => {
            return <ImageComponent src={data.image} alt={data.name} />
        }
    },
    { field: "name", flex: 1.5, filter: true, floatingFilter: true },
    { field: "field", flex: 0.8, filter: true, floatingFilter: true },
    {
        field: "role", flex: 0.8, filter: true, floatingFilter: true,
    },
    { field: "joined", headerName: 'joined', flex: 0.8, filter: true, floatingFilter: true },
    { field: "mobile", headerName: 'Contact no', flex: 1, filter: true, floatingFilter: true },
    { field: "email", headerName: 'Email ID', flex: 1.4, filter: true, floatingFilter: true },

    { field: "working", flex: 0.4, filter: true, floatingFilter: true },
    { field: "salary", flex: 0.6, filter: true, floatingFilter: true },
    { field: "address", flex: 0.6, filter: true, floatingFilter: true },

    {
        field: "edit", flex: 0.7,
        cellRenderer: ({ data }) => {
            return <TableButton id={data.id} name='edit' color='warning' caller='user' />
        },

    },
    {
        field: "delete", flex: 0.7,
        cellRenderer: ({ data }) => {
            return <TableButton id={data.id} name='delete' color='error' caller='user' />
        },
    },

]


export const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    field: Yup.string().required("Please enter your field"),
    role: Yup.string().required("Please enter your role"),
    joined: Yup.date()
        .required("Please enter the date you joined")
        .min(new Date(2020, 0, 1), "Join date cannot be before 01/01/2020")
        .max(new Date(), `Join date cannot be After ${new Date().toLocaleString()}`),
    working: Yup.boolean().required("Please specify if currently working"),
    salary: Yup.number()
        .required("Please enter your salary")
        .positive("Salary must be a positive number"),
    image: Yup.string().required("Please upload a profile image"),
    address: Yup.string().required("Please enter your address"),
    mobile: Yup.string()
        .required("Please enter your mobile number")
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
    email: Yup.string()
        .required("Please enter your email")
        .email("Invalid email address"),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
});

export const initialState = {
    name: '',
    field: '',
    role: '',
    joined: '',
    working: true,
    salary: '',
    image: '',
    address: '',
    mobile: '',
    email: '',
    password: ''
};