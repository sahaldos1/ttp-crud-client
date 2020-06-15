import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
  EditCampusFormContainer,
  AddStudentToCampusContainer,
} from "../containers";
import AllStudentsContainer from "../containers/AllStudentsContainer";
// import AddStudentFormContainer from "../containers/AddStudentToCampusContainer";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllCampusesContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/new" component={AddCampusFormContainer} />
      <Route exact path="/campuses/:id" component={CampusContainer} />
      <Route
        exact
        path="/campuses/:id/edit"
        component={EditCampusFormContainer}
      />
      <Route exact path="/students" component={AllStudentsContainer} />
      {/* <Route exact path="/students/new" component={AddStudentFormContainer} /> */}
      <Route exact path="/students/new" component={AddStudentToCampusContainer} />
    </Switch>
  );
};

export default RoutesView;
