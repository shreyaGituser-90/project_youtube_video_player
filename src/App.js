import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";

const App = () => (
  <Router>
    <Box
      sx={{
        p: 1,
        bgcolor: "#000",
      }}
    >
      <Navbar />
      <Routes>
        <Route exact path="/" component={Feed} />
        <Route path="/video/:id" component={VideoDetail} />
        <Route path="/channel/:id" component={ChannelDetail} />
        <Route path="/search/:searchTerm" component={SearchFeed} />
      </Routes>
    </Box>
  </Router>
);

export default App;
