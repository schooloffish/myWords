import React from 'react';
import { observer } from 'mobx-react'

@observer(['sentenceStore'])
export class Sentence extends React.Component {
    audio;

    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.play = this.play.bind(this);
    }

    play(sentence) {
        this.audio.pause();
        this.audio.src = `http://dict.youdao.com/dictvoice?audio=${sentence}&type=2`;
        this.audio.play();
        return false;
    }

    render() {
        const { vocabularies } = this.props.sentenceStore;
        const vocabularyList = vocabularies.map((v, index) => <li key={index}>
            <a onClick={this.play(v)} onMouseOver={this.play(v)}>
                <span className="glyphicon glyphicon-volume-up"></span>
            </a>
            {v}
        </li>);
        return <div>
            <h1>My Vocabularies</h1>
            <ol>
                {vocabularyList}
            </ol>
        </div>
    }
}