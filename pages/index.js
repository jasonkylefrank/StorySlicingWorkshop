class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Test",
            address: "Some default address",
            phone: "Some default phone"
        };
    }

    onChange = (key, event) => {
        this.setState({[key]: event.target.value});
    }

    render() {
        const { name, address, phone } = this.state;
        console.log("In render, the name is:" + name);
        return (
            <div>
                <h2>Welcom to HAMS!</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={event => this.onChange("name", event)}></input>                   
                </div>

                <div>
                    <label>Address:</label>
                    <input type="text" onChange={event => this.onChange("address", event)}></input>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" onChange={event => this.onChange("phone", event)}></input>                   
                </div>

                <br />
                <h4>Your data from DB:</h4>
                <div>{name}</div>
                <div>{address}</div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default Index;