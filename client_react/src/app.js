import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Phrase } from './phrase';
import { Sentence } from './sentence';
import { WordList } from './wordList';

const Home = () => <div>Home</div>;

export class App extends React.Component {
    render() {
        return <div className="container">
            <nav>
                <Link to="/allphrases">All Phrases</Link>|
                <Link to="/sentence">Sentence</Link>|
                <Link to="/phrase/0">Phrase</Link>|
            </nav>
            <div className="header">
                <h3 className="text-muted">My Words</h3>
            </div>
            <div className="jumbotron">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/allphrases' component={WordList} />
                    <Route path='/sentence' component={Sentence} />
                    <Route path='/phrase/:id' component={Phrase} />
                </Switch>
            </div>
            <div className="footer">
                <p>&copy; Feifei 2016</p>
            </div>
        </div>
    }
}