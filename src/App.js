import React, { Component } from 'react';
import facebook from './Facebook.png';
import './App.css';

class menssage extends Component {
  render(){
    return(
      <div>
        <div className='faceBox'>
          <img className="faceLogo" src={facebook}/>
          <h1>Criando um Projeto React</h1>
          <div className='faceLorem'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default menssage;
