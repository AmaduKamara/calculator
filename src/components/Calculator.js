import { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({});

  const handleClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/6 shadow-lg">
        <div className="text-white bg-gray-500 flex justify-end p-5 w-full">
          <span className="text-2xl font-semibold">{next || total || 0}</span>
        </div>
        <table className="w-full">
          <tbody className="w-2/6">
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  AC
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  +/-
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  %
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                <button className="p-6" type="button" onClick={handleClick}>
                  ÷
                </button>
              </td>
            </tr>
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  7
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  8
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  9
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                <button className="p-6" type="button" onClick={handleClick}>
                  *
                </button>
              </td>
            </tr>
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  4
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  5
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  6
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                <button className="p-6" type="button" onClick={handleClick}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  1
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  2
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  3
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500 text-xl">
                <button className="p-6" type="button" onClick={handleClick}>
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
                <button className="p-6" type="button" onClick={handleClick}>
                  0
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button className="p-6" type="button" onClick={handleClick}>
                  .
                </button>
              </td>
              <td className="text-center hover:bg-gray-200 bg-orange-500 text-xl">
                <button className="p-6" type="button" onClick={handleClick}>
                  =
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
