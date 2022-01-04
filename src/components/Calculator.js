import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/6 shadow-lg">
          <div className="text-white bg-gray-500 flex justify-end p-5 w-full">
            <span>0</span>
          </div>
          <table className="w-full">
            <tbody className="w-2/6">
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  AC
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  +/-
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  %
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  ÷
                </td>
              </tr>
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  7
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  8
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  9
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  *
                </td>
              </tr>
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  4
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  5
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  6
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  -
                </td>
              </tr>
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  1
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  2
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  3
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                  +
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="2"
                  className="p-6 bg-white border hover:bg-gray-200 text-center"
                >
                  0
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  .
                </td>
                <td className="p-6 border text-center hover:bg-gray-200 bg-orange-500 text-xl">
                  =
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
