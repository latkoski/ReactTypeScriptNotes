import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/Note';

interface ICreateNoteProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FC<ICreateNoteProps> = ({notes, setNotes}) => {

    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(titleRef.current?.value === "" || textRef.current?.value === ""){
            return setError("All fields are mandatory");    
        }

        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
        (colorRef.current as HTMLInputElement).value = "#dfdfdf";


    }
    return (
            <>
            <h2>Create note</h2>
            { error && <Alert variant="danger">{error}</Alert>}
            <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" ref={titleRef} placeholder="Enter title for the note"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control as="textarea" 
                    rows={3}
                    ref={textRef}
                    placeholder="Enter description for the note"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="colorInput">Note color</Form.Label>
                    <Form.Control type="color" ref={colorRef} id="colorInput" defaultValue="#dfdfdf"
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </Form>
            </>
    );
};

export default CreateNote;
