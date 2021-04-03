import React from 'react'
import axios from 'axios';
import {ReactComponent as ArrowLeft} from '../svgs/arrow_left.svg'
import {ReactComponent as ArrowRight} from '../svgs/arrow_right.svg'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            items2:[]
        };
    }

    componentDidMount=async()=> {
        const response=await axios.get("http://zmdp.cloud/iseAlim/spotify.json");
        this.setState({items:response.data.recentlyPlayed})
        this.setState({items2:response.data.recommended})
    }

    render(){
        const {items,items2}=this.state;
        return (
            <div className="main">
                <div className="upperNav">
                    <ArrowLeft/>
                    <ArrowRight />
                </div>
                <div className="mainContent">
                    <div className="cardsWrap">
                        <h1>Yakında Çalanlar</h1>
                        <div className="cardsWrapInner">
                            {
                                items.map(d=>(
                                        <div className="card">
                                            <div className="cardImage">
                                                <img src={d.images[0].url}
                                                     alt="Pic 1"/>
                                            </div>
                                            <div className="cardContent">
                                                <h3>{d.name}</h3>
                                                <span>{d.description}</span>
                                            </div>
                                        </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="cardsWrap">
                        <h1>Tavsiye Edilenler</h1>
                        <p className="subText">Sevdiğin her şeyden biraz dinle.</p>
                        <div className="cardsWrapInner">
                            {
                                items2.map(d=>(
                                    <div className="card">
                                        <div className="cardImage">
                                            <img src={d.images[0].url}
                                                 alt="Pic 1"/>
                                        </div>
                                        <div className="cardContent">
                                            <h3>{d.name}</h3>
                                            <span>{d.description}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        );
    }


}