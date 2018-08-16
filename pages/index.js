class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Test",
            address: "Some default address",
            phone: "Some default phone"
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }

    onNameChange(event) {
        this.setState({name: event.currentTarget.value});
    }

    // onNameChange = (event) => {
    //     this.setState({name: event.currentTarget.value});
    // }

    onAddressChange(event) {
        this.setState({address: event.currentTarget.value});
    }

    onPhoneChange(event) {
        this.setState({phone: event.currentTarget.value});
    }

    render() {
        const { name, address, phone } = this.state;
        console.log("In render, the name is:" + name);
        return (
            <div>
                <h2>Welcom to HAMS!</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={this.onNameChange}>
                    </input>
                </div>

                <div>
                    <label>Address:</label>
                    <input type="text" onChange={this.onAddressChange}>
                    </input>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" onChange={this.onPhoneChange}>
                    </input>
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