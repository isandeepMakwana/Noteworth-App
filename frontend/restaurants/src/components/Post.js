import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
import {ToastsContainer, ToastsStore} from 'react-toasts';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from 'mdbreact';
import API from "../api";


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            foodtype: '',
            address: '',
            rating: '',
            contact: '',
            speciality: '',
        }
    }

    onChange(event) {
        const {
            target: {name, value}
        } = event;
        this.setState({[name]: value});
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = this.state;
        API.createRestaurant(obj)
            .then(res => {
                ToastsStore.success('Successfully Saved!');
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
                                <p className="h4 text-center mb-4">Add Your Food item</p>
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

                                <select name="rating" value={this.state.rating} className="form-control" onChange={this.onChange} required={true}>
                                    <option value=""> </option>
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