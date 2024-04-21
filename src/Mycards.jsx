import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const Mycards = (props) => {
return (
<>
<Card style={{ width: "500px", height: "550px", borderRadius: "15px" }}>
<Card.Img variant="top" 
src={props.image}
style={{width: "100%", height: "300px", objectFit: "cover"}}
/>
<Card.Body>
<Card.Title> {props.name}</Card.Title>
<Card.Text>
    {props.description}
</Card.Text>
<Tags text={props.text} color={props.color} />
</Card.Body>
</Card>
</>
);
};
export default Mycards;