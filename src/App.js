import React, { Component } from "react";
import Page from "./components/Page";
import CalendarContainer from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div>
        <Page>
          <CalendarContainer />
        </Page>
      </div>
    );
  }
}

export default App;

// TODO: Add data source
// TODO: Add async req to checkboxes for to do list so that
// items can be deleted or styled as "done"
