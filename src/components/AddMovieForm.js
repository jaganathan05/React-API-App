import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import './AddMovieForm.css'


function AddMovieForm() {

    const titleref = useRef()
    const openingtextref = useRef()
    const releaseDateRef = useRef()


    const formsubmit = async ()=>{
        const newmovieobj = {
            title : titleref.current.value,
            openingtext : openingtextref.current.value,
            releaseDate : releaseDateRef.current.value
        }

        console.log(newmovieobj);

        const response = await fetch('https://crudcrud.com/api/98f1e542235b42ce91590b12cb4d721f/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newmovieobj)
        })

        titleref.current.value=''
        openingtextref.current.value=''
        releaseDateRef.current.value=''


    }
    return (
        <React.Fragment>
          <Form className="box">
            <FloatingLabel className="mb-3"
              controlId="titleinput" label="Title">
              <Form.Control
                type="text"
    
                placeholder="Enter movie title"
                ref={titleref}
              ></Form.Control>
            </FloatingLabel>
            <FloatingLabel className="mb-3"
              controlId="openingtextinput" label="Opening Text">
              <Form.Control
                type="text"
        
                placeholder="Opening text"
                ref={openingtextref}
              ></Form.Control>
            </FloatingLabel>
            <FloatingLabel className="mb-3"
              controlId="releasedateinput" label="Release Date">
              <Form.Control
                type="text"
        
                placeholder="Enter movie title"
                ref={releaseDateRef}
              ></Form.Control>
            </FloatingLabel>
            <Button onClick={formsubmit} >SUBMIT</Button>
          </Form>
        </React.Fragment>
      );
}

export default AddMovieForm;
