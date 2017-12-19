import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    getLetters, 
    getSpecials, 
    getAutos,
    initiateAddition,
    initiateBackspace,
    initiateAutofill,
} from '../reducers/alphabet.js';

const Letter = ({keyVal, val, initiateAddition}) => (
    <li className={val + "-letter inline"}  
        onClick={() => initiateAddition(val)}>
        {val}
    </li>
);

const Specials = ({keyVal, val, initiateBackspace}) => (
    <li className="inline" 
        onClick={() => initiateBackspace(val)}>
        {val}
    </li>
);

const Autos = ({keyVal, val, initiateAutofill}) => (
    <li className="inline"
        onClick={() => initiateAutofill(val)}>
        {val}
    </li>
);

class Alphabet extends Component {
    render() {
        return (
        <div className="Alphabet">
            <ul className="Alphabet-ul">
                {this.props.letters.map(letter => 
                    <Letter 
                        initiateAddition={this.props.initiateAddition}
                        key={letter.keyVal} {...letter}/>
                )}
            </ul>  
            <div>
                {this.props.specials.map(special => 
                    <Specials
                        initiateBackspace={this.props.initiateBackspace}
                        key={special.keyVal} {...special}/>
                )}
            </div>
            <div className="autofills">
                {this.props.autos.map(auto => 
                    <Autos
                        initiateAutofill={this.props.initiateAutofill}
                        key={auto.keyVal} {...auto}/>
                )}
            </div>   
        </div>     
        );
    }
}

export default connect(
    (state) => (
        {
            letters: getLetters(),
            specials: getSpecials(),
            autos: getAutos(state.alphabet.currentMessage),
        }
    ),
    {initiateAddition, initiateBackspace, initiateAutofill}
)(Alphabet);