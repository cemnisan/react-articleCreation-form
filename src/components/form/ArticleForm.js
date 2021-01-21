import React from 'react';
import {Form,Button} from 'react-bootstrap';

function ArticleForm(props){
    let resumeData= props.resumeData;
    return(
        <Form className="container">
            {
                resumeData.articleForm.map(item=>{
                    let {controlId,label,type,placeholder,as,rows} = item;
                    return (
                        <Form.Group controlId={controlId}>
                            <Form.Label className="mt-3">{label}</Form.Label>
                            <Form.Control type={type} placeholder={placeholder} as={as} rows={rows} />
                        </Form.Group>
                    )
                })
            }
            <Button variant="primary" type="submit" className="mt-2">
                Submit
            </Button>
        </Form>
    )
}

export default ArticleForm;