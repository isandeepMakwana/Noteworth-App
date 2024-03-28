import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
import {ToastsContainer, ToastsStore} from 'react-toasts';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from 'mdbreact';
import API from "../api";


export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: '',
            name: '',
            foodtype: '',
            address: '',
            rating: '',
            contact: '',
            speciality: '',
            postList: [],
            isLoading: true,
        }
    }

    onChange(event) {
        const {
            target: {name, value}
        } = event;
        this.setState({[name]: value});
    }

    getRestaurant() {
        API.getOneRestaurant(this.props.location.state.detail)
            .then(res => {
                let data = res.data
                this.setState({
                    ...data,
                    isLoading: false
                });
            })
    }

    componentDidMount() {
        this.getRestaurant();
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('----',this.state)
        const obj = this.state;
        API.editRestaurant(obj)
            .then(res => {
                ToastsStore.success('Successfully Updated!');
                this.setState({
                    ...obj
                })
            });
    }


    render() {

        return (
            <div

            >
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="3">

                        </MDBCol>
                        <MDBCol md="6">
                            <form onSubmit={this.onSubmit}>
                                <p className="h4 text-center mb-4">TO-DO Application</p>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    name
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    onChange={this.onChange}
                                    name="name"
                                    value={this.state.name}
                                    required={true}
                                />
                                <br/>
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    foodtype
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormLoginPasswordEx"
                                    className="form-control"
                                    value={this.state.foodtype}
                                    name="foodtype"
                                    onChange={this.onChange}
                                    required={true}
                                />
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    address
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    onChange={this.onChange}
                                    name="address"
                                    value={this.state.address}
                                    required={true}
                                />
                                <br/><label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                rating
                            </label>

                                <select defaultValue={this.state.rating}
                                        name="rating"
                                        value={this.state.rating} className="form-control"
                                        onChange={this.onChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <br/>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    contact
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    onChange={this.onChange}
                                    name="contact"
                                    value={this.state.contact}
                                    maxLength={13}
                                    minLength={10}
                                    required={true}
                                />
                                <br/>

                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    speciality
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    onChange={this.onChange}
                                    name="speciality"
                                    value={this.state.speciality}
                                />
                                <br/>


                                <div className="text-center mt-4">
                                    <MDBBtn color="indigo" type="submit">Submit</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="3">

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <ToastsContainer store={ToastsStore}/>
            </div>
        );
    }
}