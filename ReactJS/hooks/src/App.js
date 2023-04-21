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

  /*////////////////////////////useClick
const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
  */

 /*////////////////////////////useConfirm
const deleteWorld = () => console.log("delete");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
 */

/*////////////////////////////usePreventLeave
 const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
*/

/*////////////////////////////useBeforeLeave
const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return <div className="App"></div>;
*/

/*////////////////////////////useFadeIn
const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>lalalalalalal</p>
    </div>
  );
*/

/*////////////////////////////useNetwork
const handleNetworkChange = (online) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
*/

/*////////////////////////////useScroll
const { y } = useScroll();
  return (
    <div className="App" style={{ height: "200vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
*/

/*////////////////////////////useFullscreen
const onFullS = (isFull) => {
    console.log(isFull ? "full" : "small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
*/

/*////////////////////////////useNotification
const triggerNotif = useNotification("Hi", { body: "body" });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
*/

/*////////////////////////////useAxios
const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `Loading: ${loading}\ndata: ${JSON.stringify(data)}\nerror: ${error}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading.."}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
*/

}

export default App;
