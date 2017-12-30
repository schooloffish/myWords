import React from 'react';
import { observer } from 'mobx-react';

@observer(['wordListStore'])
export class WordList extends React.Component {
    audio;
    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.play = this.play.bind(this);
    }

    play(e, phrase) {
        e.preventDefault();

        this.audio.pause();
        this.audio.src = `http://dict.youdao.com/dictvoice?audio=${phrase}&type=2`;
        this.audio.play();
    }

    componentDidMount() {
        this.props.wordListStore.getAllPhrases();
    }

    render() {
        const phraseList = this.props.wordListStore.allPhrases.map((p, index) => <tr key={index}>
            <td><a href="#" onClick={(e) => this.play(e, p.phrase)} onMouseOver={(e) => this.play(e, p.phrase)}>
                <span className="glyphicon glyphicon-volume-up"></span>
            </a> {p.phrase}</td>
            <td>{p.phonetic}</td>
            <td>{p.meaning}</td>
            <td>{p.update_time}</td>
        </tr >);

        return <table>
            <tbody>
                <tr>
                    <th>Word</th>
                    <th>phonetic</th>
                    <th>Meaning</th>
                    <th>Update Date</th>
                </tr>
                {phraseList}
            </tbody>
        </table >
    }
}