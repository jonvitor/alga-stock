import React, { useState } from 'react'
import Form from '../../shared/Form'
import Input from '../../shared/Input';
import Button from '../../shared/Button';

const initialFormState = {
    name:  '',
    price: '',
    stock: ''
}

const ProductForm = () => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form onSubmit={() => console.log(form)}>
        <Input
            onChange={handleInputChange}
            name="name"
            label="Name"
            placeholder="E.g: Cookie"
            required
            />
        <Input
            onChange={handleInputChange}
            name="price"
            label="Price"
            type="Number"
            step="0.01"
            placeholder="E.g: 1.25"
            required
        />
        <Input
            onChange={handleInputChange}
            name="stock"
            label="Stock"
            type="Number"
            placeholder="E.g: 20"
            required
        />
        <Button>
            Submit
        </Button>
    </Form>
}

export default ProductForm;