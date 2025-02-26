//FawasAjani-G00413222
import Card from 'react-bootstrap/Card'; // Import react-bootstrap
import { Link } from 'react-router-dom'; // Import react-router
import Button from 'react-bootstrap/Button'; // Import react-bootstrap button
import axios from 'axios'; // Import axios

function CafeItems(props) {
    // Extracting individual properties from the myCoffee object passed as props
    const { name, description, imageUrl, origin, roast, _id } = props.myCoffee;

    // Function to handle deletion of a coffee item
    const handleDelete = () => {
        axios.delete('http://localhost:4000/api/cafe/' + _id)
            .then((res) => {
                props.onDelete(_id); // Call the onDelete function passed as a prop
            })
            .catch((error) => {
                console.log(error); // Log any errors
            });
    };

    return (
        <section>
            <div className="custom-section">
                <div className="container">
                    <div className="row">
                        {/* Display each coffee item in a futuristic card */}
                        <Card className="mb-3 custom-card cyber-card d-flex flex-column" style={{ minHeight: '450px' }}>
                            <Card.Header as="h5" className="cyber-card-header">{name}</Card.Header> {/* Coffee name */}
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={imageUrl}
                                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                                    alt={`A delicious cup of ${name}`}
                                />
                                <Card.Text className="cyber-card-text">
                                    {description} {/* Coffee description */}
                                </Card.Text>
                                <footer className="blockquote-footer cyber-footer">
                                    Origin: <span className="cyber-highlight">{origin}</span> <br />
                                    Roast: <span className="cyber-highlight">{roast}</span>
                                </footer>
                            </Card.Body>
                            <Card.Footer className="cyber-card-footer">
                                {/* Edit button */}
                                <Link to={'/edit/' + _id} className="btn cyber-btn-edit float-right">Edit</Link>
                                {/* Delete button */}
                                <Button variant="danger" onClick={handleDelete} className="cyber-btn-delete ml-2">Delete</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CafeItems;
