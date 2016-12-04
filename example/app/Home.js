/**
 * Created by AlexWang on 8/11/2016.
 */
import React, {Component} from 'react'
import Waterfall from "./component/Waterfall"
class Home extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                {
                    image: "http://www.sevenkm.com:8000/img/Te Papa.jpg",
                },
                {
                    image: "http://www.sevenkm.com:8000/img/Kiwi.jpg",
                },
                {
                    image: "http://www.sevenkm.com:8000/img/Hakawai.jpg",
                },
                {
                    image: "http://www.sevenkm.com:8000/img/Crustacea.jpg",
                },
                {
                    image: "http://www.sevenkm.com:8000/img/Crustacean taxa.jpg",
                },
            ],
        }
    }


    render() {
        return (
            <div>
                <Waterfall colunmNum={3} images={this.state.images}></Waterfall>
            </div>
        );
    }
}

export default Home