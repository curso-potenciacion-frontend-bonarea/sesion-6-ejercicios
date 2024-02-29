import CreateUser from "./users/components/CreateUser";
import UserData from "./users/components/UserData/UserData";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <CreateUser />
      <UserData />
    </div>
  );
};

export default App;
