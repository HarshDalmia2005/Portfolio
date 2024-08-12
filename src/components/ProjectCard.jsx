import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ProjModal from './ProjModal';
import './Project.css'

function ProjectCard({ img, title, info, link }) {
    const [show, setShow] = useState(false);

    return (
        <Card className='project-card'>
            <Card.Img
                variant="top"
                src={img}
                className='project-card-img'
            />
            <Card.Body className='bg-black'>
                <Card.Title className='text-white font-bold'>{title}</Card.Title>
                <Card.Text className='text-white'>
                    {info.length > 200 ? `${info.substring(0, 200)}...` : info}
                </Card.Text>
                <div className='card-buttons'>
                    <Button variant="primary">
                        <a href={link} className='text-light no-underline'>See Code</a>
                    </Button>
                    <Button variant="primary" className='ml-2' onClick={() => setShow(true)}>
                        Read More
                    </Button>
                </div>
                <ProjModal
                    show={show}
                    onHide={() => setShow(false)}
                    title={title}
                    info={info}
                />
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
