import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// React is not used here, but it would throw "React is undefined" error if remove this line
import { Provider,observer } from 'mobx-react';
import { computed, observable, action, useStrict } from 'mobx';