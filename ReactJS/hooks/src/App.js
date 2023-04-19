import useInput from './hooks/useInput';
import useTabs from './hooks/useTabs';
import useTitle from './hooks/useTitle';

function App() {
  /*////////////////////////////useInput
  const maxlen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxlen);
  return (
    <div>
      <input placeholder="name" {...name}/>
    </div>
  );
  */

 /*////////////////////////////useTabs
const content = [
  {
    tab: "Section 1",
    content: "Section 1 content"
  },
  {
    tab: "Section 2",
    content: "Section 2 content"
  }
];

 const { currentItem, changeItem } = useTabs(1, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
 */

  /*////////////////////////////useTitle
const titleUpdate = useTitle("Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
  */

  /*////////////////////////////

  */

 /*////////////////////////////

 */

/*////////////////////////////

*/

/*////////////////////////////

*/

/*////////////////////////////

*/


}

export default App;
