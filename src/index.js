import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        rows: ['a','b','c','d','e','f','g','h'],
        columns: [1,2,3,4,5,6,7,8],
        boxes: []
    }
  }

  renderSell(){
      const square = this.state.rows[Math.floor(Math.random() * this.state.rows.length)]+this.state.columns[Math.floor(Math.random() * this.state.columns.length)];
      this.state.boxes.push(square);
  }

  render() {

      return(
          <div id = "container">
              <button className="starGame" onClick={()=> console.log(this.state.rows[Math.floor(Math.random() * this.state.rows.length)]+this.state.columns[Math.floor(Math.random() * this.state.columns.length)])}>Start Game</button>
              <ol>
                  {this.state.boxes.map((box, index) => <li key={index}>{box}</li>)}
              </ol>
          </div>



      );
  }
}



class Board extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="board">
                    <h1>Chess view</h1>
                    <table id="tablero">
                        <tr>
                            <td>&#9820;</td>
                            <td>&#9822;</td>
                            <td>&#9821;</td>
                            <td>&#9819;</td>
                            <td>&#9818;</td>
                            <td>&#9821;</td>
                            <td>&#9822;</td>
                            <td>&#9820;</td>
                        </tr>
                        <tr>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                            <td>&#9823;</td>
                        </tr>
                        <tr>
                            <td>&#9820;</td>
                            <td>&#9822;</td>
                            <td>&#9821;</td>
                            <td>&#9819;</td>
                            <td>&#9818;</td>
                            <td>&#9821;</td>
                            <td>&#9822;</td>
                            <td>&#9820;</td>
                        </tr>
                    </table>
                </div>
            </div>

        );
    }
}



ReactDOM.render(
  <Game />,
  document.getElementById('buttons-place')
);


ReactDOM.render(
 <Board />,
  document.getElementById('root')
);



