import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/6 shadow-lg">
          <div className="text-white bg-gray-500 flex justify-end p-5 w-full">
            <span>{next || total || 0}</span>
          </div>
          <table className="w-full">
            <tbody className="w-2/6">
              <tr>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    AC
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    +/-
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    %
                  </button>
                </td>
                <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    ÷
                  </button>
                </td>
              </tr>
              <tr>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    7
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    8
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    9
                  </button>
                </td>
                <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    4
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    5
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    6
                  </button>
                </td>
                <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    1
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    2
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    3
                  </button>
                </td>
                <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="2"
                  className="bg-white border hover:bg-gray-200 text-center"
                >
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    0
                  </button>
                </td>
                <td className="bg-white border hover:bg-gray-200 text-center">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    .
                  </button>
                </td>
                <td className="text-center hover:bg-gray-200 bg-orange-500 text-xl">
                  <button
                    className="p-6"
                    type="button"
                    onClick={this.handleClick}
                  >
                    =
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
