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

    componentDidMount() {
        this.props.sentenceStore.getAllSentence();
    }

    play(e, sentence) {
        e.preventDefault();

        this.audio.pause();
        this.audio.src = `http://dict.youdao.com/dictvoice?audio=${sentence}&type=2`;
        this.audio.play();
    }

    render() {
        const { vocabularies } = this.props.sentenceStore;
        const vocabularyList = vocabularies.map((v, index) => <li key={index}>
            <a onClick={(e) => this.play(e, v)} onMouseOver={(e) => this.play(e, v)}>
                <span className="glyphicon glyphicon-volume-up"></span>
            </a> {v}
        </li >);
        return <div>
            <h1>My Vocabularies</h1>
            <ol>
                {vocabularyList}
            </ol>
        </div>
    }
}