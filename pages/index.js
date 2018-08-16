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

    renderInput = (labelText, stateKey) => {
        return (
            <div>
                <label>{labelText}</label>
                <input type="text" onChange={event => this.onChange(stateKey, event)}></input>                   
            </div>
        );
    }

    render() {
        const { name, address, phone } = this.state;
        console.log("In render, the name is:" + name);
        return (
            <div>
                <h2>Welcom to HAMS!</h2>
                
                {this.renderInput("Name:", "name")}
                {this.renderInput("Address:", "address")}
                {this.renderInput("Phone:", "phone")}

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