import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../sass/add.scss'


const Add = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((api) => setData(api))
  }

  function handleAdd(val) {
    fetch("http://localhost:9000/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
    .then((res)=>res.json())
    .then(api=>{
      getAll()
    })
  }

    function handleDelete(id) {
      fetch("http://localhost:9000/" +id, { method: "DELETE"})
      .then((res)=>res.json())
      .then(api=>{
        getAll()
      })
    
  }
  return (
    <div className='add'>
      <Formik
        initialValues={{ name: '', img: '', category: '', price: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          img: Yup.string().required('Required'),
          category: Yup.string().required('Required'),
          price: Yup.number().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="img">Image</label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />

          <label htmlFor="category">Category</label>
          <Field name="category" type="category" />
          <ErrorMessage name="category" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table border={1}>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Delete</th>

      </tr>


      {data.map(item => (
        <tr>
          <td><img width={120} src={item.img} alt="" /></td>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>$ {item.price}</td>
          <td><i class="fa-solid fa-trash-can" onClick={() => handleDelete(item._id)}></i></td>
        </tr>
      ))}
    </table>


    </div>
  )

}

export default Add