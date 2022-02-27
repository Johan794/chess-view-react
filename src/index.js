import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';







class Board extends React.Component{
  render() {
      return(
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
      );
  }
}














ReactDOM.render(
 <Board />,
  document.getElementById('root')
);


