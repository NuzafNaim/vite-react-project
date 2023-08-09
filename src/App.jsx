import React, { Fragment } from 'react';





// Using only one condition && condition 
const App = () => {
  let isLogedIn = true;
  return (
    <Fragment>
      {
        isLogedIn && <button className='btn btn-success'>Dashboard</button>
     }
    </Fragment>
  );
};





// // Using map loop 
// const App = () => {
//   let items = ['A', 'B', 'C', 'D', 'E'];
//   return (
//     <Fragment>
//       <ol>
//       {
//         items.map((eachItem) => {
//           return <li key="">{eachItem}</li>
//         })
//         }
//       </ol>
//     </Fragment>
//   );
// };


// If else condtion
// const App = () => {
//   let marks = 80;
//   return (
//     <Fragment>
//       {
//         (() => {
//           if (marks >= 80) {
//            return <h1>Passed</h1>
//           } else {
//             return <h1>Failed</h1>
//          }
//        })()
//       }
//     </Fragment>
//   );
// };

export default App;