import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required("Please enter name"),
    image: Yup.string().required("Image is required"),
    type: Yup.string().required("Please add type"),
    description: Yup.string("description should be string")
})
