import { useDispatch } from "react-redux";
import { questionStopTimer, setEnd } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const testEndHandler = (Component) => {
  const TestEndHandler = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handler = async (e) => {
      await Promise.all([dispatch(questionStopTimer()), dispatch(setEnd())]);
      return navigate("/end");
    };
    return <Component handler={handler} {...props} />;
  };
  return TestEndHandler;
};

export default testEndHandler;
